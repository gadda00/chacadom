import { useEffect } from 'react'
import { SITE } from '@/data/content'

/** Default social image — matches the static tag shipped in index.html so a
 *  route without its own image resets to the site default instead of sharing
 *  the previous route's image (or dropping the card entirely). */
const DEFAULT_OG_IMAGE = 'https://gadda00.github.io/chacadom/og-image.jpg'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)?.remove()
}

/** Optional per-route meta directives handled by usePageMeta. */
export interface PageMetaOptions {
  /** e.g. 'noindex, follow' for soft-404 pages. Absent ⇒ robots meta is removed. */
  robots?: string
  /** Per-route social image — upserts og:image + twitter:image when provided. */
  image?: string
}

/**
 * Per-route document title + meta description + canonical + OG tags.
 * Keeps social shares and search snippets accurate on every route of the SPA.
 */
export function usePageMeta(title: string, description?: string, options?: PageMetaOptions) {
  const { robots, image } = options ?? {}
  useEffect(() => {
    const full = title.includes(SITE.name) ? title : `${title} — ${SITE.name}`
    document.title = full
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }
    if (robots) {
      upsertMeta('name', 'robots', robots)
    } else {
      // Reset to the site default instead of removing: index.html statically
      // ships `index, follow, max-image-preview:large`, and stripping the
      // meta on normal routes would silently drop the image-preview directive
      // (Google Images/Discover preview size). A 404's noindex can still never
      // leak — this always overwrites it.
      upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    }
    if (image) {
      // The OG/Twitter spec requires ABSOLUTE image URLs — relative paths make
      // scrapers drop the share card entirely (the flagship Waterfront page
      // shared as a bare link before this fix). Absolute against the current
      // origin: the prerender pass rewrites the preview origin to production.
      const url = image.startsWith('http')
        ? image
        : `${window.location.origin}${image.startsWith('/') ? '' : '/'}${image}`
      upsertMeta('property', 'og:image', url)
      upsertMeta('name', 'twitter:image', url)
      // A route image has its own (unknown here) intrinsic size — the static
      // 1200x630 + site-default alt from index.html would misdescribe it, so
      // they are removed and scrapers size the image themselves.
      removeMeta('property', 'og:image:width')
      removeMeta('property', 'og:image:height')
      removeMeta('property', 'og:image:alt')
    } else {
      // Reset to the site default so a route without its own image neither
      // keeps the previous route's image (stale unfurls) nor loses the card.
      upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
      upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)
      upsertMeta('property', 'og:image:width', '1200')
      upsertMeta('property', 'og:image:height', '630')
      upsertMeta(
        'property',
        'og:image:alt',
        'Chacadom Investments — Vision. Value. Growth. Legacy.',
      )
    }
    upsertMeta('property', 'og:title', full)
    upsertMeta('name', 'twitter:title', full)
    const canonical = `${window.location.origin}${window.location.pathname}`
    upsertLink('canonical', canonical)
    upsertMeta('property', 'og:url', canonical)
  }, [title, description, robots, image])
}

/* ------------------------- structured data builders ------------------------ */

const JSONLD_ID = 'chacadom-route-jsonld'

/** Replace (or remove) the per-route JSON-LD structured-data block. */
function setRouteJsonLd(data: object | null) {
  document.getElementById(JSONLD_ID)?.remove()
  if (!data) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = JSONLD_ID
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/** Attach route-scoped JSON-LD to the current page (removed on unmount). */
export function useRouteJsonLd(data: object | null) {
  useEffect(() => {
    setRouteJsonLd(data)
    // Without this cleanup the FAQ schema (etc.) leaks onto every route that
    // follows — actively harmful rich-result attribution.
    return () => setRouteJsonLd(null)
  }, [data])
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
