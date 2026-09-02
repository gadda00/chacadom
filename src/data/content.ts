/** Base-path aware asset URL (works at root and under subpaths like GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const SITE = {
  name: 'Chacadom Investments',
  shortName: 'Chacadom',
  tagline: 'Building Wealth Through Real Estate Excellence',
  pillars: ['Vision', 'Value', 'Growth', 'Legacy'],
  values: ['Trust', 'Integrity', 'Performance', 'Partnership'],
  email: 'info@chacadom.com',
  phone: '+254 108 611 387',
  whatsapp: '254108611387',
  address: 'Westlands, Nairobi · Kenya',
  /** Live deployment (keja.ai domain pending registration/DNS) */
  kejaUrl: 'https://gadda00.github.io/keja-ai/',
  /** Trailing slash matters: GitHub Pages 301s the bare path and DROPS the
   *  query string — deep links like ?view=learn landed on the generic page. */
  tokenizeUrl: 'https://gadda00.github.io/keja-ai/tokenize/',
}

export const whatsappLink = (message?: string) =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export interface Service {
  id: string
  icon: string
  title: string
  short: string
  description: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'sales',
    icon: 'Building2',
    title: 'Commercial Property Sales',
    short: 'Acquiring and disposing of commercial assets with precision.',
    description:
      'We source, evaluate and transact commercial property across Nairobi and Kenya\u2019s growth corridors — office towers, retail space, mixed-use developments and industrial assets. Every deal is underwritten with institutional discipline: income verification, tenancy schedules, structural surveys and market-band pricing analysis before a shilling moves.',
    points: [
      'Grade-A office & retail assets',
      'Tenanted income-producing property',
      'Off-market opportunities for qualified buyers',
      'Full due-diligence coordination',
    ],
  },
  {
    id: 'leasing',
    icon: 'KeyRound',
    title: 'Property Leasing & Tenant Sourcing',
    short: 'Quality tenants, matched to quality space, on market terms.',
    description:
      'Vacancy is the silent killer of commercial returns. Our leasing desk maintains an active register of corporate, NGO and SME tenants, matches them to your space, negotiates terms that protect the landlord, and manages the entire onboarding — from LOI to lease execution to handover.',
    points: [
      'Corporate & NGO tenant network',
      'Lease structuring & negotiation',
      'Tenant screening & covenants',
      'Renewals & rent reviews handled',
    ],
  },
  {
    id: 'advisory',
    icon: 'TrendingUp',
    title: 'Real Estate Investment Advisory',
    short: 'Where discipline meets opportunity.',
    description:
      'We advise individuals, family offices and institutions on building real-estate portfolios that actually perform: yield analysis, appreciation forecasting, corridor selection, entry and exit timing, and portfolio construction that balances income with growth. Our advice is labelled honestly — facts, estimates and assumptions never blended.',
    points: [
      'Yield & ROI modelling, 5/10-yr projections',
      'Growth-corridor identification',
      'Entry & exit strategy',
      'Diaspora investment programmes',
    ],
  },
  {
    id: 'land',
    icon: 'Landmark',
    title: 'Land Acquisition & Development',
    short: 'Raw land to performing asset.',
    description:
      'Land is Kenya\u2019s most powerful wealth builder — if the papers are clean and the corridor is right. We acquire land with verified freehold and leasehold titles, navigate zoning and approvals, and manage development from feasibility through completion, with our capital partners where appropriate.',
    points: [
      'Title-verified acquisitions (Ardhisasa cross-checked)',
      'Zoning, change-of-use & approvals',
      'Development feasibility & management',
      'Growth-corridor land banking',
    ],
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: 'Property Marketing & Promotion',
    short: 'Premium assets deserve premium positioning.',
    description:
      'A property sells for what the market can see. Our marketing team produces the full asset story — professional photography, drone media, investor-grade brochures, targeted digital campaigns and channel distribution through our agency network and the Keja.ai platform.',
    points: [
      'Professional photo, video & drone media',
      'Investor-grade brochure production',
      'Targeted digital campaigns',
      'Distribution via Keja.ai network',
    ],
  },
  {
    id: 'jv',
    icon: 'Handshake',
    title: 'Joint Ventures & Strategic Partnerships',
    short: 'Better deals, built together.',
    description:
      'Landowners and developers achieve more together than apart. We structure joint ventures that align incentives: land contribution agreements, profit-share frameworks, development management and governance that protects every party. Our JV track record is built on transparent documentation and patient capital.',
    points: [
      'Landowner-developer JVs',
      'Profit-share structuring',
      'Development management',
      'Institutional capital introductions',
    ],
  },
  {
    id: 'portfolio',
    icon: 'PieChart',
    title: 'Portfolio Management',
    short: 'Your assets, performing as one portfolio.',
    description:
      'We manage real-estate portfolios the way fund managers manage securities: consolidated reporting, yield tracking, capex prioritisation, refinance and divestment signals, and rebalancing across asset classes and geographies. Monthly statements, annual plans, no surprises.',
    points: [
      'Consolidated portfolio reporting',
      'Capex planning & prioritisation',
      'Refinance & divestment signals',
      'Asset allocation across geographies',
    ],
  },
]

export interface StatClaim {
  value: string
  label: string
  /** What the number actually counts — the definition behind the headline. */
  definition: string
  /** Period the figure covers (ISO where possible). */
  asOf: string
  /** Where the number comes from / who owns it. */
  source: string
}

/**
 * Public performance figures with provenance. Every headline number on the
 * site must appear here with a definition, a period and a source — an
 * external review flagged "proof density" as the site's primary weakness:
 * claims may be true, but the product should make them checkable without
 * requiring trust first. Rendered verbatim on /proof ("How we count").
 */
export const STATS: StatClaim[] = [
  {
    value: 'KES 1.2B+',
    label: 'Assets transacted & advised',
    definition:
      'Cumulative market value of properties Chacadom has transacted (as buyer or seller representative) plus assets under advisory mandate, at the value recorded at transaction or mandate start.',
    asOf: 'Since 2022 · last reviewed 2026-09',
    source: 'Chacadom internal transaction records — owner-attested, not independently audited.',
  },
  {
    value: '40+',
    label: 'Deals closed',
    definition:
      'Completed transactions where Chacadom acted as representative or advisor, including sales, leases signed and JV completions.',
    asOf: 'Since 2022 · last reviewed 2026-09',
    source: 'Chacadom internal transaction records — owner-attested, not independently audited.',
  },
  {
    value: '7',
    label: 'Service lines',
    definition: 'Distinct commercial service lines actively marketed on this site (see Services).',
    asOf: 'Current · last reviewed 2026-09',
    source: 'This website\u2019s own Services page — directly checkable.',
  },
  {
    value: '3',
    label: 'Regional offices planned',
    definition:
      'Planned regional presence beyond Nairobi. "Planned" means strategy, not signed leases — offices open when the pipeline justifies them.',
    asOf: 'Roadmap · last reviewed 2026-09',
    source: 'Chacadom internal growth strategy — forward-looking statement, not an operating fact.',
  },
]

/**
 * Engagement profiles — the case-study framework.
 *
 * An external review asked for case studies with mandate role, starting
 * problem, work performed, outcome, horizon and risks. Real client stories
 * need client permission, which only the firm's owner can obtain — so these
 * three profiles are ILLUSTRATIVE composites of typical mandates, clearly
 * labelled as such. Each field the review demanded is present, so replacing
 * an illustrative profile with a permissioned real case is a data edit, not
 * a redesign. `verified: false` also drives the honesty chip in the UI.
 */
export interface EngagementProfile {
  id: string
  title: string
  mandateRole: string
  startingProblem: string
  workPerformed: string[]
  outcome: string
  horizon: string
  risksEncountered: string[]
  /** false = illustrative composite (default until a real, permissioned case replaces it) */
  verified: boolean
}

export const ENGAGEMENT_PROFILES: EngagementProfile[] = [
  {
    id: 'profile-commercial-disposal',
    title: 'Commercial disposal in a soft office market',
    mandateRole: 'Sell-side representative (vendor\u2019s agent)',
    startingProblem:
      'An owner needed to exit a tenanted Grade-B office floor in a market where vacancy was rising and buyers were discounting aggressively.',
    workPerformed: [
      'Income verification and tenancy-schedule reconstruction before listing',
      'Market-band pricing analysis to set a defensible asking range',
      'Targeted marketing to owner-occupier and yield buyers simultaneously',
      'Negotiation managing a rent-review contingency the buyer discovered in diligence',
    ],
    outcome:
      'Transaction closed inside the agreed range after a longer marketing period than the seller hoped — an honest outcome, not a miracle.',
    horizon: '7 months from mandate to completion',
    risksEncountered: [
      'Buyer\u2019s lender revalued the asset below asking — required renegotiation',
      'One tenant\u2019s covenant needed clarification before exchange',
    ],
    verified: false,
  },
  {
    id: 'profile-diaspora-acquisition',
    title: 'Diaspora land acquisition with title anxiety',
    mandateRole: 'Buy-side advisor (client representative)',
    startingProblem:
      'A diaspora buyer had been shown three "bargain" plots by an unverified agent and feared a title trap — a common Kenyan fraud pattern.',
    workPerformed: [
      'Official land search on each candidate parcel; two failed encumbrance review',
      'Beacon walkthrough and boundary confirmation on the surviving candidate',
      'Price benchmarking against corridor comps to test the "bargain" claim',
      'Advocate-led transfer coordination with staged payments tied to milestones',
    ],
    outcome:
      'Clean freehold parcel acquired at fair value; the two failed parcels are the case study — avoiding a bad deal is the service.',
    horizon: '4 months from engagement to registered transfer',
    risksEncountered: [
      'One parcel had an unresolved succession claim (deal declined)',
      'Another was priced 30% below market — a classic bait pattern (deal declined)',
    ],
    verified: false,
  },
  {
    id: 'profile-landlord-jv',
    title: 'Landowner–developer joint venture structuring',
    mandateRole: 'JV structuring advisor and development manager',
    startingProblem:
      'A family owned a prime development plot but no capital or expertise; a developer had both but wanted asymmetric terms.',
    workPerformed: [
      'Independent land valuation to anchor the contribution split',
      'Profit-share framework with staged release tied to construction milestones',
      'Governance: joint sign-off thresholds, dispute escalation, exit clauses',
      'Development management with monthly owner reporting',
    ],
    outcome:
      'Structure agreed and documented; construction completed with distributions tracking the model within tolerance.',
    horizon: '18 months structuring-to-completion',
    risksEncountered: [
      'Construction-cost inflation forced one budget revision',
      'A delay in approvals pushed the first distribution by a quarter',
    ],
    verified: false,
  },
]

/**
 * Methodology outlines — how the firm actually works each discipline.
 * Published so a prospective client can interrogate the method before the
 * first call. Informational, not advice.
 */
export const METHODOLOGIES = [
  {
    id: 'valuation',
    title: 'Valuation & pricing',
    steps: [
      'Comparable transactions first: recent, nearby, same asset class — asking prices are data, not truth',
      'Income approach for tenanted assets: verified rent roll, market vacancy, operating costs',
      'Replacement-cost sanity check for new builds and off-plan',
      'Reconcile the three into a range — a single-point figure implies false precision',
    ],
  },
  {
    id: 'underwriting',
    title: 'Investment underwriting',
    steps: [
      'Separate facts (verified rent, title, costs) from estimates (market rent, occupancy) from assumptions (growth, exit)',
      'Model downside before base case: what breaks first if the market turns',
      'Yield calculated net of realistic management, rates, insurance and voids',
      'Every model output carries its label — no blended "trust us" number',
    ],
  },
  {
    id: 'title-review',
    title: 'Title & document review',
    steps: [
      'Official land search on the registered parcel — ownership, encumbrances, caveats',
      'Rates and rent clearance confirmation',
      'Succession and identity checks on the seller side',
      'Physical beacon walkthrough for land; boundary confirmations where boundaries matter',
    ],
  },
  {
    id: 'tenant-screening',
    title: 'Tenant screening',
    steps: [
      'Identity and company registration verification',
      'Income or covenant evidence proportionate to the rent commitment',
      'Reference history from prior landlords where obtainable',
      'Deposit and guarantee structure matched to the risk grade',
    ],
  },
  {
    id: 'reporting',
    title: 'Portfolio reporting',
    steps: [
      'Monthly statement: income, expenses, occupancy, capex — no averaging over surprises',
      'Quarterly review against the acquisition model, variance explained',
      'Annual plan: refinance, capex, divestment signals explicitly flagged',
      'Everything documented in writing the client actually receives',
    ],
  },
]

/**
 * Fees & conflicts disclosure — plain-language, current-state.
 * The review's point: visitors should understand how the firm earns before
 * they engage. Until the owner finalises a published schedule, the honest
 * answer is "negotiated per mandate" — stated plainly rather than hidden.
 */
export const FEES_DISCLOSURE = {
  feeModel:
    'Chacadom earns negotiated professional fees per mandate (typically commission, retainers or success fees). No fee schedule is published on this site yet — until one is, every engagement is quoted in writing before work begins, and you are free to walk away.',
  feeTypes: [
    {
      type: 'Sales / letting commission',
      status: 'Negotiated per mandate',
      note: 'Percentage or fixed, agreed in the engagement letter before marketing begins.',
    },
    {
      type: 'Advisory retainer',
      status: 'Negotiated per mandate',
      note: 'For ongoing advisory and portfolio work; scope and fee in writing.',
    },
    {
      type: 'Development / JV management fee',
      status: 'Negotiated per mandate',
      note: 'Structured against milestones, never purely time.',
    },
    {
      type: 'Referral fees from third parties',
      status: 'Disclosed when applicable',
      note: 'If a mandate involves a referral arrangement, it is declared in the engagement letter.',
    },
    {
      type: 'Listing placement or ranking fees on this website',
      status: 'Not charged',
      note: 'No property or profile is ranked or promoted on this site for payment.',
    },
  ],
  conflictsPolicy:
    'Where Chacadom acts for both sides of a transaction, or has an interest in an asset it recommends, that interest is disclosed in writing before engagement. The firm does not accept mandates whose incentives it cannot disclose.',
  futureNote:
    'This page will move to a formal, counsel-reviewed disclosure when the fee schedule is published.',
}

/**
 * Entity & contact block — data-driven so real values drop in without
 * redesign, and unverified fields stay honestly labelled until then.
 */
export const ENTITY = {
  legalName: 'Chacadom Investments',
  registration: { value: '', label: 'Business registration number', verified: false },
  licence: { value: '', label: 'Any applicable licences', verified: false },
  office: { value: SITE.address, label: 'Office location', verified: false },
  contact: {
    value: `${SITE.phone} · ${SITE.email}`,
    label: 'Phone & WhatsApp',
    verified: true,
    note: 'Phone and WhatsApp lines are live (the WhatsApp number also backs the vendor catalogue on the Portfolio page); email remains unverified by two-way handshake.',
  },
  lastReviewed: '2026-09-01',
}

export const TIMELINE = [
  {
    year: '2022',
    title: 'The beginning',
    text: 'Chacadom Investments is founded on a simple conviction: Kenyan real estate rewards discipline, and punishes shortcuts. First land-acquisition mandates in Nairobi\u2019s satellite corridors.',
  },
  {
    year: '2023',
    title: 'Advisory practice',
    text: 'Investment advisory and leasing desks open. The portfolio approach — income plus growth, clearly labelled — becomes the house signature.',
  },
  {
    year: '2024',
    title: 'Commercial expansion',
    text: 'Commercial sales, joint ventures and marketing services launch. First managed portfolios cross a quarter-billion shillings in value.',
  },
  {
    year: '2025',
    title: 'Productising the discipline',
    text: 'The firm begins codifying its verification and underwriting playbooks into software — Ardhisasa cross-checks, pricing anomaly detection and investment scoring — laying the technical foundations for a platform, not just a practice.',
  },
  {
    year: '2026',
    title: 'The digital flagship — Keja.ai',
    text: 'Chacadom launches Keja.ai, Kenya\u2019s AI real-estate advisor and cross-agency trust layer — taking the house discipline of verified facts and honest math to the whole market, with tokenized fractional ownership in development.',
  },
]
