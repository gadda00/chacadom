import { motion } from 'framer-motion'
import { Award, Briefcase, Landmark, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

const LEADERSHIP = [
  {
    initials: 'VN',
    name: 'Victor Ndunda',
    role: 'Founder & Principal',
    focus: 'Investment strategy · Land acquisition · Keja.ai product vision',
    bio: 'Leads Chacadom\u2019s underwriting discipline and the Keja.ai platform build-out. Believes Kenyan real estate rewards patience, punishes shortcuts, and deserves software that tells the truth about both.',
    tags: ['Strategy', 'Underwriting', 'Product'],
  },
  {
    initials: 'CM',
    name: 'Clive Mwangi',
    role: 'Director, Partnerships & Capital',
    focus: 'Joint ventures · Investor relations · Tokenization roadmap',
    bio: 'Structures Chacadom\u2019s JV and capital partnerships and sponsors the Keja Tokenize compliance workstream — SPV structuring, CMA sandbox engagement and institutional readiness.',
    tags: ['Capital', 'JVs', 'Tokenization'],
  },
  {
    initials: 'AO',
    name: 'Amina Otieno',
    role: 'Head, Investor Portfolio Services',
    focus: 'Portfolio management · Client reporting · Diaspora mandates',
    bio: 'Runs the portfolio desk: income reporting, occupancy strategy and the managed programmes that keep diaspora and institutional clients confident from a distance.',
    tags: ['Portfolio', 'Reporting', 'Diaspora'],
  },
]

const DESKS = [
  { icon: Briefcase, title: 'Commercial Sales Desk', text: 'Offices, retail and industrial mandates across Nairobi\u2019s business nodes — from Westlands office floors to Athi River logistics shells.' },
  { icon: Landmark, title: 'Land & Development Desk', text: 'Corridor research, title diligence and assembly of development land along the expressway, SGR and bypass spines.' },
  { icon: ShieldCheck, title: 'Trust & Verification Desk', text: 'The house verification methodology — Ardhisasa cross-checks, document forensics and price-band analysis — now embedded in Keja.ai.' },
  { icon: Award, title: 'Advisory & Research Desk', text: 'Acquisition economics, yield underwriting and the five-year portfolio plans that turn property collections into strategies.' },
]

export default function Team() {
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Leadership & desks</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            The people behind <span className="gold-text">the discipline</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Real estate is a people business before it is a property business. Chacadom keeps a deliberately
            small senior bench — every mandate is underwritten by a principal, not handed down a chain.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {LEADERSHIP.map((p, i) => (
              <motion.div key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="card-luxe p-7">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient font-display text-xl font-bold text-white shadow-gold-md">
                  {p.initials}
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-ink">{p.name}</h2>
                <p className="mt-1 text-sm font-semibold text-gold-700">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.bio}</p>
                <p className="mt-4 border-t border-gold-100 pt-4 text-xs leading-relaxed text-ink-muted">{p.focus}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[11px] font-semibold text-gold-700 ring-1 ring-gold-100">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mx-auto mt-20 max-w-2xl text-center">
            <p className="eyebrow">How we organise</p>
            <h2 className="heading-display mt-3 text-3xl">Four desks, one standard</h2>
          </motion.div>
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {DESKS.map((d, i) => (
              <motion.div key={d.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card-luxe flex gap-5 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 ring-1 ring-gold-200">
                  <d.icon className="h-6 w-6 text-gold-700" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mx-auto mt-16 max-w-2xl rounded-2xl bg-cream p-8 text-center ring-1 ring-gold-100">
            <p className="font-display text-xl font-bold text-ink">Work with a principal, not a call centre</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
              Every engagement starts with a conversation with someone who can price the deal — and say no to it.
            </p>
            <Link to="/contact" className="btn-gold mt-6">Request a consultation</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
