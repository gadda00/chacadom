import { usePageMeta } from '@/lib/seo'
import { ShieldCheck } from 'lucide-react'

const UPDATED = '30 August 2026'

export default function Privacy() {
  usePageMeta(
    'Privacy Policy — Chacadom Investments',
    'How we handle personal data, aligned to the Kenya Data Protection Act, 2019.',
  )
  return (
    <div>
      <section className="bg-ink py-16 sm:py-20">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-5 text-sm text-white/60">
            Last updated {UPDATED} · Aligned to the Kenya Data Protection Act, 2019
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe max-w-3xl space-y-10 text-[15px] leading-[1.85] text-ink-soft">
          <div className="flex gap-4 rounded-2xl bg-cream p-6 ring-1 ring-gold-100">
            <ShieldCheck className="h-6 w-6 shrink-0 text-gold-700" />
            <p className="text-sm leading-relaxed">
              The short version: this website stores almost nothing. Our current platforms run
              client-side — preferences, saved searches and demo accounts live in your own browser,
              not on our servers. When you contact us, we use what you sent to reply, and for
              nothing else. The full policy follows.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">1. Who we are</h2>
            <p className="mt-3">
              Chacadom Investments (&ldquo;Chacadom&rdquo;, &ldquo;we&rdquo;) is a Kenyan
              real-estate investment and advisory firm and the operator of this website and the
              Keja.ai platform preview. For purposes of the Kenya Data Protection Act, 2019,
              Chacadom is the data controller for personal data submitted through this site. You can
              reach us via the contact channels published on our Contact page.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">2. What we collect</h2>
            <p className="mt-3">
              We process only what you give us or what the site needs to function:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                • <b>Contact submissions</b> — the name, phone, email and message you choose to send
                us.
              </li>
              <li>
                • <b>Browser-local data</b> — saved searches, favourites and demo-account details
                are stored in your browser&rsquo;s local storage on your device and never
                transmitted to us.
              </li>
              <li>
                • <b>Basic technical logs</b> — our static hosting provider may record standard
                request data (IP address, browser type) for security and delivery, retained briefly.
              </li>
            
              <li>
                • <b>Third-party embeds (click-to-load)</b> — the interactive map on our Contact
                page loads from Google Maps only when you press "Load interactive map"; until
                then no request is made to Google. Our fonts are served by Google Fonts, which
                receives your IP address as part of any standard web request.
              </li></ul>
            <p className="mt-3">
              We do not run advertising trackers, sell data, or operate central user accounts on
              this site today.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">3. Why we process it (lawful basis)</h2>
            <p className="mt-3">
              Enquiry data is processed on the basis of your consent and our legitimate interest in
              responding to prospective clients — replying to the message you sent. Where engagement
              progresses to a mandate, processing additionally supports contract performance and
              legal obligations (identity verification, statutory records). You may withdraw consent
              at any time.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">4. How long we keep it</h2>
            <p className="mt-3">
              Enquiries are retained while the conversation is active and for a reasonable period
              thereafter for record-keeping; mandate records are kept as long as law and
              professional standards require. Browser-local data persists until you clear it —
              uninstalling nothing, transmitting nothing.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">5. Who we share it with</h2>
            <p className="mt-3">
              We do not sell or rent personal data. We share only where necessary: our website
              hosting provider; licensed advocates, valuers and conveyancers working on your
              mandate; and regulators or courts where the law requires. As regulated offerings
              (including Keja Tokenize) launch, KYC data will flow solely through licensed
              processors under written data-processing agreements.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">6. Your rights</h2>
            <p className="mt-3">
              Kenyan data-protection law gives you rights to access, correct, delete, object to and
              restrict processing of your personal data, and to lodge a complaint with the Office of
              the Data Protection Commissioner. To exercise any right, contact us — we will verify
              and respond within statutory timelines.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">7. Security &amp; children</h2>
            <p className="mt-3">
              We apply technical and organisational measures appropriate to the sensitivity of what
              we hold, and we keep what we hold deliberately minimal. Our services are directed at
              adults; we do not knowingly collect data from children.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">8. Changes</h2>
            <p className="mt-3">
              We will update this page when our practices change and revise the date above. Material
              changes to how we process your data will be flagged clearly on the site. This policy
              is governed by the laws of Kenya.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
