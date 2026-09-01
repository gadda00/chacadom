import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { asset } from '@/data/content'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/proof', label: 'Proof' },
  { to: '/waterfront-karen', label: 'Waterfront' },
  { to: '/ventures', label: 'Ventures' },
  { to: '/insights', label: 'Insights' },
  { to: '/faq', label: 'FAQ' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // passive: scroll handlers must never block scrolling on the main thread
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation without a setState-in-effect:
  // derive it — the menu force-closes whenever the route changes.
  const [route, setRoute] = useState(location.pathname)
  if (route !== location.pathname) {
    setRoute(location.pathname)
    if (open) setOpen(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        // restore the user's place in the focus order — the toggle they used
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Opening the menu moves focus into it, so keyboard users land on real
  // menu items instead of continuing into the page behind the overlay.
  useEffect(() => {
    if (!open) return
    const first = menuRef.current?.querySelector<HTMLElement>('a[href], button')
    first?.focus()
  }, [open])

  // Focus trap: Tab wraps at the menu boundaries while it is open.
  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !menuRef.current) return
    const focusables = menuRef.current.querySelectorAll<HTMLElement>('a[href], button')
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-card backdrop-blur-md' : 'bg-white/85 backdrop-blur-sm'
      } border-b border-gold-100`}
    >
      <div className="container-luxe flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={asset('/brand/chacadom-logo-128.jpg')}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover ring-1 ring-gold-200"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              CHACA<span className="gold-text-light">DOM</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wide2 text-ink-muted">
              Investments
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isActive
                    ? 'bg-gold-50 text-gold-700'
                    : 'text-ink-soft hover:bg-gold-50/60 hover:text-gold-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn-gold hidden !px-5 !py-2.5 xl:inline-flex">
          Invest Today
        </Link>

        <button
          type="button"
          ref={toggleRef}
          className="rounded-lg p-2 text-ink hover:bg-gold-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={open ? 'mobile-menu' : undefined}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Site menu"
          onKeyDown={onMenuKeyDown}
          className="border-t border-gold-100 bg-white px-4 pb-4 pt-2 xl:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                    isActive ? 'bg-gold-50 text-gold-700' : 'text-ink-soft hover:bg-gold-50/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-gold mt-2 w-full">
              Invest Today
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
