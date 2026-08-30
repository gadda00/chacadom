import { useEffect } from 'react'
import { SITE } from '@/data/content'

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
      // Drop any directive left by a previous route (e.g. a 404's noindex)
      // so it can never leak onto an indexable page.
      document.head.querySelector('meta[name="robots"]')?.remove()
    }
    if (image) {
      upsertMeta('property', 'og:image', image)
      upsertMeta('name', 'twitter:image', image)
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
