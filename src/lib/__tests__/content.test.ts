// @vitest-environment jsdom
/**
 * Site data invariants — content.ts is hand-maintained, so structural drift
 * (bad phone digits, broken wa.me format, duplicate service ids, bad links)
 * ships silently unless a test catches it.
 */
import { describe, expect, it } from 'vitest'

import {
  SITE,
  SERVICES,
  whatsappLink,
  asset,
  STATS,
  ENGAGEMENT_PROFILES,
  METHODOLOGIES,
  FEES_DISCLOSURE,
  ENTITY,
} from '@/data/content'

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

describe('claim provenance (STATS)', () => {
  it('every public stat carries definition, period and source', () => {
    for (const s of STATS) {
      expect(s.value.length).toBeGreaterThanOrEqual(1)
      expect(s.label.length).toBeGreaterThan(3)
      expect(s.definition.length).toBeGreaterThan(60) // a real definition, not a stub
      expect(s.asOf.length).toBeGreaterThan(4)
      expect(s.source.length).toBeGreaterThan(20)
    }
  })

  it('owner-attested figures say so explicitly (no fake audit implied)', () => {
    const transacted = STATS.find((s) => s.label.includes('transacted'))
    const deals = STATS.find((s) => s.label.includes('Deals'))
    expect(transacted?.source).toMatch(/not independently audited/i)
    expect(deals?.source).toMatch(/not independently audited/i)
  })

  it('forward-looking stats are labelled as plans, not facts', () => {
    const offices = STATS.find((s) => s.label.includes('planned'))
    expect(offices?.definition).toMatch(/[Pp]lanned.*not signed|forward-looking/)
  })
})

describe('engagement profiles (case-study framework)', () => {
  it('three profiles exist, each with the full case-study structure', () => {
    expect(ENGAGEMENT_PROFILES.length).toBeGreaterThanOrEqual(3)
    for (const p of ENGAGEMENT_PROFILES) {
      expect(p.mandateRole.length).toBeGreaterThan(5)
      expect(p.startingProblem.length).toBeGreaterThan(40)
      expect(p.workPerformed.length).toBeGreaterThanOrEqual(3)
      expect(p.outcome.length).toBeGreaterThan(40)
      expect(p.horizon.length).toBeGreaterThan(3)
      expect(p.risksEncountered.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('unverified profiles stay flagged (no fabricated client stories)', () => {
    for (const p of ENGAGEMENT_PROFILES) {
      // Until a permissioned real case replaces it, verified must be false —
      // the page copy and this invariant keep each other honest.
      expect(p.verified).toBe(false)
    }
  })
})

describe('methodology & disclosure completeness', () => {
  it('the five reviewed disciplines each have a methodology', () => {
    const ids = METHODOLOGIES.map((m) => m.id).sort()
    expect(ids).toEqual([
      'reporting',
      'tenant-screening',
      'title-review',
      'underwriting',
      'valuation',
    ])
    for (const m of METHODOLOGIES) {
      expect(m.steps.length).toBeGreaterThanOrEqual(4)
    }
  })

  it('fee disclosure covers the review-demanded conflict surfaces', () => {
    expect(FEES_DISCLOSURE.feeModel.length).toBeGreaterThan(80)
    const types = FEES_DISCLOSURE.feeTypes
      .map((f) => f.type)
      .join(' ')
      .toLowerCase()
    expect(types).toContain('referral')
    expect(types).toContain('ranking')
    expect(FEES_DISCLOSURE.conflictsPolicy.length).toBeGreaterThan(80)
    // website ranking must be explicitly non-commercial
    const ranking = FEES_DISCLOSURE.feeTypes.find((f) => f.type.toLowerCase().includes('ranking'))
    expect(ranking?.status).toBe('Not charged')
  })

  it('entity block discloses the unverified state honestly', () => {
    expect(ENTITY.contact.verified).toBe(false)
    expect(ENTITY.registration.verified).toBe(false)
    expect(ENTITY.lastReviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})
