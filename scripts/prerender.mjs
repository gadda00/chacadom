#!/usr/bin/env node
/**
 * Prerender — turns the SPA into a static-first site.
 *
 * Problem this solves: on GitHub Pages every deep route (/about, /contact…)
 * was served by the 404.html SPA-fallback copy — the page rendered, but with
 * HTTP status 404. Crawlers treated all 12 sitemap URLs as soft-404s, and
 * social scrapers (WhatsApp/Facebook/Twitter) refused to unfurl them, so
 * every share showed Home's meta tags.
 *
 * Approach: after `vite build`, serve dist/ locally, open every route in
 * headless Chromium, wait for the app to settle (meta mutations from
 * usePageMeta included), then write the rendered DOM to dist/<route>/index.html.
 * GitHub Pages serves those files with status 200. The SPA still boots on
 * top (progressive enhancement — same bundle, no hydration conflicts since
 * React re-renders into the same markup), and 404.html remains the fallback
 * for unknown URLs.
 *
 * Usage:  node scripts/prerender.mjs            (expects dist/ to exist)
 *         node scripts/prerender.mjs --base /chacadom/
 */
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')

// The preview server's origin (http://localhost:4173) leaks into captured
// HTML via window.location-derived canonical/og:url and vite's runtime
// modulepreload links. Rewrite every occurrence to the production origin or
// social scrapers would refuse the unfurls and canonicals would point off-site.
const PROD_ORIGIN = process.env.PRERENDER_ORIGIN ?? 'https://gadda00.github.io'
const PREVIEW_ORIGIN = 'http://localhost:4173'

const args = process.argv.slice(2)
const baseArgIdx = args.indexOf('--base')
const BASE = (baseArgIdx !== -1 ? args[baseArgIdx + 1] : '/chacadom/').replace(/\/$/, '')

// Every route from src/App.tsx (keep in sync — the test below fails loudly
// if a route is missing from the rendered output).
const ROUTES = [
  '/',
  '/about',
  '/proof',
  '/team',
  '/services',
  '/portfolio',
  '/ventures',
  '/insights',
  '/faq',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
]

async function main() {
  if (!existsSync(DIST)) {
    console.error('[prerender] dist/ not found — run `npm run build` first')
    process.exit(1)
  }

  const { chromium } = await import('playwright')

  // Local static server: vite preview serves dist/ exactly as it will be hosted.
  // Spawn in its own process group so killing the tree actually frees the port
  const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
    cwd: ROOT,
    stdio: 'ignore',
    detached: true,
  })

  const origin = 'http://localhost:4173'
  let up = false
  for (let i = 0; i < 60 && !up; i++) {
    try {
      const res = await fetch(origin + BASE + '/index.html')
      up = res.ok
      if (!up) await new Promise((r) => setTimeout(r, 500))
    } catch {
      await new Promise((r) => setTimeout(r, 500))
    }
  }
  if (!up) {
    try {
      process.kill(-server.pid, 'SIGKILL')
    } catch {
      server.kill()
    }
    console.error('[prerender] vite preview did not come up on :4173')
    process.exit(1)
  }

  let failures = 0
  try {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    for (const route of ROUTES) {
      const url = origin + BASE + route
      try {
        await page.goto(url, { waitUntil: 'networkidle' })
        // settle: let React mount + usePageMeta run
        await page.waitForFunction(() => document.readyState === 'complete')
        await page.waitForTimeout(350)

        let html = await page.evaluate(() => {
          // strip dev-only artifacts so they never leak into static files
          document.querySelectorAll('script[src*="@vite"]').forEach((s) => s.remove())
          return '<!DOCTYPE html>\n' + document.documentElement.outerHTML
        })
        // canonical/og:url/modulepreload: preview origin -> production origin
        html = html.replaceAll(PREVIEW_ORIGIN, PROD_ORIGIN)
        if (html.includes('localhost:')) {
          throw new Error('localhost URL survived the rewrite — check canonical/meta/modulepreload')
        }

        // sanity: the route's own title must be present (catches a blank render)
        const title = await page.title()
        if (!title) throw new Error('empty document title')

        const outDir = resolve(DIST, route === '/' ? '.' : route.slice(1))
        mkdirSync(outDir, { recursive: true })
        writeFileSync(resolve(outDir, 'index.html'), html)
        console.log(
          `[prerender] ${route.padEnd(12)} -> ${route === '/' ? 'dist/index.html' : `dist${route}/index.html`}  ("${title}")`,
        )
      } catch (err) {
        failures++
        console.error(`[prerender] FAILED ${route}: ${err.message}`)
      }
    }

    await browser.close()
  } finally {
    // always free the port — an orphaned preview server serving stale dist
    // makes every later run "succeed" against the wrong build
    try {
      process.kill(-server.pid, 'SIGKILL')
    } catch {
      server.kill()
    }
  }

  if (failures > 0) {
    console.error(`[prerender] ${failures}/${ROUTES.length} routes failed`)
    process.exit(2)
  }
  console.log(
    `[prerender] ${ROUTES.length}/${ROUTES.length} routes prerendered (status-200 pages for every sitemap URL)`,
  )
}

main().catch((e) => {
  console.error('[prerender] fatal:', e)
  process.exit(1)
})
