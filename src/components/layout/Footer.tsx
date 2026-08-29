import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { SITE, whatsappLink } from '@/data/content'
import { asset } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-gold-100 bg-ink text-white/80">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={asset('/brand/chacadom-logo.jpg')} alt="Chacadom" className="h-11 w-11 rounded-lg object-cover ring-1 ring-gold-400/30" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">CHACA<span className="gold-text">DOM</span></span>
              <span className="text-[9px] font-semibold uppercase tracking-wide2 text-gold-300">Investments</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.tagline}. Commercial real estate, investment advisory and portfolio management across Kenya —
            with discipline, transparency and a long view.
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-gold-400">
            {SITE.pillars.join(' · ')}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services#sales" className="hover:text-gold-300">Commercial Property Sales</Link></li>
            <li><Link to="/services#leasing" className="hover:text-gold-300">Leasing & Tenant Sourcing</Link></li>
            <li><Link to="/services#advisory" className="hover:text-gold-300">Investment Advisory</Link></li>
            <li><Link to="/services#land" className="hover:text-gold-300">Land & Development</Link></li>
            <li><Link to="/services#jv" className="hover:text-gold-300">Joint Ventures</Link></li>
            <li><Link to="/services#portfolio" className="hover:text-gold-300">Portfolio Management</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-gold-300">About Chacadom</Link></li>
            <li><Link to="/ventures" className="hover:text-gold-300">Ventures — Keja.ai</Link></li>
            <li><Link to="/insights" className="hover:text-gold-300">Investment Philosophy</Link></li>
            <li><Link to="/contact" className="hover:text-gold-300">Contact</Link></li>
            <li>
              <a href={SITE.kejaUrl} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                keja.ai ↗
              </a>
            </li>
            <li>
              <a href={SITE.tokenizeUrl} target="_blank" rel="noreferrer" className="font-semibold text-gold-300 hover:text-gold-200">
                Keja Tokenize ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide2 text-gold-400">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold-300">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              {SITE.address}
            </li>
            <li>
              <a
                href={whatsappLink('Hello Chacadom Investments, I’d like to discuss an opportunity.')}
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

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Chacadom Investments. All rights reserved.</p>
          <p className="uppercase tracking-wider">{SITE.values.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
