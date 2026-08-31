import { usePageMeta } from '@/lib/seo'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { SITE, whatsappLink } from '@/data/content'
import { asset } from '@/data/content'
import { fadeUp } from '@/lib/motion'

/** Structured inquiry — the review asked for intent, budget, channel,
 *  urgency, consent and a next-step expectation instead of a bare message. */
const INTENTS = [
  { value: 'buy', label: 'Buying or investing in property' },
  { value: 'sell', label: 'Selling or leasing an asset' },
  { value: 'manage', label: 'Property management' },
  { value: 'land', label: 'Land acquisition & development' },
  { value: 'jv', label: 'Joint venture / partnership' },
  { value: 'diaspora', label: 'Diaspora investment' },
  { value: 'keja', label: 'Keja.ai partnership' },
  { value: 'other', label: 'Something else' },
] as const

const BUDGETS = [
  'Under KES 5M',
  'KES 5M – 15M',
  'KES 15M – 50M',
  'KES 50M – 150M',
  'Above KES 150M',
  'Not sure yet',
]

const CHANNELS = ['WhatsApp', 'Phone call', 'Email', 'Video call (diaspora-friendly)'] as const
const TIMELINES = ['Exploring for now', 'Next 3 months', 'Next 6–12 months', 'Urgent'] as const

const CONSENT_STORE_KEY = 'chacadom.consent-log'

export default function Contact() {
  usePageMeta(
    'Contact — Invest Today, Secure Your Tomorrow',
    'Reach Chacadom on WhatsApp, phone or email — the first consultation is free and pressure-free.',
  )
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
    channel: 'WhatsApp' as (typeof CHANNELS)[number],
    timeline: 'Exploring for now' as (typeof TIMELINES)[number],
  })
  const [userIntent, setUserIntent] = useState<string | null>(null)
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)
  const [reference, setReference] = useState('')
  const [honey, setHoney] = useState('') // bot trap
  const [mapLoaded, setMapLoaded] = useState(false) // click-to-load gate for the Google Maps embed — humans never see it

  // ?intent=sell from the homepage pathway cards pre-selects the door —
  // derived during render (no setState-in-effect), user choice overrides
  const paramIntent = searchParams.get('intent')
  const intent =
    userIntent ?? (paramIntent && INTENTS.some((i) => i.value === paramIntent) ? paramIntent : '')
  const setIntent = (v: string) => setUserIntent(v)

  const emailValid = !form.email || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
  const valid =
    form.name.trim().length >= 2 &&
    form.phone.trim().length >= 7 &&
    emailValid &&
    form.message.trim().length >= 10 &&
    intent !== '' &&
    consent

  const intentLabel = INTENTS.find((i) => i.value === intent)?.label ?? 'General'

  const composeBody = (ref: string) =>
    `Reference: ${ref}\nName: ${form.name}\nPhone: ${form.phone}${
      form.email ? `\nEmail: ${form.email}` : ''
    }\nIntent: ${intentLabel}${form.budget ? `\nBudget: ${form.budget}` : ''}\nPreferred channel: ${form.channel}\nTimeline: ${form.timeline}\n\n${form.message}\n\nConsent: sender agreed to be contacted about this enquiry (${new Date().toISOString()})\n\n— Sent from the Chacadom Investments website contact form`

  /** Consent record — kept on the visitor's device (static host: no server),
   *  timestamped, inspectable, deletable. The email itself carries the flag. */
  const recordConsent = (ref: string) => {
    try {
      const log = JSON.parse(localStorage.getItem(CONSENT_STORE_KEY) ?? '[]') as unknown[]
      log.unshift({
        reference: ref,
        intent: intentLabel,
        consentedAt: new Date().toISOString(),
        purpose: 'Contact-response only',
      })
      localStorage.setItem(CONSENT_STORE_KEY, JSON.stringify(log.slice(0, 20)))
    } catch {
      /* private mode — the email body still carries the consent line */
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid || honey) return
    const ref = `CHQ-${Date.now().toString(36).toUpperCase().slice(-6)}`
    setReference(ref)
    recordConsent(ref)
    // Static hosting: compose the enquiry in the visitor's own email client,
    // with WhatsApp as an alternate one-tap channel. No silent dead ends.
    const subject = `Website enquiry ${ref} — ${intentLabel} — ${form.name}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeBody(ref))}`
    setSent(true)
  }

  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Invest today. <span className="gold-text">Secure your tomorrow.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            Prime locations. Verified documents. Growth corridors identified before the crowd. Tell
            us where you are on your journey — the first consultation is honest, free and
            pressure-free.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe grid gap-10 grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          {/* form */}
          <motion.div {...fadeUp} className="card-luxe p-6 sm:p-8">
            {sent ? (
              <div className="py-12 text-center" role="status" aria-live="polite">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                  Your email app should have opened
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                  {form.name.split(' ')[0]}, your enquiry is pre-filled and ready to send — just hit
                  send in your email app. If nothing opened (or you use webmail), use the WhatsApp
                  button below — nothing is sent until you complete one of those two steps.
                </p>
                <div className="mx-auto mt-6 max-w-md rounded-xl bg-cream/70 p-4 text-left ring-1 ring-gold-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
                    Your reference
                  </p>
                  <p className="mt-1 font-mono text-lg font-bold text-ink">{reference}</p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                    <b className="text-ink-soft">What happens next:</b> a named person replies on
                    your preferred channel ({form.channel.toLowerCase()}) during business hours
                    (Mon–Fri 8:30–17:30, Sat 9:00–13:00 EAT) — usually the same working day, at
                    worst the next. Quote your reference in any follow-up so we start warm. Your
                    consent record for this enquiry is stored on your device and referenced in the
                    message itself.
                  </p>
                </div>
                <a
                  href={whatsappLink(
                    `Hello Chacadom! Enquiry ${reference} from ${form.name || 'the website'} (${intentLabel}). ${form.message.slice(0, 200)}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp instead
                </a>
                <button
                  onClick={() => setSent(false)}
                  className="mt-3 block text-sm font-semibold text-gold-700 hover:text-gold-600"
                >
                  ← Edit my message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-ink">Tell us what you need</h2>
                <p className="mt-1.5 text-sm text-ink-muted">
                  Six quick questions — then a human who knows why you came. First consultation:
                  honest, free, pressure-free.
                </p>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    name="company_website"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {/* intent — radio cards so the choice is explicit */}
                  <fieldset>
                    <legend className="label-luxe">I want to *</legend>
                    <div className="mt-2 grid gap-2 grid-cols-1 sm:grid-cols-2">
                      {INTENTS.map((i) => (
                        <label
                          key={i.value}
                          className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition ${
                            intent === i.value
                              ? 'border-gold-400 bg-gold-50 font-semibold text-ink'
                              : 'border-gold-200 bg-white text-ink-soft hover:border-gold-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="cf-intent"
                            value={i.value}
                            checked={intent === i.value}
                            onChange={() => setIntent(i.value)}
                            className="h-4 w-4 accent-gold-600"
                          />
                          {i.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className="label-luxe">
                        Full name *
                      </label>
                      <input
                        id="cf-name"
                        required
                        autoComplete="name"
                        className="input-luxe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Wanjiku"
                        aria-invalid={form.name.length > 0 && form.name.trim().length < 2}
                        aria-describedby="cf-hint"
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className="label-luxe">
                        Phone *
                      </label>
                      <input
                        id="cf-phone"
                        required
                        type="tel"
                        autoComplete="tel"
                        className="input-luxe"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+254 7XX XXX XXX"
                        aria-invalid={form.phone.length > 0 && form.phone.trim().length < 7}
                        aria-describedby="cf-hint"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-email" className="label-luxe">
                        Email
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        autoComplete="email"
                        className="input-luxe"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        aria-invalid={form.email.length > 0 && !emailValid}
                        aria-describedby="cf-hint"
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-budget" className="label-luxe">
                        Indicative budget
                      </label>
                      <select
                        id="cf-budget"
                        className="input-luxe"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      >
                        <option value="">Prefer not to say</option>
                        {BUDGETS.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-channel" className="label-luxe">
                        Preferred response channel
                      </label>
                      <select
                        id="cf-channel"
                        className="input-luxe"
                        value={form.channel}
                        onChange={(e) =>
                          setForm({ ...form, channel: e.target.value as (typeof CHANNELS)[number] })
                        }
                      >
                        {CHANNELS.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cf-timeline" className="label-luxe">
                        Timeline
                      </label>
                      <select
                        id="cf-timeline"
                        className="input-luxe"
                        value={form.timeline}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            timeline: e.target.value as (typeof TIMELINES)[number],
                          })
                        }
                      >
                        {TIMELINES.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="label-luxe">
                      Message *
                    </label>
                    <textarea
                      id="cf-message"
                      required
                      rows={5}
                      className="input-luxe resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your goals, preferred areas and anything we should know…"
                      aria-invalid={form.message.length > 0 && form.message.trim().length < 10}
                      aria-describedby="cf-hint"
                    />
                    {!valid && (form.name || form.message) && (
                      <p id="cf-hint" className="mt-2 text-xs text-gold-700" role="alert">
                        Please complete the required fields (message of at least 10 characters) and
                        confirm consent before sending.
                      </p>
                    )}
                  </div>

                  {/* consent — explicit, timestamped, scoped */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-cream/70 p-4 ring-1 ring-gold-100">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-gold-600"
                      required
                    />
                    <span className="text-xs leading-relaxed text-ink-soft">
                      I agree to be contacted about <b className="text-ink">this enquiry only</b>,
                      via my preferred channel. The consent record (time, purpose) is stored on my
                      device and travels with the enquiry itself. No marketing lists — see the{' '}
                      <a
                        href="/privacy"
                        className="font-semibold text-gold-700 underline decoration-gold-400 underline-offset-2"
                      >
                        privacy policy
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!valid}
                    className="btn-gold w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" /> Send enquiry
                  </button>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Your email app will open with the enquiry ready to send — or reach us instantly
                    on WhatsApp below.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* info */}
          <motion.div {...fadeUp} className="space-y-4">
            <a
              href={whatsappLink('Hello Chacadom Investments!')}
              target="_blank"
              rel="noreferrer"
              className="card-luxe card-luxe-hover flex items-center gap-4 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                <MessageCircle className="h-6 w-6 text-white" fill="currentColor" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-ink">WhatsApp — fastest</p>
                <p className="text-sm text-ink-muted">{SITE.phone}</p>
              </div>
            </a>

            <div className="card-luxe p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Direct lines</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-ink-soft">
                  <Phone className="h-4 w-4 text-gold-600" /> {SITE.phone}
                </li>
                <li className="flex items-center gap-3 text-ink-soft">
                  <Mail className="h-4 w-4 text-gold-600" /> {SITE.email}
                </li>
                <li className="flex items-center gap-3 text-ink-soft">
                  <MapPin className="h-4 w-4 text-gold-600" /> {SITE.address}
                </li>
                <li className="flex items-center gap-3 text-ink-soft">
                  <Clock className="h-4 w-4 text-gold-600" /> Mon–Fri 8:30–17:30 · Sat 9:00–13:00
                  (EAT, GMT+3)
                </li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-gold-200">
                {mapLoaded ? (
                  <iframe
                    title="Chacadom Investments — Westlands, Nairobi"
                    src="https://www.google.com/maps?q=Westlands,+Nairobi,+Kenya&output=embed"
                    className="h-44 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-popups allow-forms"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="group flex h-44 w-full flex-col items-center justify-center gap-2 bg-gold-50 text-gold-800 transition-colors hover:bg-gold-100"
                  >
                    <MapPin className="h-6 w-6 text-gold-600 transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold">Load interactive map</span>
                    <span className="text-[11px] text-ink-muted">
                      Loads from Google Maps on request — nothing loads until you ask.
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="card-luxe overflow-hidden">
              <picture>
                <source srcSet={asset('/brand/chacadom-flyer.webp')} type="image/webp" />
                <img
                  src={asset('/brand/chacadom-flyer.jpg')}
                  alt="Chacadom Investments"
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="h-72 w-full object-cover object-top"
                />
              </picture>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                  {SITE.pillars.join(' · ')}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{SITE.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
