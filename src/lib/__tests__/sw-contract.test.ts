/**
 * SW version contract — the deploy stamps the service-worker cache version
 * mechanically (scripts/sw-version.mjs), so the contract between the two
 * files must be pinned: the literal must exist, must be regex-matchable by
 * the stamper, and the deploy workflow must actually run the stamper.
 * The v3→v4→v5 bumps were all manual hand-edits; this test keeps the
 * automation from silently drifting out of the pipeline.
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')

const SW = readFileSync(resolve(ROOT, 'public/sw.js'), 'utf8')
const STAMPER = readFileSync(resolve(ROOT, 'scripts/sw-version.mjs'), 'utf8')
const DEPLOY = readFileSync(resolve(ROOT, '.github/workflows/deploy-pages.yml'), 'utf8')

describe('service-worker version stamping contract', () => {
  it('sw.js declares a single `const VERSION = …` literal', () => {
    const matches = SW.match(/const VERSION = '[^']*'/g) ?? []
    expect(matches.length).toBe(1)
  })

  it('the stamper regex matches the literal in sw.js (they cannot drift)', () => {
    const stamperRegex = STAMPER.match(/\/const VERSION = '\[\^'\]\*'\//)?.[0]
    expect(stamperRegex).toBeTruthy()
    // the literal in sw.js must be found by exactly this pattern
    expect(new RegExp(`const VERSION = '[^']*'`).test(SW)).toBe(true)
  })

  it('cache names derive from the versioned constant (no hardcoded vN caches)', () => {
    expect(SW).toContain('`${VERSION}-assets`')
    expect(SW).toContain('`${VERSION}-pages`')
    expect(SW).not.toMatch(/['"]v\d+-(assets|pages|images)['"]/)
  })

  it('the deploy workflow runs the stamper after prerendering', () => {
    expect(DEPLOY).toContain('node scripts/sw-version.mjs')
    // stamping must happen AFTER content is prerendered, or the hash covers
    // a partial tree
    const prerenderIdx = DEPLOY.indexOf('prerender.mjs')
    const stampIdx = DEPLOY.indexOf('sw-version.mjs')
    expect(prerenderIdx).toBeGreaterThan(-1)
    expect(stampIdx).toBeGreaterThan(prerenderIdx)
  })
})
