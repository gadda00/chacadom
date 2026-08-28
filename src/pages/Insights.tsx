import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinned, Coins, TrendingUp, Lightbulb, Landmark, ShieldCheck, ArrowRight } from 'lucide-react'
import { asset } from '@/data/content'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function Insights() {
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Investment philosophy</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Smart investments build <span className="gold-text">lasting wealth</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            The right property. The right location. The right strategy. This is the philosophy behind every
            recommendation Chacadom makes — published openly, because an informed client is a better client.
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section-pad bg-white">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Real estate rewards</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Patience · Positioning · Timing</h2>
            <p className="mt-4 italic text-ink-muted">
              &ldquo;The people who wait for a place to become expensive usually fund the profits of those who
              entered early.&rdquo;
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Patience', text: 'Great opportunities belong to those who wait wisely. Property is a five-to-ten-year instrument — the compounding happens in the years you hold, not the month you buy. We help clients buy assets worth holding.' },
              { title: 'Positioning', text: 'The right location today creates tomorrow’s value. Infrastructure drives value faster than hype — bypasses, expressways, industrial parks, SEZs, airports, universities and tourism zones are the real price-makers.' },
              { title: 'Timing', text: 'Enter early, stay ahead, and let time build your wealth. Growth corridors sell at entry prices only once. The goal is to buy the corridor before the ribbon-cutting, not after the headlines.' },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="card-luxe p-8 text-center">
                <p className="font-display text-4xl font-bold text-gold-300">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX RULES */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Key advice for clients & investors</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Six rules from the Chacadom desk</h2>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: MapPinned,
                title: 'Location drives value',
                text: 'Invest in areas with growing population, infrastructure and strong demand. Infrastructure drives value faster than hype — a road, a mall or a university does more for your plot’s price than any brochure.',
              },
              {
                icon: Coins,
                title: 'Land is powerful, but cash flow is king',
                text: 'Land appreciates over time; rental property gives you monthly income. Balance both for long-term financial freedom — land builds the balance sheet while rentals pay the bills as it grows.',
              },
              {
                icon: TrendingUp,
                title: 'Focus on growth corridors',
                text: 'Look for areas near bypasses, expressways, industrial parks, SEZs, airports, universities and tourism zones. Today’s satellite town is tomorrow’s suburb — Kitengela and Syokimau wrote that playbook.',
              },
              {
                icon: Lightbulb,
                title: 'Buy based on demand, not emotions',
                text: 'Ask: who will buy or rent this, and what problem does it solve? High-demand areas always retain stronger value. The unit you love matters less than the unit the next ten tenants will love.',
              },
              {
                icon: Landmark,
                title: 'Documentation is everything',
                text: 'No clean title, no deal. Official searches, encumbrance checks, beacon walks and rates clearance — boring paperwork is what separates an asset from a courtroom. We automate the first pass; your advocate finishes it.',
              },
              {
                icon: ShieldCheck,
                title: 'Trust must be verifiable',
                text: 'If a platform cannot show you why a listing is trustworthy, treat it as unverified. Trust scores, published fraud flags and escrowed deposits are features, not slogans — insist on all three.',
              },
            ].map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="card-luxe card-luxe-hover flex gap-5 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <c.icon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POSTERS */}
      <section className="section-pad bg-white">
        <div className="container-luxe grid gap-8 sm:grid-cols-2">
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl shadow-card ring-1 ring-gold-100">
            <img src={asset('/insights/smart-investments.jpg')} alt="Smart investments build lasting wealth" className="w-full" />
          </motion.div>
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl shadow-card ring-1 ring-gold-100">
            <img src={asset('/insights/real-estate-rewards.jpg')} alt="Real estate rewards: patience, positioning, timing" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16">
        <div className="container-luxe text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Ready to apply the philosophy to <span className="gold-text">your portfolio?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              From a first plot to a diversified portfolio, the discipline is the same — and it starts with a
              conversation.
            </p>
            <Link to="/contact" className="btn-gold mt-8">
              Talk to Chacadom <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
