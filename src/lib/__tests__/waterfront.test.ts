// @vitest-environment jsdom
/**
 * Waterfront Karen feature invariants — the flagship-location content is
 * hand-maintained, so guard it: images must exist in public/, stats and
 * sources must be populated, video ids well-formed, and the Keja.ai
 * cross-link must point at the deployed guide.
 */
import { existsSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { WATERFRONT_KAREN } from '@/data/waterfront'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')

describe('Waterfront Karen — data integrity', () => {
  it('hero and every gallery image exists as webp+jpg in public/', () => {
    const images = [WATERFRONT_KAREN.hero, ...WATERFRONT_KAREN.gallery]
    expect(images.length).toBeGreaterThanOrEqual(5)
    for (const im of images) {
      expect(existsSync(resolve(ROOT, `public${im.base}.webp`)), `${im.base}.webp`).toBe(true)
      expect(existsSync(resolve(ROOT, `public${im.base}.jpg`)), `${im.base}.jpg`).toBe(true)
    }
  })

  it('carries the full weight: stats, amenities, thesis, sources, video', () => {
    expect(WATERFRONT_KAREN.stats.length).toBeGreaterThanOrEqual(5)
    expect(WATERFRONT_KAREN.amenities.length).toBeGreaterThanOrEqual(8)
    expect(WATERFRONT_KAREN.thesis.length).toBeGreaterThanOrEqual(3)
    expect(WATERFRONT_KAREN.sources.length).toBeGreaterThanOrEqual(3)
    for (const s of WATERFRONT_KAREN.sources) {
      expect(s.url).toMatch(/^https:\/\/[\w.-]+/)
    }
    expect(WATERFRONT_KAREN.video.id).toMatch(/^[\w-]{11}$/)
    expect(WATERFRONT_KAREN.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('reported figures are explicitly labelled as reported (honesty discipline)', () => {
    const reportedStats = WATERFRONT_KAREN.stats.filter((s) => /9B|50\.6/i.test(s.value))
    expect(reportedStats.length).toBeGreaterThanOrEqual(2)
    for (const s of reportedStats) {
      expect(s.note?.toLowerCase()).toContain('reported')
    }
  })

  it('cross-links the live Keja.ai guide on the deployed origin', () => {
    expect(WATERFRONT_KAREN.kejaGuide).toBe(
      'https://gadda00.github.io/keja-ai/areas/waterfront-karen',
    )
  })
})

describe('Waterfront Karen — route wiring', () => {
  it('App.tsx, prerender ROUTES and sitemap all carry /waterfront-karen', () => {
    const app = readFileSync(resolve(ROOT, 'src/App.tsx'), 'utf8')
    const prerender = readFileSync(resolve(ROOT, 'scripts/prerender.mjs'), 'utf8')
    const sitemap = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8')
    expect(app).toContain('"/waterfront-karen"')
    expect(prerender).toContain("'/waterfront-karen'")
    expect(sitemap).toContain('/chacadom/waterfront-karen')
  })
})
