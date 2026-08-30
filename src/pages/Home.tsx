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
  ArrowRight,
  Eye,
  Target,
  ShieldCheck,
  Bot,
  ChevronRight,
  CheckCircle2,
  Globe2,
} from 'lucide-react'
import { SITE, SERVICES, STATS } from '@/data/content'
import { asset } from '@/data/content'
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

export default function Home() {
  usePageMeta(
    'Chacadom Investments — Building Wealth Through Real Estate Excellence',
    'Vision. Value. Growth. Legacy. Trusted commercial real estate partner in Kenya — and home of Keja.ai, the AI real-estate trust layer.',
  )
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={asset('/images/hero-office.webp')} type="image/webp" />
            <img
              src={asset('/images/hero-office.jpg')}
              alt="Commercial real estate"
              width={1600}
              height={1067}
              fetchPriority="high"
              className="h-full w-full object-cover opacity-30"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
          <div className="absolute inset-0 bg-gold-shimmer opacity-[0.05]" />
        </div>

        <div className="container-luxe relative flex flex-col items-center py-28 text-center sm:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="divider-gold !w-12" />
              <img
                src={asset('/brand/chacadom-logo-128.jpg')}
                alt="Chacadom"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover shadow-gold-lg ring-1 ring-gold-400/40"
              />
              <span className="divider-gold !w-12" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl"
          >
            Building wealth through <span className="gold-text">real estate excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Your trusted partner in commercial real estate. We do more than close deals — we create
            opportunities, build wealth, and transform visions into valuable investments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {['Buy', 'Sell', 'Lease', 'Develop', 'Invest'].map((x, i) => (
              <span
                key={x}
                className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide2 text-gold-300"
              >
                {x}
                {i < 4 && <span className="text-white/25">|</span>}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/contact" className="btn-gold">
              Invest today <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
            >
              <Bot className="h-4 w-4" /> Explore Keja.ai
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-xs font-semibold uppercase tracking-wide2 text-white/65"
          >
            {SITE.pillars.join('  ·  ')}
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-gold-100 bg-white">
        <div className="container-luxe grid grid-cols-2 gap-6 py-12 sm:grid-cols-4">
          {STATS.map((s) => (
            <motion.div key={s.label} {...fadeUp} className="text-center">
              <p className="font-display text-3xl font-bold sm:text-4xl">
                <span className="gold-text">{s.value}</span>
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-muted">
          Past performance is not a guarantee of future results. Figures reflect mandates completed
          between 2022 and 2026; outcomes depend on market conditions, execution and holding period.
        </p>
      </section>

      {/* PILLARS */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we stand for</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Vision. Value. Growth. <span className="gold-text">Legacy.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Four words that order every decision we make — from a KES 3M land plot to a
              half-billion-shilling portfolio.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Eye,
                title: 'Vision',
                text: 'We see property the way it becomes, not the way it is — infrastructure first, corridors early, value before the crowd.',
              },
              {
                icon: Target,
                title: 'Value',
                text: 'Every shilling is underwritten. If the math doesn’t work as an investment, it doesn’t become a transaction.',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                text: 'For our clients, our partners and our city. Compounding discipline beats chasing headlines, every time.',
              },
              {
                icon: ShieldCheck,
                title: 'Legacy',
                text: 'We build what outlives deals: trust, relationships, and portfolios families pass on. That’s the real asset.',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                className="card-luxe card-luxe-hover p-7 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <p.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                A complete real-estate <span className="gold-text">value chain</span>
              </h2>
            </div>
            <Link to="/services" className="btn-outline">
              All services <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon]
              return (
                <motion.div
                  key={s.id}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                  className="card-luxe card-luxe-hover p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <span className="font-display text-2xl font-bold text-gold-200">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.short}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* KEJA FEATURE */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gold-shimmer opacity-[0.05]" />
        <div className="container-luxe relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <motion.div {...fadeUp}>
            <p className="eyebrow !text-gold-400">Our digital flagship</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Keja.ai — <span className="gold-text">intelligent real estate,</span> verified trust
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Chacadom&apos;s market discipline, made available to everyone. Keja.ai is
              Africa&apos;s intelligent real-estate infrastructure: conversational property search,
              investment analysis, title verification, fraud detection and regulated tokenization —
              across every agency, not just ours.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'AI advisor in English, Kiswahili & French',
                'Trust scores & Investment Score™ on every listing',
                'Investment math with facts, estimates and assumptions labelled',
                'Keja Tokenize — fractional ownership of prime assets from $100',
                'Google sign-in, investor accounts & agent tools — one platform',
                'M-Pesa escrow and WhatsApp-first client service',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[11.5px] leading-relaxed text-white/65">
              Illustrative figures — tokenization is a simulated, pre-CMA demo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ventures" className="btn-gold">
                Discover Keja.ai <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.kejaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
              >
                <Globe2 className="h-4 w-4" /> Visit keja.ai
              </a>
              <a
                href={SITE.tokenizeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
              >
                Keja Tokenize ↗
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.5rem] bg-gold-400/10 blur-3xl" />
            <picture>
              <source srcSet={asset('/brand/keja-banner.webp')} type="image/webp" />
              <img
                src={asset('/brand/keja-banner.jpg')}
                alt="Keja.ai by Chacadom"
                width={1100}
                height={1100}
                loading="lazy"
                className="w-full rounded-3xl shadow-gold-lg ring-1 ring-gold-400/30"
              />
            </picture>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY TEASER */}
      <section className="section-pad bg-cream">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="eyebrow">Our investment philosophy</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Patience. Positioning. <span className="gold-text">Timing.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              &ldquo;The people who wait for a place to become expensive usually fund the profits of
              those who entered early.&rdquo; We help clients enter early — the right property, in
              the right location, with the right strategy — and then let time do what time does
              best.
            </p>
            <Link to="/insights" className="btn-gold mt-8">
              Read the philosophy <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <picture>
              <source srcSet={asset('/insights/smart-investments.webp')} type="image/webp" />
              <img
                src={asset('/insights/smart-investments.jpg')}
                alt="Smart investments build lasting wealth"
                width={1024}
                height={1536}
                loading="lazy"
                className="rounded-2xl shadow-card ring-1 ring-gold-100"
              />
            </picture>
            <picture>
              <source srcSet={asset('/insights/real-estate-rewards.webp')} type="image/webp" />
              <img
                src={asset('/insights/real-estate-rewards.jpg')}
                alt="Real estate rewards"
                width={1024}
                height={1536}
                loading="lazy"
                className="mt-8 rounded-2xl shadow-card ring-1 ring-gold-100 sm:mt-10"
              />
            </picture>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16"
          >
            <div className="absolute inset-0 bg-gold-shimmer opacity-[0.07]" />
            <div className="relative">
              <img
                src={asset('/brand/chacadom-logo-128.jpg')}
                alt="Chacadom"
                width={64}
                height={64}
                className="mx-auto h-16 w-16 rounded-2xl object-cover shadow-gold-lg"
              />
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-5xl">
                Invest today. <span className="gold-text">Secure your tomorrow.</span>
              </h2>
              <p className="mt-3 text-[11px] text-white/45">
                Capital is at risk. Real estate is illiquid and values can fall as well as rise.
              </p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                Prime locations. Verified documents. Growth corridors identified before the crowd.
                Whether you’re buying your first plot or balancing a portfolio — the discipline is
                the same, and it starts with a conversation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-gold">
                  Start the conversation
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
                >
                  Meet Chacadom
                </Link>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-wide2 text-white/65">
                {SITE.values.join('  ·  ')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
