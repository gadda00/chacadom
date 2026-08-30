import { usePageMeta } from '@/lib/seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  KeyRound,
  TrendingUp,
  Landmark,
  Megaphone,
  Handshake,
  PieChart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/data/content'
import { fadeUp } from '@/lib/motion'

const ICONS: Record<string, React.ElementType> = {
  Building2,
  KeyRound,
  TrendingUp,
  Landmark,
  Megaphone,
  Handshake,
  PieChart,
}

export default function Services() {
  usePageMeta(
    'Services — Seven Lines, One Standard',
    'Commercial sales, leasing, investment advisory, land & development, marketing, joint ventures and portfolio management.',
  )
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Our services</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Buy · Sell · Lease · Develop · <span className="gold-text">Invest</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Seven service lines, one discipline: verified facts, honest math, and outcomes we’d
            accept for our own families. From a first plot to a managed portfolio, the full value
            chain under one roof.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <motion.div
                key={s.id}
                {...fadeUp}
                id={s.id}
                className={`card-luxe card-luxe-hover grid gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] ${
                  i % 2 === 1 ? 'lg:bg-cream/50' : ''
                }`}
              >
                <div className="flex flex-col items-center gap-4 lg:w-32">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient shadow-gold-md">
                    <Icon className="h-8 w-8 text-white" />
                  </span>
                  <p className="font-display text-3xl font-bold text-gold-200">0{i + 1}</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-1.5 text-sm font-semibold text-gold-700">{s.short}</p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.description}</p>
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center lg:w-36">
                  <Link to="/contact" className="btn-outline whitespace-nowrap !px-5">
                    Enquire <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="container-luxe text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Not sure which service you need?{' '}
              <span className="gold-text">That’s what the first call is for.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Tell us where you are — first plot, growing portfolio, or institutional mandate — and
              we’ll map the right entry point. No obligation, no pressure.
            </p>
            <Link to="/contact" className="btn-gold mt-8">
              Book a consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
