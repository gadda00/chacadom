/**
 * Careers — Chacadom Investments.
 * Honest, small-firm pitch: no fake vacancies, real culture, real door.
 */
import { usePageMeta } from '@/lib/seo'
import { Link } from 'react-router-dom'
import { Briefcase, GraduationCap, Handshake, LineChart, Mail, MapPin, Sparkles } from 'lucide-react'
import { fadeUp } from '@/lib/motion'
import { motion } from 'framer-motion'
import { SITE } from '@/data/content'

const VALUES = [
  {
    icon: Handshake,
    title: 'Owners, not order-takers',
    text: 'Every mandate is led by someone whose name is on the advice. We hire people who want accountability, not attendance.',
  },
  {
    icon: LineChart,
    title: 'Evidence over eloquence',
    text: 'Yields, comparables, encumbrance searches. If a claim cannot be evidenced, it does not leave the building.',
  },
  {
    icon: GraduationCap,
    title: 'Compounding craft',
    text: 'Title forensics, valuation, negotiation, development economics — we invest deliberately in depth most shops skip.',
  },
]

const TRACKS = [
  { role: 'Analyst — Research & Valuation', focus: 'Comparable analysis, corridor research, valuation models', shape: 'Full-time · Nairobi (Westlands)' },
  { role: 'Associate — Investment Advisory', focus: 'Client mandates from sourcing to closing', shape: 'Full-time · Nairobi, with site travel' },
  { role: 'Software — Keja.ai product team', focus: 'Full-stack, data engineering, AI/ML for the flagship platform', shape: 'Full-time · Nairobi or remote (EAT ±3)' },
]

export default function Careers() {
  usePageMeta(
    'Careers — Build With Us',
    'Chacadom Investments careers: analyst, advisory and Keja.ai product roles in Nairobi. Small team, deep craft, evidence-first culture.',
  )
  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Careers</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Small team. <span className="gold-text">Deep craft.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            We are deliberately small, because trust does not scale by headcount. When we hire, we hire
            for judgment and appetite for responsibility — then we back you with real mandates from day one.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {VALUES.map((v) => (
              <motion.div key={v.title} {...fadeUp} className="card-luxe card-luxe-hover p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <v.icon className="h-6 w-6 text-white" />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Where we are growing</p>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Current tracks</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            We keep a short, honest list. If your track is not here, an exceptional introduction still gets read —
            but we will not waste your time with a vacancy that does not exist.
          </p>
          <div className="mt-8 space-y-4">
            {TRACKS.map((t) => (
              <motion.div key={t.role} {...fadeUp} className="card-luxe flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{t.role}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{t.focus}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                    <MapPin className="h-3.5 w-3.5" /> {t.shape}
                  </p>
                </div>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Application — ${t.role}`)}`}
                  className="btn-outline shrink-0 !py-2.5 !text-xs"
                >
                  <Mail className="h-3.5 w-3.5" /> Apply by email
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-2xl bg-ink p-8">
            <p className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <Sparkles className="h-5 w-5 text-gold-400" /> Internship &amp; attachment
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Two paid positions per quarter for final-year students and recent graduates in land economics,
              real estate, finance, law or computer science. You will touch live research, real files and
              real deals — with your name on the work.
            </p>
          </motion.div>

          <p className="mt-8 text-center text-sm text-ink-muted">
            <Briefcase className="mr-1.5 inline h-4 w-4 text-gold-600" />
            Chacadom Investments is an equal-opportunity employer. All applications are reviewed on merit.
          </p>
          <p className="mt-4 text-center text-sm">
            <Link to="/contact" className="font-semibold text-gold-700 hover:text-gold-600">
              Prefer to talk first? Contact the desk →
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
