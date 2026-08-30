import { usePageMeta } from '@/lib/seo'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Building2, Landmark, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

const TRACK = [
  {
    asset: 'Westlands office floor plate',
    type: 'Commercial · Sale mandate',
    location: 'Westlands, Nairobi',
    outcome: 'Sold at 4% above client reserve in 11 weeks',
    note: 'Repositioned pricing after a Keja-style price-band analysis corrected an under-quoting broker\u2019s ceiling.',
    stat: '+4% vs reserve',
  },
  {
    asset: 'Kilimani residential tower — 48 units',
    type: 'Residential · Portfolio management',
    location: 'Kilimani, Nairobi',
    outcome: 'Occupancy 79% → 93% in two quarters',
    note: 'Tenant-mix reset, service-charge restructure and a documented maintenance SLA restored income and reviews together.',
    stat: '93% occupancy',
  },
  {
    asset: 'Kitengela land assembly — 12.4 acres',
    type: 'Land · Acquisition & assembly',
    location: 'Kitengela, Kajiado',
    outcome: 'Clean title assembled across 6 family parcels',
    note: 'Beacon re-establishment, rates clearance and family consent managed end-to-end before a single shilling moved.',
    stat: '6 parcels, 1 title',
  },
  {
    asset: 'Athi River logistics shell',
    type: 'Industrial · JV structuring',
    location: 'Athi River, Machakos',
    outcome: 'JV structured with developer; client carries land, not construction risk',
    note: 'Returns modelled on committed expressway rent roll, with exit scenarios stress-tested at ±20% on both rent and exit yield.',
    stat: 'Land-only risk',
  },
  {
    asset: 'Nyali holiday villa — diaspora mandate',
    type: 'Residential · Diaspora acquisition',
    location: 'Nyali, Mombasa',
    outcome: 'Bought, verified, furnished and tenanted remotely',
    note: 'Escrowed deposit, escorted inspection, staged payments against milestones — the full diaspora protocol now embedded in Keja.ai.',
    stat: '100% remote',
  },
  {
    asset: 'Runda family portfolio review',
    type: 'Advisory · Portfolio strategy',
    location: 'Runda, Nairobi',
    outcome: 'Three legacy plots consolidated into one income-producing strategy',
    note: 'Underperholding land converted to a single income asset with a five-year plan and quarterly reporting the family actually reads.',
    stat: 'Land → income',
  },
]

export default function Portfolio() {
  usePageMeta(
    'Track Record — Representative Mandates',
    'Numbers first: representative Chacadom mandates across Nairobi and beyond, with honest disclaimers.',
  )
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Track record</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Numbers first. <span className="gold-text">Then the stories.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Representative mandates across our desks. Client identities stay confidential; the mechanics of each
            outcome are exactly as described — because the process is the product.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {[
              { v: 'KES 1.2B+', l: 'Transaction value advised & managed' },
              { v: '40+', l: 'Completed mandates since 2022' },
              { v: '7', l: 'Service lines across four desks' },
            ].map((s, i) => (
              <motion.div key={s.l} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }} className="card-luxe p-7 text-center">
                <p className="font-display text-4xl font-bold gold-text">{s.v}</p>
                <p className="mt-2 text-sm font-medium text-ink-muted">{s.l}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 space-y-5">
            {TRACK.map((t, i) => (
              <motion.article
                key={t.asset}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
                className="card-luxe grid gap-5 p-6 sm:p-7 lg:grid-cols-[1.4fr_1fr_auto] lg:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-700 ring-1 ring-gold-100">{t.type}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-ink-muted"><MapPin className="h-3 w-3" />{t.location}</span>
                  </div>
                  <h2 className="mt-2.5 font-display text-lg font-bold text-ink">{t.asset}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.note}</p>
                </div>
                <p className="inline-flex items-center gap-2 text-sm font-bold text-gold-700">
                  <TrendingUp className="h-4 w-4 shrink-0" /> {t.outcome}
                </p>
                <span className="inline-flex items-center justify-center rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-gold-300">
                  {t.stat}
                </span>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} className="mx-auto mt-16 max-w-3xl rounded-2xl bg-ink p-8 text-center sm:p-10">
            <Building2 className="mx-auto h-8 w-8 text-gold-400" />
            <p className="mt-4 font-display text-2xl font-bold text-white">Your mandate has a shape like one of these</p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60">
              Tell us which outcome you are chasing and we will tell you — honestly — whether we are the right firm to run it.
            </p>
            <Link to="/contact" className="btn-gold mt-7">Start the conversation <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-ink-muted">
            Past performance is not a guarantee of future results. Figures reflect completed mandates as advised by Chacadom between 2022 and 2026; detailed references are available under NDA.
          </p>
        </div>
      </section>
    </div>
  )
}
