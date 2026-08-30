// @vitest-environment jsdom
/**
 * SEO layer tests — the per-route meta mutations are the site's only SEO
 * surface (SPA), so regressions here are silent and expensive: a leaked
 * `noindex`, a stale canonical, or a missing robots removal directly costs
 * search visibility.
 */
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'

import { usePageMeta, faqJsonLd } from '@/lib/seo'

function head() {
  return document.head.innerHTML
}

beforeEach(() => {
  document.head.innerHTML = ''
})

afterEach(() => {
  document.head.innerHTML = ''
})

describe('usePageMeta', () => {
  it('sets the title with the site suffix once', () => {
    renderHook(() => usePageMeta('Contact', 'Get in touch'))
    expect(document.title).toBe('Contact — Chacadom Investments')
  })

  it('does not double-append the suffix when the title already carries it', () => {
    renderHook(() => usePageMeta('About — Chacadom Investments', 'x'))
    expect(document.title).toBe('About — Chacadom Investments')
  })

  it('writes description + og/twitter description', () => {
    renderHook(() => usePageMeta('Ventures', 'Roadmap and Keja.ai'))
    const h = head()
    expect(h).toContain('name="description" content="Roadmap and Keja.ai"')
    expect(h).toContain('property="og:description" content="Roadmap and Keja.ai"')
    expect(h).toContain('name="twitter:description" content="Roadmap and Keja.ai"')
  })

  it('sets a canonical link + og:url for the current location', () => {
    renderHook(() => usePageMeta('Team', 'Leadership'))
    expect(head()).toContain('rel="canonical"')
    expect(head()).toContain('property="og:url"')
  })

  it('upserts robots when provided and REMOVES it when absent', () => {
    const { rerender } = renderHook(
      ({ robots }: { robots?: string }) => usePageMeta('Page Not Found', 'x', { robots }),
      { initialProps: { robots: 'noindex, follow' } as { robots?: string } },
    )
    expect(head()).toContain('name="robots" content="noindex, follow"')

    // navigating from a 404 to a normal page must RESET to the site default
    // (never remove — index.html ships max-image-preview:large we must keep)
    rerender({ robots: undefined })
    expect(head()).toContain('name="robots" content="index, follow, max-image-preview:large"')
  })

  it('upserts per-route og:image + twitter:image when provided', () => {
    renderHook(() => usePageMeta('Portfolio', 'Track record', { image: '/insights/track.webp' }))
    const h = head()
    expect(h).toContain('property="og:image" content="/insights/track.webp"')
    expect(h).toContain('name="twitter:image" content="/insights/track.webp"')
  })
})

describe('faqJsonLd', () => {
  it('builds a valid FAQPage schema', () => {
    const ld = faqJsonLd([
      { q: 'Are you licensed?', a: 'We operate within the regulatory framework.' },
    ])
    expect(ld['@type']).toBe('FAQPage')
    expect(ld.mainEntity[0].name).toBe('Are you licensed?')
    expect(ld.mainEntity[0].acceptedAnswer.text).toContain('regulatory framework')
  })
})
