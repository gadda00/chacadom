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
