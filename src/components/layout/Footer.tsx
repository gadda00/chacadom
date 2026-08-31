import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { SITE, whatsappLink } from '@/data/content'
import { asset } from '@/data/content'
import { useState } from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gold-100 bg-ink text-white/80">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={asset('/brand/chacadom-logo-128.jpg')}
              alt="Chacadom"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-cover ring-1 ring-gold-400/30"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">
                CHACA<span className="gold-text">DOM</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wide2 text-gold-300">
                Investments
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.tagline}. Commercial real estate, investment advisory and portfolio management
            across Kenya — with discipline, transparency and a long view.
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-gold-400">
            {SITE.pillars.join(' · ')}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/services#sales" className="hover:text-gold-300">
                Commercial Property Sales
              </Link>
            </li>
            <li>
              <Link to="/services#leasing" className="hover:text-gold-300">
                Leasing & Tenant Sourcing
              </Link>
            </li>
            <li>
              <Link to="/services#advisory" className="hover:text-gold-300">
                Investment Advisory
              </Link>
            </li>
            <li>
              <Link to="/services#land" className="hover:text-gold-300">
                Land & Development
              </Link>
            </li>
            <li>
              <Link to="/services#jv" className="hover:text-gold-300">
                Joint Ventures
              </Link>
            </li>
            <li>
              <Link to="/services#marketing" className="hover:text-gold-300">
                Property Marketing & Promotion
              </Link>
            </li>
            <li>
              <Link to="/services#portfolio" className="hover:text-gold-300">
                Portfolio Management
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="hover:text-gold-300">
                About Chacadom
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-gold-300">
                Leadership & Desks
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gold-300">
                Track Record
              </Link>
            </li>
            <li>
              <Link to="/waterfront-karen" className="hover:text-gold-300">
                The Waterfront Karen
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gold-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/ventures" className="hover:text-gold-300">
                Ventures — Keja.ai
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-gold-300">
                Investment Philosophy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gold-300">
                Careers
              </Link>
            </li>
            <li>
              <a
                href={SITE.kejaUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-300"
              >
                keja.ai preview ↗
              </a>
            </li>
            <li>
              <a
                href={SITE.tokenizeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gold-300 hover:text-gold-200"
              >
                Keja Tokenize ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold-300">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              {SITE.address}
            </li>
            <li>
              <a
                href={whatsappLink(
                  'Hello Chacadom Investments, I’d like to discuss an opportunity.',
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-600/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* newsletter */}
      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-bold text-white">The Chacadom brief</p>
            <p className="mt-1 text-sm text-white/55">
              One considered email a month — market notes, corridor updates, new mandates. No noise.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Chacadom Investments. All rights reserved. ·{' '}
            {SITE.values.join(' · ')}
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-300">
              Terms & Disclaimers
            </Link>
            <Link to="/faq" className="hover:text-gold-300">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Newsletter capture: records the consent + address locally (demo build has
 *  no backend) and confirms via the visitor's email client. */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    try {
      const list = JSON.parse(localStorage.getItem('chacadom:newsletter') ?? '[]')
      if (!list.includes(email.trim().toLowerCase())) list.push(email.trim().toLowerCase())
      localStorage.setItem('chacadom:newsletter', JSON.stringify(list))
    } catch {
      /* storage unavailable */
    }
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Newsletter subscription')}&body=${encodeURIComponent(`Hello Chacadom, please add me to the monthly brief.\n\nEmail: ${email}`)}`
    setDone(true)
  }
  if (done) {
    return (
      <p
        className="shrink-0 rounded-lg bg-white/10 px-4 py-2.5 text-xs font-semibold text-gold-300"
        role="status"
      >
        Saved on this device — press Send in your email app to complete your subscription.
      </p>
    )
  }
  return (
    <form onSubmit={submit} className="flex shrink-0 items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-48 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={!valid}
        className="btn-gold !px-5 !py-2.5 !text-xs disabled:cursor-not-allowed disabled:opacity-50"
      >
        Subscribe
      </button>
    </form>
  )
}
