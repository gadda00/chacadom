import {
  Banknote,
  CalendarDays,
  Droplets,
  HeartPulse,
  Store,
  Tent,
  Trees,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

/**
 * The Waterfront Karen — Chacadom's flagship location feature.
 *
 * Karen’s lakeside town centre is a major selling point for the corridor we
 * advise in: institutional-scale validation, a reported 50.6-acre mixed-use
 * expansion and a lifestyle anchor families pay a premium to live near.
 * All transaction/expansion figures are media-reported (see sources) and are
 * presented as reported — never blended with verified deal facts.
 */

export interface WaterfrontStat {
  value: string
  label: string
  note?: string
}

export interface WaterfrontAmenity {
  icon: LucideIcon
  title: string
  text: string
}

export interface WaterfrontImage {
  base: string
  alt: string
  width: number
  height: number
}

const img = (base: string, alt: string, width: number, height: number): WaterfrontImage => ({
  base,
  alt,
  width,
  height,
})

export const WATERFRONT_KAREN = {
  name: 'The Waterfront Karen',
  shortName: 'Waterfront Karen',
  location: 'Karen, Nairobi · Kenya',
  tagline: 'Karen’s lakeside town centre — a lifestyle anchor with institutional weight',
  summary:
    'The Waterfront Karen is a world-class mixed-use town centre in the heart of Nairobi’s premier low-density suburb — shopping, dining, family play and wellness around a lakeside campus. Since opening in 2018 it has anchored the Karen corridor’s premium, and reported 2026 plans to expand onto a 50.6-acre flagship site with homes, offices and a hotel make the surrounding neighbourhood the most closely watched address in our coverage.',
  hero: img(
    '/images/waterfront/waterfront-hero',
    'The Waterfront Karen — courtyard architecture with arched walkways and clock tower',
    1280,
    720,
  ),
  stats: [
    { value: '2018', label: 'Opened' },
    { value: '13 acres', label: 'Town-centre campus' },
    { value: '~200,000', label: 'Sq ft retail & leisure', note: 'Phase 1, reported' },
    { value: '50.6 acres', label: 'Expansion site', note: 'Reported 2026' },
    { value: 'KES 9B', label: 'Reported transaction', note: '2026, as reported' },
  ] as WaterfrontStat[],
  amenities: [
    {
      icon: Store,
      title: 'Retail anchored',
      text: 'A Naivas-anchored court of supermarkets, fashion, home and services — daily errands in one stop.',
    },
    {
      icon: Droplets,
      title: 'Maji Magic Aqua Park',
      text: 'Nairobi’s signature aqua park — 40+ water obstacles and slides on the lake, on the town centre’s doorstep.',
    },
    {
      icon: Tent,
      title: 'Adventure & events',
      text: 'Paintball Fury, Carols Under the Stars, Colour Mania and rally flag-offs — a year-round calendar.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Dining & cafés',
      text: 'The suburb’s most complete food offer — quick bites to weekend brunch.',
    },
    {
      icon: HeartPulse,
      title: 'Health & wellness',
      text: 'Medical centre, opticians and fitness studios on site — the family infrastructure that anchors decisions.',
    },
    {
      icon: Banknote,
      title: 'Banking & money',
      text: 'Bank branches, forex and M-Pesa — diaspora clients can complete errands in a single visit.',
    },
    {
      icon: Trees,
      title: 'Lakeside & pet-friendly',
      text: 'A lakeside walking track — the “waterfront” is literal, and residents walk it with their dogs.',
    },
    {
      icon: CalendarDays,
      title: 'Weekend ritual',
      text: 'The reason Karen families rarely leave the suburb on a Saturday.',
    },
  ] as WaterfrontAmenity[],
  thesis: [
    {
      title: 'Institutional validation',
      text: 'A reported KES 9 billion (~USD 70M) transaction involving the town centre and its expansion land is the kind of institutional conviction that reprices an entire corridor. It is the clearest outside signal that Karen’s fundamentals are priced correctly — and that the upside is still ahead.',
    },
    {
      title: 'The 50.6-acre catalyst',
      text: 'The reported expansion plan — residential, an offices/business park and a hotel — would compound footfall, employment and housing demand in a suburb that already trades at a premium for its quiet. In our experience, catalysts of this scale lead prices, not follow them.',
    },
    {
      title: 'Karen fundamentals',
      text: 'Half-acre plots, mature trees, diplomatic and executive residents, and the lowest density of any prime Nairobi suburb. We underwrite Karen as a capital-growth story: entry bands of KES 165k–195k per sqm for verified stock, five-to-ten-year horizon.',
    },
  ],
  gallery: [
    img(
      '/images/waterfront/waterfront-plaza',
      'Open-air plaza at The Waterfront Karen on a busy weekend',
      1200,
      983,
    ),
    img(
      '/images/waterfront/waterfront-aqua',
      'Maji Magic Aqua Park — inflatable water obstacles on the lake',
      1200,
      800,
    ),
    img(
      '/images/waterfront/karen-villa-pool',
      'A Karen home with pool and mature garden, minutes from The Waterfront',
      1600,
      575,
    ),
    img(
      '/images/waterfront/karen-villa-garden',
      'Garden and outdoor living — the Karen lifestyle The Waterfront completes',
      1200,
      1200,
    ),
    img(
      '/images/waterfront/karen-villa-aerial',
      'Aerial view of a forested Karen property — the suburb’s signature half-acre plots',
      1200,
      782,
    ),
    img(
      '/images/waterfront/karen-lawn',
      'A manicured Karen lawn — space is the asset here',
      900,
      1189,
    ),
  ] as WaterfrontImage[],
  video: {
    id: 'WpxuRP-p6CU',
    title: 'Waterfront Mall Nairobi — Full Tour',
    channel: 'Nairobi vlog (YouTube)',
  },
  kejaGuide: 'https://gadda00.github.io/keja-ai/areas/waterfront-karen',
  sources: [
    { label: 'The Waterfront Karen (official)', url: 'https://thewaterfrontkaren.com' },
    {
      label: 'Business Daily Africa — Mugukus in talks to sell Sh9bn Waterfront Karen mall',
      url: 'https://www.businessdailyafrica.com/bd/corporate/companies/mugukus-in-talks-to-sell-sh9bn-waterfront-mall-5533714',
    },
    {
      label: 'Construction Kenya — Waterfront Karen heads for Sh9bn sale',
      url: 'https://www.constructionkenya.com/13483/waterfront-karen-mall',
    },
  ],
  lastReviewed: '2026-09-01',
}
