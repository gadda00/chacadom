#!/usr/bin/env node
/**
 * Refresh sitemap lastmod in the BUILT output (dist/sitemap.xml) to the build
 * date. The committed public/sitemap.xml is the source of truth for the URL
 * set (and is covered by routes.test.ts); this step only stamps freshness so
 * the deployed file never advertises a stale crawl date.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SITEMAP = resolve(ROOT, 'dist/sitemap.xml')

if (!existsSync(SITEMAP)) {
  console.error('[sitemap] dist/sitemap.xml not found — run the build first')
  process.exit(1)
}

const today = new Date().toISOString().slice(0, 10)
const before = readFileSync(SITEMAP, 'utf8')
const count = (before.match(/<lastmod>/g) ?? []).length
const after = before.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`)
writeFileSync(SITEMAP, after)
console.log(`[sitemap] refreshed ${count} lastmod dates -> ${today}`)
