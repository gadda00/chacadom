// @vitest-environment jsdom
/**
 * Chacadom listings — data integrity invariants.
 *
 * The listing cards are vendor stock advertised through the WhatsApp
 * catalogue: guard that every card ships a real photo, a well-formed product
 * URL, a formatted price, and that the SITE whatsapp number (used for
 * handoffs) matches the catalogue's number.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { CLIENT_MANDATES, LISTINGS, WHATSAPP_CATALOG_URL, formatKes } from '@/data/listings'
import { SITE } from '@/data/content'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')
const VENDOR_WA_NUMBER = '254108611387'

describe('listings — data integrity', () => {
  it('ships at least four featured listings with unique ids', () => {
    expect(LISTINGS.length).toBeGreaterThanOrEqual(4)
    const ids = LISTINGS.map((l) => l.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every listing image exists as webp+jpg in public/', () => {
    for (const l of LISTINGS) {
      expect(existsSync(resolve(ROOT, `public${l.image.base}.webp`)), `${l.image.base}.webp`).toBe(
        true,
      )
      expect(existsSync(resolve(ROOT, `public${l.image.base}.jpg`)), `${l.image.base}.jpg`).toBe(
        true,
      )
      expect(l.image.width).toBeGreaterThan(0)
      expect(l.image.height).toBeGreaterThan(0)
      expect(l.image.alt.length).toBeGreaterThan(10)
    }
  })

  it('every listing links to a well-formed vendor WhatsApp product page', () => {
    for (const l of LISTINGS) {
      expect(l.whatsappUrl).toMatch(new RegExp(`^https://wa\\.me/p/\\d+/${VENDOR_WA_NUMBER}$`))
    }
  })

  it('catalogue URL points at the vendor business number, which SITE.whatsapp matches', () => {
    expect(WHATSAPP_CATALOG_URL).toBe(`https://wa.me/c/${VENDOR_WA_NUMBER}`)
    expect(SITE.whatsapp).toBe(VENDOR_WA_NUMBER)
  })

  it('prices format as compact KES millions; POA listings are explicit', () => {
    expect(formatKes(30_000_000)).toBe('KES 30M')
    expect(formatKes(105_000_000)).toBe('KES 105M')
    expect(formatKes(300_000_000)).toBe('KES 300M')
    for (const l of LISTINGS) {
      if (l.priceKes == null) {
        expect(l.priceNote).toMatch(/on application/i)
      } else {
        expect(l.priceKes).toBeGreaterThan(1_000_000)
        expect(formatKes(l.priceKes)).toMatch(/^KES [\d.]+M$/)
      }
    }
  })

  it('every listing carries descriptive substance, not a stub', () => {
    for (const l of LISTINGS) {
      expect(l.title.length).toBeGreaterThan(3)
      expect(l.tagline.length).toBeGreaterThan(20)
      expect(l.description.length).toBeGreaterThan(150)
      expect(l.location).toMatch(/Nairobi|Tatu City/i)
      expect(l.beds).toMatch(/bedroom/i)
      expect(l.specs.length).toBeGreaterThanOrEqual(3)
      for (const s of l.specs) {
        expect(s.label.length).toBeGreaterThan(2)
      }
    }
  })
})

describe('listings — page wiring', () => {
  it('Portfolio page renders every listing and the catalogue CTA', () => {
    const portfolio = readFileSync(resolve(ROOT, 'src/pages/Portfolio.tsx'), 'utf8')
    expect(portfolio).toContain('LISTINGS.map')
    expect(portfolio).toContain('WHATSAPP_CATALOG_URL')
    expect(portfolio).toContain('l.whatsappUrl')
  })

  it('Home page renders the listings strip with the WhatsApp handoff', () => {
    const home = readFileSync(resolve(ROOT, 'src/pages/Home.tsx'), 'utf8')
    expect(home).toContain('LISTINGS.map')
    expect(home).toContain('to="/portfolio"')
  })

  it('no placeholder contact numbers remain anywhere in src/', () => {
    // Built dynamically so this test file cannot match its own needle.
    const needle = ['254', '700', '123', '456'].join('')
    const offenders: string[] = []
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = resolve(dir, entry.name)
        if (entry.isDirectory()) {
          if (entry.name === 'node_modules' || entry.name === 'dist') continue
          walk(full)
        } else if (/\.(ts|tsx)$/.test(entry.name)) {
          const text = readFileSync(full, 'utf8')
          // whitespace-stripped so spaced or plus-prefixed variants match too
          if (text.replace(/\s/g, '').includes(needle)) {
            offenders.push(full)
          }
        }
      }
    }
    walk(resolve(ROOT, 'src'))
    expect(offenders).toEqual([])
  })
})

describe('client mandates — direct desk inventory', () => {
  it('ships the three live mandates with unique ids', () => {
    expect(CLIENT_MANDATES.length).toBeGreaterThanOrEqual(3)
    const ids = CLIENT_MANDATES.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids).toContain('daykio-bustani-residence')
    expect(ids).toContain('amber-bay-heights')
    expect(ids).toContain('kantafu-30-acres')
  })

  it('mandate images exist as webp+jpg in public/ when provided', () => {
    for (const m of CLIENT_MANDATES) {
      if (!m.image) continue
      expect(existsSync(resolve(ROOT, `public${m.image.base}.webp`)), `${m.image.base}.webp`).toBe(
        true,
      )
      expect(existsSync(resolve(ROOT, `public${m.image.base}.jpg`)), `${m.image.base}.jpg`).toBe(
        true,
      )
      expect(m.image.alt.length).toBeGreaterThan(10)
    }
  })

  it('every mandate enquiry opens a prefilled WhatsApp chat with the desk', () => {
    for (const m of CLIENT_MANDATES) {
      expect(m.enquiryUrl).toMatch(/^https:\/\/wa\.me\/254108611387\?text=.+$/)
      expect(decodeURIComponent(m.enquiryUrl.split('text=')[1]).length).toBeGreaterThan(20)
    }
  })

  it('mandates carry honest pricing and substance, not stubs', () => {
    for (const m of CLIENT_MANDATES) {
      expect(m.price.length).toBeGreaterThan(3)
      expect(m.title.length).toBeGreaterThan(3)
      expect(m.description.length).toBeGreaterThan(150)
      expect(m.highlights.length).toBeGreaterThanOrEqual(3)
      expect(m.location.length).toBeGreaterThan(5)
    }
  })
})
