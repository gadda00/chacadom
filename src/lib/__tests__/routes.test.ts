/**
 * Sitemap ↔ routes ↔ prerender inventory — the site's crawlable surface.
 * If a route is added to App.tsx but not to the sitemap (or the prerender
 * ROUTES list), this test fails loudly instead of shipping an invisible
 * gap in the static-first deployment.
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')

const APP = readFileSync(resolve(ROOT, 'src/App.tsx'), 'utf8')
const SITEMAP = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8')
const PRERENDER = readFileSync(resolve(ROOT, 'scripts/prerender.mjs'), 'utf8')

/** Route paths declared with element={<... />} in App.tsx. */
const appRoutes = [...APP.matchAll(/path="([^"]*)"/g)].map((m) => m[1]).filter((r) => r !== '*')

const sitemapRoutes = [...SITEMAP.matchAll(/<loc>[^<]*\/([^<]*)<\/loc>/g)]
  .map((m) => m[1])
  .map((r) => (r === '' ? '/' : `/${r}`))

const prerenderRoutes = [...PRERENDER.matchAll(/'(\/[a-z]*)'|'\/'/g)].map((m) => m[1])

describe('route inventory consistency', () => {
  it('every App route is in the sitemap (except the 404 wildcard)', () => {
    const missing = appRoutes.filter((r) => !sitemapRoutes.includes(r))
    expect(missing, `routes missing from sitemap: ${missing.join(', ')}`).toEqual([])
  })

  it('every sitemap URL corresponds to a real App route', () => {
    const extra = sitemapRoutes.filter((r) => !appRoutes.includes(r))
    expect(extra, `sitemap routes with no app route: ${extra.join(', ')}`).toEqual([])
  })

  it('every App route is prerendered (status-200 HTML on GitHub Pages)', () => {
    const missing = appRoutes.filter((r) => !prerenderRoutes.includes(r))
    expect(missing, `routes missing from prerender: ${missing.join(', ')}`).toEqual([])
  })

  it('dist/ 404 fallback exists in the CI plan', () => {
    const ci = readFileSync(resolve(ROOT, '.github/workflows/deploy-pages.yml'), 'utf8')
    expect(ci).toContain('404.html')
  })
})
