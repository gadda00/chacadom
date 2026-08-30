import { usePageMeta } from '@/lib/seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bot, ShieldCheck, Calculator, MessageCircle, Globe2, ArrowRight, Building2, Sparkles, TrendingUp, Lock, Coins, Link2, Scale,
} from 'lucide-react'
import { SITE } from '@/data/content'
import { asset } from '@/data/content'
import { fadeUp } from '@/lib/motion'


export default function Ventures() {
  usePageMeta(
    'Ventures — Keja.ai & the 2026–2030 Roadmap',
    'Keja.ai, the AI trust layer for East African property; tokenization roadmap and investor relations.',
  )
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
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.5rem] bg-gold-100/50 blur-2xl" />
            <picture>
              <source srcSet={asset('/brand/keja-banner.webp')} type="image/webp" />
              <img src={asset('/brand/keja-banner.jpg')} alt="Keja.ai by Chacadom" width={1100} height={619} loading="lazy" className="w-full rounded-3xl shadow-card-hover ring-1 ring-gold-200" />
            </picture>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-card-hover ring-1 ring-gold-100 sm:left-8">
              <div className="flex items-center gap-3">
                <img src={asset('/brand/keja-logo-128.jpg')} alt="Keja" width={48} height={48} className="h-12 w-12 rounded-xl object-cover ring-2 ring-gold-200" />
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
              <span className="text-xs font-bold uppercase tracking-wide2 text-gold-700">Flagship venture · Live now — launched 2026</span>
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
          <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* KEJA TOKENIZE */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="absolute inset-0 bg-gold-shimmer opacity-[0.05]" />
        <div className="container-luxe relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5">
              <Coins className="h-3.5 w-3.5 text-gold-400" />
              <span className="text-xs font-bold uppercase tracking-wide2 text-gold-300">New venture capability · Keja Tokenize</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Fractional ownership of Kenyan real estate, <span className="gold-text">from $100</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Chacadom is building real-estate tokenization into Keja.ai: institutional-grade property
              placed in a dedicated SPV, converted into digital tokens on a blockchain, and offered to
              KYC-verified investors — a $10M building becomes 1,000,000 tokens at $10 each. Rental
              income is distributed monthly or quarterly, pro-rata, with every payout recorded on-chain.
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                { icon: Coins, text: 'Fractional entry — participate in prime assets without $100K minimums' },
                { icon: Scale, text: 'SPV legal wrappers, Ardhisasa-verified titles, independent valuations' },
                { icon: Link2, text: 'On-chain ownership record — auditable, immutable, transparent' },
                { icon: ShieldCheck, text: 'KYC/AML-gated investing, structured with Kenya’s CMA sandbox in mind' },
              ].map((f) => (
                <li key={f.text} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-400/30 bg-white/5">
                    <f.icon className="h-4 w-4 text-gold-400" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.tokenizeUrl} target="_blank" rel="noreferrer" className="btn-gold">
                Explore Keja Tokenize <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={SITE.tokenizeUrl + '?view=learn'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
              >
                How tokenization works
              </a>
            </div>
            <p className="mt-5 text-[11.5px] leading-relaxed text-white/65">
              Demonstration environment — tokens, valuations and distributions are simulated pending
              regulatory approval. Educational content, not an offer of securities.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.5rem] bg-gold-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 shadow-gold-lg">
              <picture>
                <source srcSet={asset('/images/skyline.webp')} type="image/webp" />
              </picture>
                <img
                  src={asset('/images/skyline.jpg')}
                  alt="Nairobi skyline — tokenized real estate offerings by Keja Tokenize"
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[10px] font-bold uppercase tracking-wide2 text-gold-300">Simulated demo portfolio</p>
                <p className="mt-1 font-display text-2xl font-bold text-white">$45.5M+ tokenized · 7.3% blended yield</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['KJ-WST1 · 7.0%', 'KJ-KLM2 · 8.0%', 'KJ-KRN3 · funding', 'KJ-THK5 · Q4 2026'].map((t) => (
                    <span key={t} className="rounded-full border border-gold-400/40 bg-ink/60 px-3 py-1 text-[11px] font-semibold text-gold-200 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-2 rounded-2xl border border-gold-400/30 bg-ink/90 p-4 shadow-gold-md backdrop-blur sm:-right-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient">
                  <Link2 className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gold-300">Entry minimum</p>
                  <p className="text-lg font-bold leading-none text-white">$100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP / VISION — aligned to the KEJA blueprint 2026–2030 */}
      <section className="border-t border-white/10 bg-ink py-20">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-gold-400">The long-term vision</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Africa&apos;s intelligent real-estate infrastructure
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Not a chatbot bolted onto one developer&apos;s inventory — the intelligence and
              operating layer for African real estate: discovery, advisory, verification, analysis,
              viewing, escrowed purchase, furnishing, rental, management and reporting in one flow,
              with regulated tokenization when the legal and market architecture matures.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 grid-cols-1 md:grid-cols-3">
            {[
              { phase: '2026 H2', window: 'Q3–Q4', title: 'Institutional Foundation', text: 'The consumer platform is live; this phase builds the institutional layer around it — legal/IP structure, token classification, data model and regulatory engagement, plus the first SPV pilots for tokenization.' },
              { phase: '2027', window: 'H1–H2', title: 'KEJA AI Platform & Portal hardening', text: 'Property intelligence and developer portal; wallet beta, KJAI utility design, compliance stack and audits.' },
              { phase: '2028', window: 'H1–H2', title: 'Controlled Token Launch', text: 'Controlled KJAI ecosystem launch subject to approvals; first KPT property pilot and asset servicing.' },
              { phase: '2029', window: 'Scale', title: 'Scale & East Africa', text: 'Scale tokenized products and expand across East African markets — Uganda, Tanzania, Rwanda.' },
              { phase: '2030', window: 'Pan-African', title: 'Institutional Infrastructure', text: 'Pan-African network and institutional infrastructure — banks, funds and enterprise clients on KEJA DATA.' },
              { phase: 'North Star', window: 'The principle', title: 'Intelligence First', text: 'Build intelligence first; prove value second; marketplace and recurring revenue third; regulated financial infrastructure only when legally, economically and operationally defensible.' },
            ].map((p, i) => (
              <motion.div key={p.phase} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-gold-400/40">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wide2 text-gold-400">{p.phase}</p>
                  <p className="text-xs text-white/65">{p.window}</p>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS — blueprint Part IV & Ch.11 */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Investor relations</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Capital follows <span className="gold-text">evidence</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              The KEJA blueprint raises against measurable milestones rather than geography, hype or
              an unvalidated token narrative. Kenya first, then East-African clusters — every new
              country gets its own legal, tax and operating analysis.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 grid-cols-1 lg:grid-cols-2">
            {/* funding stages */}
            <motion.div {...fadeUp} className="card-luxe p-6 sm:p-8">
              <h3 className="heading-display text-xl">Funding stages (illustrative)</h3>
              <div className="mt-5 space-y-3">
                {[
                  ['Founder / Incubation', 'KSh 2M–3M', 'MVP, AI, data, product and validation'],
                  ['Angel / Pre-seed', 'KSh 10M–30M', 'Team, Kenya expansion, repeatable sales'],
                  ['Seed', 'KSh 50M–150M+', 'Marketplace, AI and KEJA Investor'],
                  ['Series A', 'KSh 300M–1B+', 'East Africa, enterprise sales, tokenization infrastructure'],
                ].map(([stage, target, purpose]) => (
                  <div key={stage} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border border-gold-100 bg-white p-4">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ink">{stage}</p>
                      <p className="text-xs text-ink-muted">{purpose}</p>
                    </div>
                    <p className="shrink-0 font-display text-sm font-bold text-gold-700">{target}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-ink-muted">
                Planning ranges, not guaranteed fundraising outcomes. Investor data room available
                under NDA: incorporation, IP assignments, cap table, financial model, customer
                pipeline and risk register.
              </p>
            </motion.div>

            {/* milestones + expansion */}
            <motion.div {...fadeUp} className="flex flex-col gap-5">
              <div className="card-luxe p-6 sm:p-8">
                <h3 className="heading-display text-xl">Investor milestones</h3>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {[
                    ['1,000 users', 'registered'],
                    ['100 qualified leads', 'pipeline'],
                    ['20 conversions', 'viewings/transactions'],
                    ['100 paying professionals', 'KEJA PRO'],
                    ['KSh 1M+ ARR', 'recurring revenue'],
                    ['First regional pilot', 'East Africa'],
                  ].map(([m, sub]) => (
                    <div key={m} className="rounded-xl bg-gold-50 p-3.5 ring-1 ring-gold-100">
                      <p className="font-display text-sm font-bold text-ink">{m}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-luxe bg-ink p-6 text-white sm:p-8">
                <h3 className="font-display text-xl font-bold">Expansion waves</h3>
                <div className="mt-4 space-y-3">
                  {[
                    ['Wave 1', 'Kenya — build data density and prove customer value'],
                    ['Wave 2', 'Uganda, Tanzania and Rwanda — cluster expansion'],
                    ['Wave 3', 'Nigeria, Ghana, South Africa, Zambia, DRC and Francophone markets'],
                  ].map(([w, d]) => (
                    <div key={w} className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full bg-gold-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{w}</span>
                      <p className="text-xs leading-relaxed text-white/70">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
