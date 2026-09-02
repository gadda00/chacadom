import { usePageMeta } from '@/lib/seo'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BedDouble,
  Building2,
  ExternalLink,
  LandPlot,
  MapPin,
  MessageCircle,
  TrendingUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATS, asset, whatsappLink } from '@/data/content'
import { CLIENT_MANDATES, LISTINGS, WHATSAPP_CATALOG_URL, formatKes } from '@/data/listings'
import { fadeUp } from '@/lib/motion'

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
  {
    asset: 'Waterfront Karen corridor — family acquisitions',
    type: 'Advisory · Corridor watching brief & acquisitions',
    location: 'Karen, Nairobi',
    outcome:
      'Clients positioned around the corridor’s lifestyle anchor, ahead of the reported expansion',
    note: 'A standing brief on the streets behind The Waterfront: verified listings, honest price bands and catalyst timing — the reported KES 9B transaction and 50.6-acre mixed-use expansion are tracked as market signals, not hype.',
    stat: 'Catalyst-tracked',
  },
]

export default function Portfolio() {
  usePageMeta(
    'Listings & Track Record — Chacadom Investments',
    'Current Chacadom vendor stock in Kilimani, Runda and Tatu City — each listing deep-linked to its live WhatsApp page — plus representative advisory mandates, with honest disclaimers.',
  )
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Live listings & track record</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            On the market now. <span className="gold-text">Then the numbers.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Current vendor stock advertised through our WhatsApp catalogue — every card links
            straight to the live product page — followed by representative mandates from our
            advisory desks, owner-attested and not independently audited (see the{' '}
            <Link to="/proof" className="font-semibold text-gold-300 underline underline-offset-2">
              Proof &amp; Disclosure page
            </Link>
            ).
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe">
          {/* ===================== LIVE LISTINGS ===================== */}
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Current listings</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                Vendor stock, <span className="gold-text">on the market now</span>
              </h2>
            </div>
            <a href={WHATSAPP_CATALOG_URL} target="_blank" rel="noreferrer" className="btn-outline">
              <MessageCircle className="h-4 w-4" /> Browse the full catalogue
            </a>
          </motion.div>

          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
            {LISTINGS.map((l, i) => (
              <motion.article
                key={l.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 2) * 0.07 }}
                className="card-luxe card-luxe-hover overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <picture>
                    <source srcSet={asset(`${l.image.base}.webp`)} type="image/webp" />
                    <img
                      src={asset(`${l.image.base}.jpg`)}
                      alt={l.image.alt}
                      width={l.image.width}
                      height={l.image.height}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </picture>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-4 pt-12">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-gold-300">
                        <MapPin className="h-3 w-3" aria-hidden="true" /> {l.location}
                      </span>
                      <h3 className="mt-0.5 font-display text-xl font-bold text-white">
                        {l.title}
                      </h3>
                    </div>
                    <p className="shrink-0 rounded-xl bg-gold-500 px-3 py-1.5 font-display text-sm font-bold text-ink shadow-lg">
                      {l.priceKes != null ? formatKes(l.priceKes) : 'POA'}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-700 ring-1 ring-gold-100">
                      {l.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted">
                      <BedDouble className="h-3.5 w-3.5" aria-hidden="true" /> {l.beds}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{l.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {l.specs.map((s) => (
                      <li
                        key={s.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-[11px] font-semibold text-ink ring-1 ring-gold-100"
                      >
                        <s.icon className="h-3 w-3 text-gold-700" aria-hidden="true" />
                        {s.label}
                      </li>
                    ))}
                  </ul>
                  {l.priceNote && (
                    <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                      {l.priceKes != null
                        ? `${formatKes(l.priceKes)} · ${l.priceNote}`
                        : l.priceNote}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={l.whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold">
                      <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                    </a>
                    <a
                      href={l.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                      aria-label={`View ${l.title} on the vendor's WhatsApp listing page`}
                    >
                      Listing page <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-cream p-8 text-center ring-1 ring-gold-100 sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <p className="font-display text-lg font-bold text-ink">
                This is a snapshot — the catalogue moves weekly
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                Availability and prices are as advertised by the vendor at the time of posting and
                change without notice; the WhatsApp catalogue is the live source of truth.
              </p>
            </div>
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-gold shrink-0"
            >
              <MessageCircle className="h-4 w-4" /> Open the catalogue
            </a>
          </motion.div>

          {/* ===================== DIRECT MANDATES (CLIENT DESK) ===================== */}
          <div className="mt-16">
            <motion.div {...fadeUp} className="max-w-2xl">
              <p className="eyebrow flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Chacadom client desk · direct mandates
              </p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                Mandates we hold <span className="gold-text">ourselves</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Live owner mandates sold directly by our desk — no intermediary chain. Prices are
                the sellers&rsquo; asking figures; our diligence desk completes independent title
                searches before any deposit is requested, and the same listings carry trust profiles
                on Keja.ai.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
              {CLIENT_MANDATES.map((m, i) => (
                <motion.article
                  key={m.id}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (i % 3) * 0.06 }}
                  className="card-luxe card-luxe-hover flex flex-col overflow-hidden"
                >
                  {m.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <picture>
                        <source srcSet={asset(`${m.image.base}.webp`)} type="image/webp" />
                        <img
                          src={asset(`${m.image.base}.jpg`)}
                          alt={m.image.alt}
                          width={m.image.width}
                          height={m.image.height}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </picture>
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gold-gradient p-6 text-center">
                      <LandPlot className="h-8 w-8 text-gold-200" aria-hidden="true" />
                      <p className="font-display text-2xl font-bold text-white">30 acres</p>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-100">
                        Single clean title deed
                      </p>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-700 ring-1 ring-gold-100">
                      {m.kind}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink">{m.title}</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-muted">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {m.location}
                    </p>
                    <p className="mt-3 font-display text-xl font-bold text-ink">{m.price}</p>
                    {m.priceNote && (
                      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                        {m.priceNote}
                      </p>
                    )}
                    <ul className="mt-4 space-y-1.5">
                      {m.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-xs leading-relaxed text-ink-soft">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5">
                      <a
                        href={m.enquiryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold w-full justify-center !py-2.5 text-xs"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire with our desk
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.p {...fadeUp} className="mt-6 text-[11px] leading-relaxed text-ink-muted">
              Mandate photography is supplied by the sellers and developers. Where an independent
              title search is still in progress we say so — ask the desk for the current status of
              any title, plan or specification before relying on it.
            </motion.p>
          </div>

          {/* ===================== TRACK RECORD ===================== */}
          <div className="mt-16">
            <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Track record</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                Representative mandates, <span className="gold-text">owner-attested</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Client identities stay confidential; each case describes the playbook exactly as it
                runs — named cases are representative composites until permissioned client stories
                replace them.
              </p>
            </motion.div>
          </div>
          {/* Rendered from the single-source STATS register (content.ts) so the
              value, label, definition and provenance can never drift between
              Home, Proof and this page. */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {STATS.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                className="card-luxe p-7 text-center"
              >
                <p className="font-display text-4xl font-bold gold-text-light">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 space-y-5">
            {TRACK.map((t, i) => (
              <motion.article
                key={t.asset}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
                className="card-luxe grid gap-5 p-6 sm:p-7 lg:grid-cols-[1.4fr_1fr_auto] lg:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-700 ring-1 ring-gold-100">
                      {t.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                      <MapPin className="h-3 w-3" />
                      {t.location}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-ink">{t.asset}</h3>
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

          <motion.div
            {...fadeUp}
            className="relative mt-16 overflow-hidden rounded-3xl bg-ink ring-1 ring-gold-300/20"
          >
            <div className="absolute inset-0">
              <picture>
                <source srcSet={asset('/images/waterfront/wf-complex.webp')} type="image/webp" />
                <img
                  src={asset('/images/waterfront/wf-complex.jpg')}
                  alt="The Waterfront Karen town centre above the lake"
                  width={1000}
                  height={750}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-25"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
            </div>
            <div className="relative grid gap-6 p-8 sm:p-10 lg:grid-cols-[1.5fr_auto] lg:items-center">
              <div>
                <p className="eyebrow !text-gold-400">Flagship corridor</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">
                  We keep a live brief on the Waterfront Karen corridor
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                  Verified listings, honest bands and catalyst timing around the suburb&rsquo;s
                  lifestyle anchor — positioned as math, not hype.
                </p>
                <a
                  href={whatsappLink(
                    'Hello Chacadom! I am interested in the Waterfront Karen corridor.',
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-4"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp the desk
                </a>
              </div>
              <Link
                to="/waterfront-karen"
                className="btn-gold shrink-0 justify-self-start lg:justify-self-end"
              >
                Read the corridor brief <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mx-auto mt-16 max-w-3xl rounded-2xl bg-ink p-8 text-center sm:p-10"
          >
            <Building2 className="mx-auto h-8 w-8 text-gold-400" />
            <p className="mt-4 font-display text-2xl font-bold text-white">
              Your mandate has a shape like one of these
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60">
              Tell us which outcome you are chasing and we will tell you — honestly — whether we are
              the right firm to run it.
            </p>
            <Link to="/contact" className="btn-gold mt-7">
              Start the conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-ink-muted">
            Past performance is not a guarantee of future results. All figures are owner-attested
            from Chacadom’s internal records (2022–2026), not independently audited — definitions,
            as-of dates and sources for every figure live on the{' '}
            <Link to="/proof" className="font-semibold text-gold-700 underline underline-offset-2">
              Proof &amp; Disclosure page
            </Link>
            . Detailed references are available under NDA.
          </p>
        </div>
      </section>
    </div>
  )
}
