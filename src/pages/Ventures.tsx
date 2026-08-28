import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bot, ShieldCheck, Calculator, MessageCircle, Globe2, ArrowRight, Building2, Sparkles, TrendingUp, Lock,
} from 'lucide-react'
import { SITE } from '@/data/content'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function Ventures() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 bg-gold-shimmer opacity-[0.05]" />
        <div className="container-luxe relative max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Chacadom Ventures</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Where our discipline meets <span className="gold-text">AI-native products</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Chacadom builds more than portfolios — we build platforms. Our ventures take the house discipline of
            verification and honest math and scale it to the whole market.
          </p>
        </div>
      </section>

      {/* KEJA FEATURE */}
      <section className="section-pad bg-white">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold-100/50 blur-2xl" />
            <img src="/brand/keja-banner.jpg" alt="Keja.ai by Chacadom" className="w-full rounded-3xl shadow-card-hover ring-1 ring-gold-200" />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-card-hover ring-1 ring-gold-100 sm:left-8">
              <div className="flex items-center gap-3">
                <img src="/brand/keja-logo.jpg" alt="Keja" className="h-12 w-12 rounded-xl object-cover ring-2 ring-gold-200" />
                <div>
                  <p className="font-display text-base font-bold text-ink">Keja.ai</p>
                  <p className="text-xs text-ink-muted">Intelligent Real Estate. Verified Trust.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold-600" />
              <span className="text-xs font-bold uppercase tracking-wide2 text-gold-700">Flagship venture · Launched 2026</span>
            </div>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              Keja.ai — <span className="gold-text">the trust layer for East African property</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              &ldquo;Keja&rdquo; is Swahili for home. Keja.ai is Kenya’s AI real-estate advisor and cross-agency
              trust layer — a platform that helps people discover, evaluate, buy, sell, rent and manage property
              across multiple agencies and developers, not just one.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Its core insight is Chacadom’s own: a market scarred by fraud doesn’t need more listings, it
              needs trust infrastructure. Keja verifies titles, scores agents, catches duplicate listings and flags
              price anomalies — then publishes the fraud it catches, openly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.kejaUrl} target="_blank" rel="noreferrer" className="btn-gold">
                <Globe2 className="h-4 w-4" /> Visit keja.ai
              </a>
              <Link to="/contact" className="btn-outline">Partner with us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEJA CAPABILITIES */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What Keja.ai does</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Six capabilities, one platform</h2>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bot, title: 'Conversational AI advisor', text: 'Property search, recommendations and qualification in English, Kiswahili and French — warm, professional, never pushy.' },
              { icon: ShieldCheck, title: 'Cross-agency trust scores', text: 'Title checks, photo authenticity, duplicate detection, pricing anomalies and agent reputation — on every listing.' },
              { icon: Calculator, title: 'Investment intelligence', text: 'Gross & net yields, ROI, payback and 5/10-year projections — with facts, estimates and assumptions labelled.' },
              { icon: MessageCircle, title: 'WhatsApp-first service', text: 'Instant answers, viewing requests and M-Pesa escrow prompts where Kenya already has its conversations.' },
              { icon: TrendingUp, title: 'Investor reports', text: 'Property & location analysis, risks, strengths, comparables and a plain-language investment verdict.' },
              { icon: Lock, title: 'Escrowed transactions', text: 'Deposits and viewing fees held in M-Pesa escrow — released only on confirmed milestones, never to personal wallets.' },
            ].map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card-luxe card-luxe-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <c.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP / VISION */}
      <section className="bg-ink py-20">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-gold-400">The long-term vision</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              East Africa’s trusted intelligent real-estate platform
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Not a chatbot bolted onto one developer’s inventory — the trust and intelligence layer every
              agency, developer and buyer routes through: discovery, advisory, verification, analysis, viewing,
              escrowed purchase, furnishing, rental, management and reporting, in one flow.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { phase: 'Phase 1', window: '0–3 months', title: 'Agency AI Advisor', text: 'White-label AI advisor per agency: property database, ROI calculator, WhatsApp lead qualification, investor reports. Revenue from day one.' },
              { phase: 'Phase 2', window: '3–9 months', title: 'The Trust Layer', text: 'Duplicate-listing detection, agent reputation scoring and Ardhisasa cross-checks activated across agencies. “Verified by Keja” becomes a premium product.' },
              { phase: 'Phase 3', window: '9–24 months', title: 'Consumer Marketplace', text: 'Public renter/buyer marketplace across all onboarded agencies, with trust scores as the differentiator — plus M-Pesa escrow and property management.' },
            ].map((p, i) => (
              <motion.div key={p.phase} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-gold-400/40">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wide2 text-gold-400">{p.phase}</p>
                  <p className="text-xs text-white/40">{p.window}</p>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-luxe text-center">
          <motion.div {...fadeUp}>
            <Building2 className="mx-auto h-10 w-10 text-gold-600" />
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              Build with us — <span className="gold-text">or build on Keja</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
              Agencies and developers can join the Keja network; investors can work directly with the Chacadom
              desk. Either way, the discipline is the same.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-gold">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
              <a href={SITE.kejaUrl} target="_blank" rel="noreferrer" className="btn-outline">Explore keja.ai</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
