/**
 * Chacadom current listings — vendor stock advertised through our WhatsApp
 * catalogue. Content is transcribed from the vendor's own listing copy
 * (wa.me product pages, C Investments catalogue) and presented with the same
 * honesty discipline as the rest of the site: prices are the vendor's asking
 * figures, availability is "as advertised", and every card deep-links to the
 * authoritative product page so buyers always see the live source.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Bath,
  Briefcase,
  Car,
  Droplets,
  Dumbbell,
  LandPlot,
  Layout,
  ShieldCheck,
  Sun,
  Trees,
  Waves,
} from 'lucide-react'

export interface ListingSpec {
  icon: LucideIcon
  label: string
}

export interface Listing {
  id: string
  title: string
  /** One-line marketing line, cleaned from the vendor copy. */
  tagline: string
  type: string
  location: string
  area: string
  /** Vendor asking price in KES; null = price on application. */
  priceKes: number | null
  priceNote?: string
  beds: string
  /** 3–5 hard specs shown as chips on the card. */
  specs: { icon: LucideIcon; label: string }[]
  description: string
  image: { base: string; alt: string; width: number; height: number }
  /** Vendor's authoritative WhatsApp product page. */
  whatsappUrl: string
}

const spec = (icon: LucideIcon, label: string): ListingSpec => ({ icon, label })

/** The vendor's full catalogue — more stock beyond what we feature here. */
export const WHATSAPP_CATALOG_URL = 'https://wa.me/c/254108611387'

export const formatKes = (price: number): string => {
  if (price >= 1_000_000) {
    const millions = price / 1_000_000
    const m = Number.isInteger(millions) ? millions.toString() : millions.toFixed(1)
    return `KES ${m}M`
  }
  return `KES ${price.toLocaleString('en-KE')}`
}

export const LISTINGS: Listing[] = [
  {
    id: 'amethyst-springs',
    title: 'Amethyst Springs',
    tagline: 'Premium tower living off Dennis Pritt Road — wellness, sky bar and infinity pool.',
    type: 'Apartment development',
    location: 'Kilimani, Nairobi',
    area: 'Kilimani',
    priceKes: null,
    priceNote: 'Price on application',
    beds: '1–2 bedroom',
    specs: [
      spec(Layout, '58–110 sqm units'),
      spec(Dumbbell, 'Gym · spa · sauna'),
      spec(Waves, 'Infinity pool'),
      spec(Briefcase, 'Co-working'),
    ],
    description:
      'A refined residential development in one of Nairobi\u2019s most sought-after neighbourhoods, minutes from the Arboretum and State House. Floor-to-ceiling windows and curved-glass architecture frame panoramic city views, while the amenity deck — cinema, sky bar, residents\u2019 lounge, paddle court and kids\u2019 playroom — is built for professionals and families alike. One-bedroom units from 58 sqm suit the Airbnb investor; two-bedroom layouts run to 110 sqm with suspended bedrooms and studies.',
    image: {
      base: '/images/listings/listing-amethyst',
      alt: 'Amethyst Springs — curved-glass residential tower at dusk',
      width: 600,
      height: 600,
    },
    whatsappUrl: 'https://wa.me/p/24503322992671363/254108611387',
  },
  {
    id: 'barini-apartments',
    title: 'Barini Apartments',
    tagline:
      '3-bedroom ensuite duplex with DSQ — 48 exclusive units opposite UTR, Argwings Kodhek Road.',
    type: 'Apartment · Duplex',
    location: 'Kilimani, Nairobi',
    area: 'Kilimani',
    priceKes: 30_000_000,
    priceNote: 'Asking, o.n.o.',
    beds: '3 bedroom + DSQ',
    specs: [
      spec(Layout, '251 sqm plinth'),
      spec(Car, '2 parking + guest'),
      spec(Droplets, 'Heated pool · 2 saunas'),
      spec(Sun, 'Solar-heated water'),
    ],
    description:
      'Only 48 units in the complex, 1.2 km from Yaya Centre and 1.1 km from Valley Arcade. Indian-built quality throughout: two elegant living rooms, spacious ensuite bedrooms, 24/7 security with power backup, borehole plus city water. The service charge of KES 20,000/month covers a heated swimming pool, state-of-the-art gym and changing rooms for men and ladies. A turnkey investor option — comparable units rent at about KES 200,000 per month.',
    image: {
      base: '/images/listings/listing-barini',
      alt: 'Barini Apartments — bright open-plan living and dining area',
      width: 600,
      height: 600,
    },
    whatsappUrl: 'https://wa.me/p/9934790383206612/254108611387',
  },
  {
    id: 'runda-house',
    title: 'Runda Family Home',
    tagline: 'Five ensuite bedrooms on half an acre in Nairobi\u2019s leafiest diplomatic suburb.',
    type: 'House · For sale',
    location: 'Runda, Nairobi',
    area: 'Runda',
    priceKes: 300_000_000,
    beds: '5 bedroom + 2 DSQ',
    specs: [
      spec(LandPlot, 'Half-acre plot'),
      spec(Car, '2 lockable garages'),
      spec(Waves, 'Private heated pool'),
      spec(Droplets, 'Garden water feature'),
    ],
    description:
      'A substantial family residence in Runda: all five bedrooms ensuite, two domestic staff quarters, a spacious sitting area and ample visitor parking. The half-acre grounds carry a private heated swimming pool and a landscaped garden with a water fountain — the classic Runda brief executed at scale. Quiet, secure and minutes from Village Market and the UN Gigiri complex.',
    image: {
      base: '/images/listings/listing-runda',
      alt: 'Runda — manicured lawn and modern two-storey houses',
      width: 600,
      height: 600,
    },
    whatsappUrl: 'https://wa.me/p/9609409105786950/254108611387',
  },
  {
    id: 'tatu-city-mansion',
    title: 'Tatu City Mansion',
    tagline: 'Executive four-bedroom mansion in Kijani — gated, smart and resort-grade.',
    type: 'House · For sale',
    location: 'Kijani, Tatu City',
    area: 'Tatu City',
    priceKes: 100_000_000,
    beds: '4 bedroom ensuite',
    specs: [
      spec(ShieldCheck, '24-hr CCTV · gated'),
      spec(Dumbbell, 'Gym & office area'),
      spec(Bath, 'Jacuzzi · steam shower'),
      spec(Trees, 'Green area & parking'),
    ],
    description:
      'A prestigious executive mansion inside Tatu City\u2019s secure Kijani estate. All bedrooms ensuite, with a dedicated gym and office area, a modern kitchen with pantry, laundry room and up-to-date interior finishes. The master suite carries a jacuzzi and steam shower; the estate brings automated gates, wide-format windows and generous green space. Turnkey for the family that wants city-adjacent privacy without compromise.',
    image: {
      base: '/images/listings/listing-tatu',
      alt: 'Tatu City — modern living room with marble media wall and balcony doors',
      width: 600,
      height: 600,
    },
    whatsappUrl: 'https://wa.me/p/24081714854762435/254108611387',
  },
]

/**
 * Chacadom client desk — DIRECT MANDATES (distinct from vendor catalogue
 * stock). These are live owner mandates we hold and sell ourselves: prices
 * are the sellers' asking figures, verification is in progress where noted,
 * and enquiries open a prefilled WhatsApp chat with our desk (there is no
 * vendor product page — we ARE the desk).
 */
export interface ClientMandate {
  id: string
  title: string
  kind: string
  location: string
  /** Asking price display (per-acre pricing for land). */
  price: string
  priceNote?: string
  highlights: string[]
  description: string
  /** Optional photography; land mandates may be stat-forward without one. */
  image?: { base: string; alt: string; width: number; height: number }
  /** Prefilled WhatsApp enquiry to the Chacadom desk. */
  enquiryUrl: string
}

const WA = (message: string) => `https://wa.me/254108611387?text=${encodeURIComponent(message)}`

export const CLIENT_MANDATES: ClientMandate[] = [
  {
    id: 'daykio-kiragu-residence',
    title: 'Daykio Kiragu Residence',
    kind: 'Executive 5BR residence · direct-owner mandate',
    location: 'Daykio Kiragu Road, Karen · Nairobi',
    price: 'KES 67M',
    priceNote: 'Asking — seller negotiable around serious offers',
    highlights: [
      'Three storeys of premium finishes throughout',
      'Minutes from the Waterfront and Karen centre',
      'Owner-supplied photography, unedited',
      'Also live on Keja.ai with a full trust profile',
    ],
    description:
      'A newly finished five-bedroom residence on Daykio Kiragu Road: crisp white elevations under a dark shingle roof, a manicured lawn, and interiors finished with hardwood floors, tray ceilings with chandeliers, a fitted kitchen and floor-to-ceiling glazing across the open-plan living and dining rooms. Sold on a direct-owner mandate held by our desk — no intermediary chain — with an independent title search booked before any deposit moves.',
    image: {
      base: '/images/listings/listing-daykio',
      alt: 'Daykio Kiragu Residence — white three-storey house with manicured lawn',
      width: 1280,
      height: 960,
    },
    enquiryUrl: WA(
      'Hi Chacadom — I am interested in the Daykio Kiragu 5BR residence (KES 67M) from your portfolio page.',
    ),
  },
  {
    id: 'amber-bay-heights',
    title: 'Amber Bay Heights',
    kind: '24-floor residential tower · off-plan',
    location: 'General Mathenge Drive, Westlands · Nairobi',
    price: 'Priced on application',
    priceNote: 'Unit mix, floor plans and payment terms on WhatsApp',
    highlights: [
      'Rooftop infinity pool and sky bar',
      'Gym, yoga deck, conference room, coffee lounge',
      'Cascade pools and residents’ facilities stack',
    ],
    description:
      'A 24-floor residential tower on General Mathenge Drive in Westlands, offering studios to three-bedroom layouts over a full amenity stack: rooftop infinity pool with skyline views, sky bar, residents’ lounge, gym and yoga deck, conference facilities and a coffee lounge. Off-plan sales with structured payment plans; developer-supplied imagery and brochures available through our desk.',
    image: {
      base: '/images/listings/listing-amberbay',
      alt: 'Amber Bay Heights — 24-floor tower brochure render with amenity stack',
      width: 1024,
      height: 777,
    },
    enquiryUrl: WA(
      'Hi Chacadom — I would like the Amber Bay Heights (Westlands) unit mix, pricing and payment plan.',
    ),
  },
  {
    id: 'kantafu-30-acres',
    title: 'Kantafu — 30 Acres with Ready Title',
    kind: 'Prime land · development or land-banking',
    location: 'Kantafu · ~1.3 km off tarmac, off Old Kangundo Road',
    price: 'KES 5.5M per acre',
    priceNote: '30 acres total · slightly negotiable · direct owner transaction',
    highlights: [
      'Ready title deed — a single clean deed',
      'Electricity and piped water on site',
      'Gated-community, institutional or subdivision potential',
      'Natural drainage gradient, developed neighbourhood',
    ],
    description:
      'Thirty acres of strategically located land in Kantafu, roughly 1.3 km off the tarmac and under 500 m from Old Kangundo Road. Utilities are on site and the parcel sits inside a developed neighbourhood with schools and churches nearby and housing projects underway — suited to a gated community, an institutional development, subdivision or patient land banking. Offered on a ready title with the owner available for a direct transaction.',
    enquiryUrl: WA(
      'Hi Chacadom — I am interested in the 30-acre Kantafu land (KES 5.5M/acre). Please share the title particulars.',
    ),
  },
]
