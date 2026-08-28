import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Handshake, Gauge, Users, ChevronRight, Target, Eye, Compass } from 'lucide-react'
import { SITE, TIMELINE } from '@/data/content'
import { asset } from '@/data/content'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">About Chacadom</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            We don’t sell property. We help people make <span className="gold-text">better property decisions.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Chacadom Investments is a Kenyan real-estate investment house built on one conviction: this market
            rewards discipline and punishes shortcuts. Everything we do — advisory, sales, leasing, development,
            management — starts with verified facts and honest math.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad bg-white">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="eyebrow">Our story</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              From a single conviction to a <span className="gold-text">full value chain</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Chacadom began with land — the asset class where Kenya’s wealth is most visibly created, and
                most quietly lost. We watched families buy plots with clean savings and dirty titles, and decided
                the market deserved better: an investment house where verification comes before marketing, and the
                client’s outcome comes before the commission.
              </p>
              <p>
                From land, we grew into the full chain: investment advisory, commercial sales and leasing, joint
                ventures, marketing and portfolio management. In 2026 we launched our digital flagship, Keja.ai —
                taking our verification discipline to the entire market through AI.
              </p>
              <p>
                What hasn’t changed is the house rule: we say no to deals we wouldn’t do with our own
                money. That’s not a slogan; it’s a filter. It’s why our clients come back, and why
                they send their families.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold-100/50 blur-2xl" />
            <img src={asset('/brand/chacadom-flyer.jpg')} alt="Chacadom Investments" className="w-full rounded-3xl shadow-card-hover ring-1 ring-gold-200" />
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The journey</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Milestones</h2>
          </motion.div>
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 h-full w-px bg-gold-gradient sm:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  {...fadeUp}
                  className={`relative grid gap-4 sm:grid-cols-2 sm:gap-12 ${i % 2 === 1 ? 'sm:text-left' : ''}`}
                >
                  <div className={`pl-12 sm:pl-0 ${i % 2 === 1 ? 'sm:order-2 sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                    <p className="font-display text-3xl font-bold gold-text">{t.year}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink">{t.title}</h3>
                  </div>
                  <div className={`pl-12 sm:pl-0 ${i % 2 === 1 ? 'sm:order-1 sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <p className="text-sm leading-relaxed text-ink-muted">{t.text}</p>
                  </div>
                  <span className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-500 ring-4 ring-gold-100 sm:left-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How we work</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Trust. Integrity. Performance. <span className="gold-text">Partnership.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Four values that are behavioural, not decorative — each one shows up in documents, deadlines and
              decisions.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: 'Trust', text: 'Verification before marketing. We publish our checks, label our assumptions, and put the client’s outcome ahead of the commission.' },
              { icon: Handshake, title: 'Integrity', text: 'The deal we’d accept for our own families — or we say no. Our reputation compounds; a single shortcut spends it.' },
              { icon: Gauge, title: 'Performance', text: 'Yields, occupancy, appreciation — measured and reported. “It felt like a good deal” is not a performance metric.' },
              { icon: Users, title: 'Partnership', text: 'We build with clients, landowners and developers for the long term. The best transactions are the ones that repeat.' },
            ].map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }} className="card-luxe card-luxe-hover p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <v.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="bg-ink py-16">
        <div className="container-luxe grid gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: 'Mission', text: 'Turn property information into intelligent investment decisions, and qualified prospects into confident real-estate clients.' },
            { icon: Eye, title: 'Vision', text: 'East Africa’s most trusted real-estate investment house — the standard for verified, disciplined, client-first property transactions.' },
            { icon: Compass, title: 'Approach', text: 'Facts before opinions. Math before marketing. Patience before pressure. And technology — Keja.ai — everywhere it helps.' },
          ].map((m) => (
            <motion.div key={m.title} {...fadeUp} className="border-l-2 border-gold-500/60 pl-6">
              <m.icon className="h-6 w-6 text-gold-400" />
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-luxe text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-display text-3xl sm:text-4xl">Work with a house that <span className="gold-text">verifies first</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
              {SITE.tagline} — start the conversation and see the difference discipline makes.
            </p>
            <Link to="/contact" className="btn-gold mt-8">
              Contact Chacadom <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
