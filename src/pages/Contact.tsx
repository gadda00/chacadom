import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react'
import { SITE, whatsappLink } from '@/data/content'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

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
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* form */}
          <motion.div {...fadeUp} className="card-luxe p-6 sm:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">Message received — thank you.</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                  {form.name.split(' ')[0]}, our team will respond within one business day. If your matter is
                  time-sensitive, WhatsApp reaches us fastest.
                </p>
                <a
                  href={whatsappLink('Hello Chacadom, following up on my enquiry.')}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-ink">Tell us about your goals</h2>
                <p className="mt-1.5 text-sm text-ink-muted">
                  The more you share, the sharper our first recommendation.
                </p>
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label-luxe">Full name *</label>
                      <input required className="input-luxe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Wanjiku" />
                    </div>
                    <div>
                      <label className="label-luxe">Phone *</label>
                      <input required className="input-luxe" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 7XX XXX XXX" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label-luxe">Email</label>
                      <input type="email" className="input-luxe" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="label-luxe">I’m interested in</label>
                      <select className="input-luxe" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
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
                    <label className="label-luxe">Message *</label>
                    <textarea required rows={5} className="input-luxe resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your goals, budget range, preferred areas and timeline…" />
                  </div>
                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    <Send className="h-4 w-4" /> Send message
                  </button>
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
                </li>
              </ul>
            </div>

            <div className="card-luxe overflow-hidden">
              <img src="/brand/chacadom-flyer.jpg" alt="Chacadom Investments" className="h-72 w-full object-cover object-top" />
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
