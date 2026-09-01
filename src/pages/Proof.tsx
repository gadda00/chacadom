import { usePageMeta } from '@/lib/seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  FileSearch,
  AlertTriangle,
  Coins,
  Scale,
  Building2,
  Info,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react'
import { ENGAGEMENT_PROFILES, ENTITY, FEES_DISCLOSURE, METHODOLOGIES, STATS } from '@/data/content'
import { fadeUp } from '@/lib/motion'

/**
 * Proof & Disclosure Center — the site's "trust, but verify" page.
 *
 * An external review (Aug 2026) found the site's weakness was "proof
 * density": authoritative claims without definitions, periods, sources,
 * fees or case studies. This page collects all of it in one place:
 * how we count our numbers, how we work (methodologies), how we earn
 * (fees & conflicts), what we have done (engagement profiles), and who
 * we are (entity block). Everything here is data-driven from content.ts,
 * so honesty is a schema, not a one-off promise.
 */
export default function Proof() {
  usePageMeta(
    'Proof & Disclosure — How We Count, How We Work, How We Earn',
    'Every public figure with its definition, period and source; engagement profiles; methodology outlines; fees and conflicts disclosed in plain language.',
  )
  return (
    <div>
      {/* hero */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Proof &amp; Disclosure Center</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Don&rsquo;t take our word for it. <span className="gold-text">Interrogate it.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Trust pages usually ask for belief. This one asks for scrutiny: every headline number
            carries its definition, period and source; every service carries its method; fees and
            conflicts are stated before you ever pick up the phone. Where something is a placeholder
            or an illustrative example, it says so — plainly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#how-we-count" className="btn-gold">
              How we count <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#fees"
              className="inline-flex items-center gap-2 border border-gold-400/50 px-6 py-3 text-sm font-semibold tracking-wide text-gold-300 transition hover:bg-gold-400/10"
            >
              <Coins className="h-4 w-4" /> Fees &amp; conflicts
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE COUNT — claim provenance */}
      <section className="section-pad bg-white" id="how-we-count">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Claim provenance</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              How we <span className="gold-text-light">count</span> our numbers
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A number without a definition is marketing. Each figure below states what it counts,
              over what period, and where it comes from — including when the source is our own
              records rather than an independent audit.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2">
            {STATS.map((s) => (
              <motion.div key={s.label} {...fadeUp} className="card-luxe p-6 ring-1 ring-gold-100">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-3xl font-bold">
                    <span className="gold-text">{s.value}</span>
                  </p>
                  <span className="rounded-full bg-gold-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-700">
                    {s.asOf}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.definition}</p>
                <p className="mt-3 border-t border-gold-100 pt-3 text-[11px] leading-relaxed text-ink-faint">
                  <b className="font-semibold text-ink-muted">Source:</b> {s.source}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT PROFILES — the case-study framework */}
      <section className="section-pad bg-cream" id="profiles">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Engagement profiles</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              What a Chacadom mandate looks like
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mx-auto mt-6 max-w-3xl rounded-xl bg-amber-50 px-5 py-4 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-200"
            role="note"
          >
            <b className="inline-flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5" /> Read this first.
            </b>{' '}
            The profiles below are <b>illustrative composites</b> of typical mandates — not
            permissioned client case studies. Real engagements are confidential until a client
            agrees to be named; each profile carries the full structure (role, problem, work,
            outcome, horizon, risks) so that permissioned real cases can replace them one-for-one
            without redesign. Treat them as a preview of the work, not evidence of specific
            transactions.
          </motion.div>

          <div className="mt-10 space-y-6">
            {ENGAGEMENT_PROFILES.map((p) => (
              <motion.article
                key={p.id}
                {...fadeUp}
                className="card-luxe overflow-hidden ring-1 ring-gold-100"
              >
                <div className="grid gap-0 md:grid-cols-[1fr_2fr]">
                  <div className="bg-ink p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/40">
                      <Info className="h-3 w-3" /> Illustrative
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gold-300">
                      {p.mandateRole}
                    </p>
                    <p className="mt-2 text-xs text-white/60">{p.horizon}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-ink-soft">
                      <b className="text-ink">Starting problem:</b> {p.startingProblem}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {p.workPerformed.map((w) => (
                        <li key={w} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                          {w}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 rounded-lg bg-gold-50 px-4 py-3 text-sm leading-relaxed text-ink-soft ring-1 ring-gold-100">
                      <b className="text-ink">Outcome:</b> {p.outcome}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.risksEncountered.map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200"
                        >
                          <AlertTriangle className="h-3 w-3" /> {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGIES */}
      <section className="section-pad bg-white" id="methodology">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Methodology</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              How we work, <span className="gold-text-light">step by step</span>
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Interrogate the method before the first call. These outlines are informational — they
              describe how we approach each discipline, not advice for your situation.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {METHODOLOGIES.map((m) => (
              <motion.div key={m.id} {...fadeUp} className="card-luxe p-6 ring-1 ring-gold-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-gold-sm">
                  <FileSearch className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.title}</h3>
                <ol className="mt-3 space-y-2">
                  {m.steps.map((s, i) => (
                    <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-50 text-[11px] font-bold text-gold-700 ring-1 ring-gold-200">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES & CONFLICTS */}
      <section className="section-pad bg-cream" id="fees">
        <div className="container-luxe max-w-4xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Fees &amp; conflicts</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              How we <span className="gold-text-light">earn</span>
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{FEES_DISCLOSURE.feeModel}</p>
          </motion.div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm shadow-sm ring-1 ring-gold-100">
              <thead>
                <tr className="border-b border-gold-200 bg-gold-50/60 text-[11px] uppercase tracking-wider text-ink-faint">
                  <th className="px-4 py-3 font-semibold">Fee type</th>
                  <th className="px-4 py-3 font-semibold">Status today</th>
                  <th className="px-4 py-3 font-semibold">How it works</th>
                </tr>
              </thead>
              <tbody>
                {FEES_DISCLOSURE.feeTypes.map((f) => (
                  <tr key={f.type} className="border-b border-gold-100 last:border-0 align-top">
                    <td className="px-4 py-3.5 font-semibold text-ink">{f.type}</td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                          f.status === 'Not charged'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-gold-100 text-gold-800'
                        }`}
                      >
                        {f.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs leading-relaxed text-ink-muted">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div {...fadeUp} className="mt-8 rounded-2xl bg-ink p-6 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-gold-400" />
              <h3 className="font-display text-xl font-semibold">Conflicts &amp; incentives</h3>
            </div>
            <p className="mt-4 leading-relaxed text-white/75">{FEES_DISCLOSURE.conflictsPolicy}</p>
            <p className="mt-3 text-[11px] leading-relaxed text-white/60">
              {FEES_DISCLOSURE.futureNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENTITY & CONTACT — honest current state */}
      <section className="section-pad bg-white" id="entity">
        <div className="container-luxe max-w-3xl">
          <motion.div {...fadeUp} className="mx-auto text-center">
            <p className="eyebrow">Who we are</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Entity details &amp; <span className="gold-text-light">what&rsquo;s verified</span>
            </h2>
          </motion.div>
          <div className="mt-8 card-luxe overflow-hidden ring-1 ring-gold-100">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="flex items-start gap-3 border-b border-gold-100 p-5 sm:border-b-0 sm:border-r">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    Legal name
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{ENTITY.legalName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    {ENTITY.office.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{ENTITY.office.value}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gold-100 bg-cream/60 p-5">
              <p className="text-xs leading-relaxed text-ink-muted">
                <b className="text-ink-soft">Verified status:</b> the phone and WhatsApp lines (+254
                108 611 387) are live — the WhatsApp number also carries the vendor catalogue behind
                the Portfolio page. The business registration number, applicable licences and a
                two-way-verified email are <b>not yet published on this site</b>; they will be added
                as a verified register without redesign when the owner publishes them.
              </p>
              <p className="mt-2 text-[11px] text-ink-faint">
                Entity block last reviewed {ENTITY.lastReviewed}.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-gold">
              Start a conversation <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
