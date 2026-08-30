// @vitest-environment jsdom
/**
 * Site data invariants — content.ts is hand-maintained, so structural drift
 * (bad phone digits, broken wa.me format, duplicate service ids, bad links)
 * ships silently unless a test catches it.
 */
import { describe, expect, it } from 'vitest'

import { SITE, SERVICES, whatsappLink, asset } from '@/data/content'

describe('SITE contact channels', () => {
  it('whatsapp digits are a valid international number (no +, no spaces)', () => {
    expect(SITE.whatsapp).toMatch(/^254\d{9}$/)
  })

  it('phone is a readable +254 display format consistent with whatsapp', () => {
    expect(SITE.phone).toMatch(/^\+254 \d{3} \d{3} \d{3}$/)
    expect(SITE.phone.replace(/\D/g, '')).toBe(SITE.whatsapp)
  })

  it('whatsappLink encodes the message and keeps the number clean', () => {
    expect(whatsappLink('Hello Chacadom')).toBe(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello Chacadom')}`,
    )
    expect(whatsappLink()).toBe(`https://wa.me/${SITE.whatsapp}`)
  })

  it('email is a plausibly-valid address on the company domain', () => {
    expect(SITE.email).toMatch(/^[^@\s]+@chacadom\.com$/)
  })
})

describe('asset() base-path joining', () => {
  it('strips a leading slash before the base path (no double slashes)', () => {
    // jsdom default BASE_URL is '/'
    expect(asset('/images/hero.webp')).toBe('/images/hero.webp')
    expect(asset('images/hero.webp')).toBe('/images/hero.webp')
  })
})

describe('SERVICES data integrity', () => {
  it('every service has unique ids and non-empty content fields', () => {
    const ids = SERVICES.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const s of SERVICES) {
      expect(s.title.length).toBeGreaterThan(5)
      expect(s.description.length).toBeGreaterThan(60)
      expect(s.points.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('advertised service count matches the nav copy promise (seven lines)', () => {
    // The Services page headline says "Seven Lines, One Standard"
    expect(SERVICES).toHaveLength(7)
  })
})
