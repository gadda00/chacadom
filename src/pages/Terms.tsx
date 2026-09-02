import { usePageMeta } from '@/lib/seo'
import { Scale } from 'lucide-react'

const UPDATED = '30 August 2026'

export default function Terms() {
  usePageMeta(
    'Terms of Use & Disclaimers',
    'Information, not advice: the legal terms for using Chacadom and Keja.ai preview platforms.',
  )
  return (
    <div>
      <section className="bg-ink py-16 sm:py-20">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white">
            Terms of Use &amp; Disclaimers
          </h1>
          <p className="mt-5 text-sm text-white/60">Last updated {UPDATED}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe max-w-3xl space-y-10 text-[15px] leading-[1.85] text-ink-soft">
          <div className="flex gap-4 rounded-2xl bg-cream p-6 ring-1 ring-gold-100">
            <Scale className="h-6 w-6 shrink-0 text-gold-700" />
            <p className="text-sm leading-relaxed">
              The short version: this website is information, not an offer. Nothing here is
              investment, legal or tax advice. Figures marked ESTIMATE or ASSUMPTION are exactly
              that. Tokenization features are simulations until regulators say otherwise — and we
              will not pretend ahead of the law.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">1. Acceptance</h2>
            <p className="mt-3">
              By accessing this website, the Keja.ai platform preview, or the Keja Tokenize
              demonstration, you agree to these terms. If you do not agree, please do not use the
              services. These terms are governed by the laws of Kenya, with exclusive jurisdiction
              in Kenyan courts.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">2. Information, not advice</h2>
            <p className="mt-3">
              Content on this site — including market notes, yields, price bands, calculators and
              Investment Scores — is general information prepared with care but without knowledge of
              your circumstances. It is not investment, legal, tax or valuation advice, and it does
              not constitute an offer or solicitation to buy or sell any security or property.
              Figures are labelled FACT, ESTIMATE or ASSUMPTION where presented on Keja.ai; treat
              every ESTIMATE and ASSUMPTION as a starting point for your own diligence. Obtain
              independent professional advice before acting.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">3. Tokenization demonstration</h2>
            <p className="mt-3">
              Keja Tokenize is a functional demonstration of a tokenized real-estate model. Tokens,
              ledgers, order books, distribution calendars, wallet addresses and returns shown are
              simulated; no securities are offered, no funds are accepted, no blockchain
              transactions occur, and nothing in the demonstration constitutes a prospectus or
              CMA-approved offering. Regulated offerings will only proceed subject to applicable
              approvals, on separate documented terms.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">4. Demo accounts &amp; platform status</h2>
            <p className="mt-3">
              Authentication on the current Keja.ai preview — including Google demo sign-in and
              email accounts — operates client-side for demonstration. Do not reuse real passwords.
              Platform data (listings, leads, portfolios) is demonstration data. Future production
              releases will operate under separate terms with licensed payment and identity
              partners.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">5. Third-party content &amp; links</h2>
            <p className="mt-3">
              Our digital flagship Keja.ai (linked from this site) publishes listings submitted by
              third parties; those listings, while screened by trust-by-design checks, remain the
              responsibility of their submitters. This corporate website hosts a curated snapshot of
              current opportunities — vendor listings that deep-link to the vendor's live WhatsApp
              catalogue, and client mandates handled by our own desk — for introduction only;
              binding terms are concluded directly with the vendor or through our client desk. We
              are not liable for third-party sites linked from either site.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">6. Intellectual property</h2>
            <p className="mt-3">
              The Chacadom and Keja.ai names, marks, site design and written content are our
              property or used with permission. You may quote us with attribution; you may not
              republish our content commercially without written consent.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">7. Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Chacadom is not liable for indirect or
              consequential loss arising from use of this website or its calculators and
              demonstrations. Nothing in these terms limits liability that cannot lawfully be
              limited. Past performance is not a guarantee of future results.
            </p>
          </div>

          <div>
            <h2 className="heading-display text-xl">8. Contact</h2>
            <p className="mt-3">
              Questions about these terms: use the channels on our Contact page. We would rather
              answer a hard question now than a dispute later.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
