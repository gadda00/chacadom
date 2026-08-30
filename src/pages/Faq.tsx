import { usePageMeta, faqJsonLd, useRouteJsonLd } from '@/lib/seo'
import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/data/content'

const FAQS: { q: string; a: string; group: string }[] = [
  {
    group: 'Working with us',
    q: 'What does a first consultation actually cover?',
    a: 'Thirty to forty-five minutes: your goals, timeline, budget and risk appetite; an honest read on whether current market conditions favour your mission; and — if we are not the right firm for it — we say so and point you somewhere useful. No pitch decks, no pressure, no fee.',
  },
  {
    group: 'Working with us',
    q: 'How do you charge?',
    a: 'Mandate-dependent and stated in writing before work begins: a success fee on sales and acquisitions, a management percentage on portfolios (typically 5–8% of collected income), and fixed or retainer structures for advisory and JV structuring. We are allergic to unclear fee stacks and will walk you through every line before you sign anything.',
  },
  {
    group: 'Working with us',
    q: 'Do you work with diaspora clients remotely?',
    a: 'Constantly — it is one of our core desks. The protocol: verification before money, escrowed deposits, staged payments against milestones, documented escorted inspections, and reporting you can read from any timezone. Our Nyali and Kitengela track-record entries ran end-to-end with clients who never boarded a flight.',
  },
  {
    group: 'Buying & selling',
    q: 'What does buying property in Kenya really cost on top of the price?',
    a: 'Budget roughly 5.9% in urban areas: stamp duty at 4% (2% rural), legal fees around 1.5%, valuation ~0.25% and registration/misc ~0.15%. Mortgage buyers should add bank processing (~0.5%) and required insurances. We publish the full stack in writing before you commit — surprises are for birthdays.',
  },
  {
    group: 'Buying & selling',
    q: 'How long does a purchase take?',
    a: 'A clean, verified file runs six to ten weeks from offer to registered title: verification days, sale agreement one to two weeks, stamp duty and Ardhisasa transfer two to six weeks. Mortgages add two to four weeks of bank processing. The biggest source of delay is seller documentation — which is why we verify before anyone signs anything.',
  },
  {
    group: 'Buying & selling',
    q: 'How do you verify a property before we commit money?',
    a: 'The house method, now also automated in Keja.ai: official Ardhisasa title and encumbrance search, rates and rent clearance, approved-plan reconciliation, price-band analysis against comparable sales, and photo/duplicate forensics on listings. If something does not reconcile, the deal pauses — not the other way around.',
  },
  {
    group: 'Keja.ai & tokenization',
    q: 'What is Keja.ai and how does it relate to Chacadom?',
    a: 'Keja.ai is our digital flagship — Kenya\u2019s AI real-estate advisor and cross-agency trust layer, launched in 2026. It carries the same verification discipline the firm runs manually into software: trust-scored listings, investment math with FACT/ESTIMATE/ASSUMPTION labels, and the Keja Tokenize demo for fractional ownership. You can browse it live at the Keja.ai preview (gadda00.github.io/keja-ai) until the keja.ai domain is pointed there.',
  },
  {
    group: 'Keja.ai & tokenization',
    q: 'Can I buy property tokens today?',
    a: 'Keja Tokenize currently runs in clearly-labelled demo/simulation mode: real Nairobi assets modelled with simulated ledgers, KYC gating and a secondary-market preview. Real, regulated tokenized offerings will follow the CMA sandbox process and institutional structuring work on our 2026–2030 roadmap. We will not sell securities ahead of the law.',
  },
  {
    group: 'Keja.ai & tokenization',
    q: 'Is my data safe on your platforms?',
    a: 'The current platforms run client-side with your data stored locally in your own browser — we hold no central database of visitor accounts. Where real transactions begin, KYC and payment data will flow only through licensed, encrypted processors under written data-protection terms aligned to the Kenya Data Protection Act, 2019.',
  },
  {
    group: 'Trust & safety',
    q: 'Have you ever walked away from a deal?',
    a: 'Regularly, and on principle. We decline mandates where title cannot be verified, where the price cannot be justified by the income, or where the client\u2019s interests would be better served by waiting. The house rule is simple: we say no to deals we would not do with our own money.',
  },
  {
    group: 'Trust & safety',
    q: 'Are you a licensed agency?',
    a: 'We operate within Kenya\u2019s real-estate regulatory framework and work with licensed advocates for all conveyancing, with valuers registered where valuation is required, and towards EAC licensing as directives roll out. Regulatory posture — including the CMA sandbox track for tokenization — is documented on our Ventures page.',
  },
]

export default function Faq() {
  usePageMeta(
    'FAQ — Straight Answers',
    'The questions serious clients ask before engaging Chacadom — answered without sales fog.',
  )
  const [open, setOpen] = useState<number | null>(0)
  useRouteJsonLd(faqJsonLd(FAQS))

const groups = [...new Set(FAQS.map((f) => f.group))]

  return (
    <div>
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow !text-gold-400">Frequently asked</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Straight answers, <span className="gold-text">no sales fog</span>
          </h1>
          <p className="mt-6 leading-relaxed text-white/65">
            The questions serious clients ask before they engage us — answered the way we would answer them across a desk.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-luxe max-w-3xl">
          {groups.map((g) => (
            <div key={g} className="mb-10">
              <h2 className="heading-display text-xl">{g}</h2>
              <div className="mt-4 space-y-3">
                {FAQS.map((f, i) =>
                  f.group === g ? (
                    <div key={f.q} className={`card-luxe overflow-hidden ${open === i ? 'ring-gold-300' : ''}`}>
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-btn-${i}`}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="font-display text-[15px] font-bold text-ink">{f.q}</span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {open === i && (
                        <p id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="border-t border-gold-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-ink-muted">
                          {f.a}
                        </p>
                      )}
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-cream p-8 text-center ring-1 ring-gold-100">
            <p className="font-display text-xl font-bold text-ink">Question not answered?</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
              Ask it directly — WhatsApp reaches a human fastest.
            </p>
            <a
              href={whatsappLink('Hello Chacadom, I have a question that the FAQ did not answer:')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
