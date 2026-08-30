/** Base-path aware asset URL (works at root and under subpaths like GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const SITE = {
  name: 'Chacadom Investments',
  shortName: 'Chacadom',
  tagline: 'Building Wealth Through Real Estate Excellence',
  pillars: ['Vision', 'Value', 'Growth', 'Legacy'],
  values: ['Trust', 'Integrity', 'Performance', 'Partnership'],
  email: 'info@chacadom.com',
  phone: '+254 700 123 456',
  whatsapp: '254700123456',
  address: 'Westlands, Nairobi · Kenya',
  /** Live deployment (keja.ai domain pending registration/DNS) */
  kejaUrl: 'https://gadda00.github.io/keja-ai/',
  tokenizeUrl: 'https://gadda00.github.io/keja-ai/tokenize',
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
    points: ['Grade-A office & retail assets', 'Tenanted income-producing property', 'Off-market opportunities for qualified buyers', 'Full due-diligence coordination'],
  },
  {
    id: 'leasing',
    icon: 'KeyRound',
    title: 'Property Leasing & Tenant Sourcing',
    short: 'Quality tenants, matched to quality space, on market terms.',
    description:
      'Vacancy is the silent killer of commercial returns. Our leasing desk maintains an active register of corporate, NGO and SME tenants, matches them to your space, negotiates terms that protect the landlord, and manages the entire onboarding — from LOI to lease execution to handover.',
    points: ['Corporate & NGO tenant network', 'Lease structuring & negotiation', 'Tenant screening & covenants', 'Renewals & rent reviews handled'],
  },
  {
    id: 'advisory',
    icon: 'TrendingUp',
    title: 'Real Estate Investment Advisory',
    short: 'Where discipline meets opportunity.',
    description:
      'We advise individuals, family offices and institutions on building real-estate portfolios that actually perform: yield analysis, appreciation forecasting, corridor selection, entry and exit timing, and portfolio construction that balances income with growth. Our advice is labelled honestly — facts, estimates and assumptions never blended.',
    points: ['Yield & ROI modelling, 5/10-yr projections', 'Growth-corridor identification', 'Entry & exit strategy', 'Diaspora investment programmes'],
  },
  {
    id: 'land',
    icon: 'Landmark',
    title: 'Land Acquisition & Development',
    short: 'Raw land to performing asset.',
    description:
      'Land is Kenya\u2019s most powerful wealth builder — if the papers are clean and the corridor is right. We acquire land with verified freehold and leasehold titles, navigate zoning and approvals, and manage development from feasibility through completion, with our capital partners where appropriate.',
    points: ['Title-verified acquisitions (Ardhisasa cross-checked)', 'Zoning, change-of-use & approvals', 'Development feasibility & management', 'Growth-corridor land banking'],
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: 'Property Marketing & Promotion',
    short: 'Premium assets deserve premium positioning.',
    description:
      'A property sells for what the market can see. Our marketing team produces the full asset story — professional photography, drone media, investor-grade brochures, targeted digital campaigns and channel distribution through our agency network and the Keja.ai platform.',
    points: ['Professional photo, video & drone media', 'Investor-grade brochure production', 'Targeted digital campaigns', 'Distribution via Keja.ai network'],
  },
  {
    id: 'jv',
    icon: 'Handshake',
    title: 'Joint Ventures & Strategic Partnerships',
    short: 'Better deals, built together.',
    description:
      'Landowners and developers achieve more together than apart. We structure joint ventures that align incentives: land contribution agreements, profit-share frameworks, development management and governance that protects every party. Our JV track record is built on transparent documentation and patient capital.',
    points: ['Landowner-developer JVs', 'Profit-share structuring', 'Development management', 'Institutional capital introductions'],
  },
  {
    id: 'portfolio',
    icon: 'PieChart',
    title: 'Portfolio Management',
    short: 'Your assets, performing as one portfolio.',
    description:
      'We manage real-estate portfolios the way fund managers manage securities: consolidated reporting, yield tracking, capex prioritisation, refinance and divestment signals, and rebalancing across asset classes and geographies. Monthly statements, annual plans, no surprises.',
    points: ['Consolidated portfolio reporting', 'Capex planning & prioritisation', 'Refinance & divestment signals', 'Asset allocation across geographies'],
  },
]

export const STATS = [
  { value: 'KES 1.2B+', label: 'Assets transacted & advised' },
  { value: '40+', label: 'Deals closed' },
  { value: '7', label: 'Service lines' },
  { value: '3', label: 'Regional offices planned' },
]

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
