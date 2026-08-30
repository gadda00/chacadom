import { usePageMeta } from '@/lib/seo'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react'
import { SITE, whatsappLink } from '@/data/content'
import { asset } from '@/data/content'
import { fadeUp } from '@/lib/motion'


export default function Contact() {
  usePageMeta(
    'Contact — Invest Today, Secure Your Tomorrow',
    'Reach Chacadom on WhatsApp, phone or email — the first consultation is free and pressure-free.',
  )
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)
  const [honey, setHoney] = useState('') // bot trap — humans never see it

  const emailValid = !form.email || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
  const valid = form.name.trim().length >= 2 && form.phone.trim().length >= 7 && emailValid && form.message.trim().length >= 10

  const composeBody = () =>
    `Name: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${
      form.interest ? `\nInterest: ${form.interest}` : ''
    }\n\n${form.message}\n\n— Sent from the Chacadom Investments website contact form`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid || honey) return
    // Static hosting: compose the enquiry in the visitor's own email client,
    // with WhatsApp as an alternate one-tap channel. No silent dead ends.
    const subject = `Website enquiry — ${form.interest || 'General'} — ${form.name}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeBody())}`
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
            Prime locations. Verified documents. Growth corridors identified before the crowd. Tell us where you
            are on your journey — the first consultation is honest, free and pressure-free.
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
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">Your email app should have opened</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                  {form.name.split(' ')[0]}, your enquiry is pre-filled and ready to send — just hit send in
                  your email app. If nothing opened (or you use webmail), use the WhatsApp button below —
                  nothing is sent until you complete one of those two steps.
                </p>
                <a
                  href={whatsappLink(`Hello Chacadom! Enquiry from ${form.name || 'the website'}: ${form.interest || 'general'}. ${form.message.slice(0, 200)}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp instead
                </a>
                <button onClick={() => setSent(false)} className="mt-3 block text-sm font-semibold text-gold-700 hover:text-gold-600">
                  ← Edit my message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-ink">Tell us about your goals</h2>
                <p className="mt-1.5 text-sm text-ink-muted">
                  The more you share, the sharper our first recommendation.
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
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className="label-luxe">Full name *</label>
                      <input id="cf-name" required autoComplete="name" className="input-luxe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Wanjiku" aria-invalid={form.name.length > 0 && form.name.trim().length < 2} />
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className="label-luxe">Phone *</label>
                      <input id="cf-phone" required type="tel" autoComplete="tel" className="input-luxe" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 7XX XXX XXX" aria-invalid={form.phone.length > 0 && form.phone.trim().length < 7} />
                    </div>
                  </div>
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-email" className="label-luxe">Email</label>
                      <input id="cf-email" type="email" autoComplete="email" className="input-luxe" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" aria-invalid={form.email.length > 0 && !emailValid} />
                    </div>
                    <div>
                      <label htmlFor="cf-interest" className="label-luxe">I’m interested in</label>
                      <select id="cf-interest" className="input-luxe" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                        <option value="">Choose one…</option>
                        <option>Buying property</option>
                        <option>Selling property</option>
                        <option>Leasing space</option>
                        <option>Land acquisition</option>
                        <option>Joint venture</option>
                        <option>Portfolio management</option>
                        <option>Diaspora investment</option>
                        <option>Keja.ai partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-message" className="label-luxe">Message *</label>
                    <textarea id="cf-message" required rows={5} className="input-luxe resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your goals, budget range, preferred areas and timeline…" aria-invalid={form.message.length > 0 && form.message.trim().length < 10} />
                    {!valid && (form.name || form.message) && (
                      <p className="mt-2 text-xs text-gold-700" role="note">
                        Please complete the required fields (message of at least 10 characters) before sending.
                      </p>
                    )}
                  </div>
                  <button type="submit" disabled={!valid} className="btn-gold w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-50">
                    <Send className="h-4 w-4" /> Send message
                  </button>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Your email app will open with the enquiry ready to send — or reach us instantly on WhatsApp below.
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
                  <Clock className="h-4 w-4 text-gold-600" /> Mon–Fri 8:30–17:30 · Sat 9:00–13:00 (EAT, GMT+3)
                </li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-gold-200">
                <iframe
                  title="Chacadom Investments — Westlands, Nairobi"
                  src="https://www.google.com/maps?q=Westlands,+Nairobi,+Kenya&output=embed"
                  className="h-44 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="card-luxe overflow-hidden">
              <picture>
                <source srcSet={asset('/brand/chacadom-flyer.webp')} type="image/webp" />
                <img src={asset('/brand/chacadom-flyer.jpg')} alt="Chacadom Investments" width={1024} height={1536} loading="lazy" className="h-72 w-full object-cover object-top" />
              </picture>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">{SITE.pillars.join(' · ')}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {SITE.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
