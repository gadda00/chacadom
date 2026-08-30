import { usePageMeta } from '@/lib/seo'
import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  usePageMeta('Page Not Found', 'This page does not exist.', { robots: 'noindex, follow' })
  const { pathname } = useLocation()
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-bold gold-text">404</p>
      <h1 className="heading-display mt-4 text-3xl">This page is off our books</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
        We couldn't find <span className="font-mono text-xs text-ink-soft">{pathname}</span>. It may
        have moved, or the address was mistyped. Let's get you back on solid ground.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="btn-gold">
          Back to home
        </Link>
        <Link to="/services" className="btn-outline">
          Our services
        </Link>
        <Link to="/contact" className="btn-outline">
          Contact us
        </Link>
      </div>
    </div>
  )
}
