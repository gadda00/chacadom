import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Play, Store, Trees, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'

import { asset, whatsappLink } from '@/data/content'
import { fadeUp } from '@/lib/motion'

/**
 * Waterfront Karen — the client's flagship showcase on the Chacadom home page.
 *
 * Facts kept verifiable (drawn from public reporting, stated approximately):
 * opened 2018 on a ~50-acre site, 180+ stores, cinema and offices, man-made
 * lake with a floating water park. Positioned as the anchor of the Karen
 * investment story, with our live Karen inventory one tap away.
 */
const WF_STATS = [
  { icon: Trees, value: '~50 acres', label: 'Lakeside site' },
  { icon: Store, value: '180+', label: 'Stores, cinema & offices' },
  { icon: Waves, value: 'Man-made lake', label: 'Floating water park' },
  { icon: MapPin, value: 'Karen, Nairobi', label: 'Opened 2018' },
]

const WF_GALLERY = [
  {
    src: 'wf-waterpark',
    alt: 'Inflatable water park floating on the Waterfront Karen lake',
    w: 778,
    h: 486,
  },
  { src: 'wf-promenade', alt: 'Open-air shopping promenade at Waterfront Karen', w: 1000, h: 625 },
  { src: 'wf-entrance', alt: 'Modern main entrance of the Waterfront Karen mall', w: 1200, h: 665 },
  {
    src: 'wf-lake',
    alt: 'The Waterfront Karen lake at dusk with the mall glowing',
    w: 1080,
    h: 675,
  },
  { src: 'wf-signage', alt: 'The Waterfront Karen facade with vertical signage', w: 1400, h: 933 },
  {
    src: 'wf-gardens',
    alt: 'Stone villa with tropical gardens near the Waterfront',
    w: 1200,
    h: 900,
  },
]

/** Third-party video: loads only on click — no YouTube JS until consent. */
const WF_VIDEO = 'zDlefHy09pg' // "The Waterfront, Karen — Things To Do, Prices, Location"

export default function WaterfrontShowcase() {
  const [videoOn, setVideoOn] = useState(false)

  return (
    <section className="section-pad relative overflow-hidden bg-ink" aria-labelledby="wf-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]"
      />
      <div className="container-luxe relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="eyebrow !text-gold-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Flagship destination · Karen, Nairobi
              </span>
            </p>
            <h2
              id="wf-heading"
              className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
            >
              Waterfront Karen — the lakeside landmark that{' '}
              <span className="gold-text">anchors our Karen story</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">
              Since 2018 the Waterfront has given Karen what no other Nairobi suburb has: a ~50-acre
              lakeside destination with 180-plus stores, a cinema, offices and a floating water
              park. That is the infrastructure thesis behind every Karen mandate we run — lifestyle
              anchors pull rents, services and long-run capital growth for the whole neighbourhood.
              Our desk holds live Karen inventory today, from an executive five-bedroom residence on
              Daykio Kiragu Road to land-banking beyond the bypass.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {WF_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <s.icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="mt-2 font-display text-lg font-bold text-white">{s.value}</dd>
                  <dd className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/50">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-gold">
                View live Karen inventory <MapPin className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  'Hi Chacadom — I saw your Waterfront Karen showcase and would like to hear about Karen investments.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
              >
                <MessageCircle className="h-4 w-4" /> Ask the Karen desk
              </a>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-white/40">
              Destination facts are approximate and drawn from public reporting; the Waterfront is a
              landmark we showcase for area context, not a property we list.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-gold-200/30">
              <picture>
                <source srcSet={asset('/images/waterfront/wf-hero.webp')} type="image/webp" />
                <img
                  src={asset('/images/waterfront/wf-hero.jpg')}
                  alt="The Waterfront Karen lake with its floating water park under a blue sky"
                  width={1440}
                  height={810}
                  className="aspect-video w-full object-cover"
                />
              </picture>
            </div>

            {/* click-to-load third-party video */}
            <div className="relative mt-4 overflow-hidden rounded-2xl ring-1 ring-white/15">
              {videoOn ? (
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube-nocookie.com/embed/${WF_VIDEO}?autoplay=1&rel=0`}
                  title="The Waterfront, Karen — things to do, prices and location (video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-presentation allow-popups"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoOn(true)}
                  className="group relative block w-full text-left"
                  aria-label="Play video: The Waterfront, Karen — things to do, prices and location"
                >
                  <picture>
                    <source
                      srcSet={asset('/images/waterfront/wf-video-poster.webp')}
                      type="image/webp"
                    />
                    <img
                      src={asset('/images/waterfront/wf-video-poster.jpg')}
                      alt=""
                      width={1200}
                      height={675}
                      className="aspect-video w-full object-cover"
                    />
                  </picture>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-ink/60 transition group-hover:bg-ink/40"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-gold-lg">
                      <Play className="h-6 w-6 text-white" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">
                      The Waterfront, Karen — things to do, prices &amp; location
                    </span>
                    <span className="text-white/60">YouTube · loads on click</span>
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* gallery strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {WF_GALLERY.map((g, i) => (
            <motion.figure
              key={g.src}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <picture>
                <source srcSet={asset(`/images/waterfront/${g.src}.webp`)} type="image/webp" />
                <img
                  src={asset(`/images/waterfront/${g.src}.jpg`)}
                  alt={g.alt}
                  loading="lazy"
                  width={g.w}
                  height={g.h}
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
              </picture>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
