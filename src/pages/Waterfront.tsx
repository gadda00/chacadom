import { usePageMeta, useRouteJsonLd } from '@/lib/seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { ArrowRight, ExternalLink, Globe2, MapPin, MessageCircle, Phone } from 'lucide-react'
import { WATERFRONT_KAREN } from '@/data/waterfront'
import { asset, whatsappLink } from '@/data/content'
import { fadeUp } from '@/lib/motion'
import VideoFacade from '@/components/ui/VideoFacade'

/**
 * The Waterfront Karen — flagship location page.
 * Editorial investment-thesis framing: lifestyle anchor + institutional
 * validation + catalyst, with reported figures labelled as reported.
 */
export default function Waterfront() {
  usePageMeta(
    'The Waterfront Karen — Flagship Location',
    'The Waterfront Karen: the lakeside town centre anchoring Nairobi’s premier suburb. The lifestyle, the reported KES 9B institutional transaction, the 50.6-acre expansion — and what it means for property in the Karen corridor.',
    { image: asset('/images/waterfront/wf-entrance.jpg') },
  )
  // memoized: useRouteJsonLd re-runs on every identity change — a fresh
  // object literal per render kept the effect (and the DOM script swap)
  // running needlessly (FAQ page does the same via useMemo).
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: WATERFRONT_KAREN.name,
      description: WATERFRONT_KAREN.summary,
      url: 'https://gadda00.github.io/chacadom/waterfront-karen',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karen',
        addressRegion: 'Nairobi',
        addressCountry: 'KE',
      },
      sameAs: WATERFRONT_KAREN.sources.map((s) => s.url),
    }),
    [],
  )
  useRouteJsonLd(jsonLd)

  return (
    <div>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={asset(`${WATERFRONT_KAREN.hero.base}.webp`)} type="image/webp" />
            <img
              src={asset(`${WATERFRONT_KAREN.hero.base}.jpg`)}
              alt={WATERFRONT_KAREN.hero.alt}
              width={WATERFRONT_KAREN.hero.width}
              height={WATERFRONT_KAREN.hero.height}
              fetchPriority="high"
              className="h-full w-full object-cover opacity-40"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
        </div>

        <div className="container-luxe relative max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide2 text-gold-300 backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Flagship location · {WATERFRONT_KAREN.location}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            The Waterfront <span className="gold-text">Karen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 text-lg font-medium text-gold-200/90 sm:text-xl"
          >
            {WATERFRONT_KAREN.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 leading-relaxed text-white/70"
          >
            {WATERFRONT_KAREN.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/contact" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> Talk to our advisory desk
            </Link>
            <a
              href={WATERFRONT_KAREN.kejaGuide}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Globe2 className="h-4 w-4" /> Live listings near the Waterfront
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="border-b border-gold-100 bg-white">
        <div className="container-luxe grid grid-cols-2 gap-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {WATERFRONT_KAREN.stats.map((s) => (
            <motion.div
              key={s.label}
              {...fadeUp}
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-3xl font-bold text-ink">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {s.label}
              </p>
              {s.note && (
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-700">
                  {s.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================== THESIS ============================== */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The investment case</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Why this corridor carries <span className="gold-text">institutional weight</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Three pillars — one of which was decided in a boardroom, not a showroom.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-3">
            {WATERFRONT_KAREN.thesis.map((t, i) => (
              <motion.article
                key={t.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                className="card-luxe card-luxe-hover p-7"
              >
                <p className="font-display text-3xl font-bold text-gold-300">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t.text}</p>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-ink-muted">
            Transaction and expansion figures are as reported by Kenyan business media (sources
            below). We present reported figures distinctly from verified deal facts — the same
            discipline our advisory notes have always applied.
          </p>
        </div>
      </section>

      {/* ============================== LIFESTYLE ============================== */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The lifestyle</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              The suburb&rsquo;s living room, <span className="gold-text">on the lake</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              &ldquo;A world class town centre with innovation in every square inch&rdquo; — and a
              lakeside campus Karen families treat as an extension of their gardens.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {WATERFRONT_KAREN.amenities.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="card-luxe card-luxe-hover p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100">
                  <a.icon className="h-5 w-5 text-gold-700" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== VIDEO ============================== */}
      <section className="section-pad bg-ink">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gold-300/30">
              <VideoFacade
                videoId={WATERFRONT_KAREN.video.id}
                title={WATERFRONT_KAREN.video.title}
                channel={WATERFRONT_KAREN.video.channel}
                poster={asset(`${WATERFRONT_KAREN.gallery[0].base}.jpg`)}
                posterAlt={WATERFRONT_KAREN.gallery[0].alt}
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <p className="eyebrow !text-gold-400">See it for yourself</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              A full walk-through, <span className="gold-text">before the flight</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              For our diaspora clients, this is the first hour of due diligence: walk the
              courtyards, see the anchor stores, feel the weekend energy. The video loads only when
              you press play — we keep third-party scripts off your first paint, the same policy we
              apply everywhere on this site.
            </p>
            <p className="mt-4 leading-relaxed text-white/65">
              Then let us put you on a viewing circuit: the town centre first, then the lanes behind
              it — because the Waterfront sells the suburb, but the half-acre plots are what you
              buy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Arrange a viewing circuit <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  'Hello Chacadom! I am interested in property near The Waterfront Karen.',
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <Phone className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== GALLERY ============================== */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Around the Waterfront</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                The town centre <span className="gold-text">and the suburb it anchors</span>
              </h2>
            </div>
          </motion.div>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {WATERFRONT_KAREN.gallery.map((g, i) => (
              <motion.figure
                key={g.base}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className={`group overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-gold-100 ${
                  i === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <picture>
                  <source srcSet={asset(`${g.base}.webp`)} type="image/webp" />
                  <img
                    src={asset(`${g.base}.jpg`)}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </picture>
                <figcaption className="bg-white px-5 py-4 text-xs leading-relaxed text-ink-muted">
                  {g.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== FINAL CTA ============================== */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
        <div className="absolute inset-0 bg-gold-shimmer opacity-[0.05]" aria-hidden="true" />
        <div className="container-luxe relative max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Position, before the market finishes pricing it</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            The corridor is moving. <span className="gold-text">Move first, with discipline.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-white/65">
            We maintain a live watching brief on the Karen corridor — verified listings, honest
            bands, catalyst timing. Whether you are buying a family home or assembling an investment
            position, the conversation starts with the math.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> Book an advisory session
            </Link>
            <a
              href={WATERFRONT_KAREN.kejaGuide}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Globe2 className="h-4 w-4" /> Explore on Keja.ai
            </a>
          </div>
        </div>
      </section>

      {/* ============================== SOURCES ============================== */}
      <section className="border-t border-gold-100 bg-white">
        <div className="container-luxe py-10">
          <p className="text-xs font-bold uppercase tracking-wide2 text-ink-muted">Sources</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {WATERFRONT_KAREN.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold-700 hover:text-gold-600"
                >
                  <ExternalLink className="h-3 w-3" aria-hidden="true" /> {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-muted">
            Reviewed {WATERFRONT_KAREN.lastReviewed}. Independent of The Waterfront Karen — this
            page is editorial context from our advisory desk, not an advertisement.
            {WATERFRONT_KAREN.photoNote ? ` ${WATERFRONT_KAREN.photoNote}` : ''}
          </p>
        </div>
      </section>
    </div>
  )
}
