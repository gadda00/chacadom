# Chacadom Investments — Building Wealth Through Real Estate Excellence

> Corporate website for **Chacadom Investments** — Vision · Value · Growth · Legacy.
> Home of the company's flagship digital venture: [Keja.ai](https://keja.ai).

## ✨ Pages

| Page | Contents |
|------|----------|
| **Home** | Hero, service overview, Vision/Value/Growth/Legacy pillars, Keja.ai feature, philosophy teaser, stats, CTA |
| **About** | Story, milestones timeline (2022 → 2026), values: Trust · Integrity · Performance · Partnership |
| **Services** | All 7 service lines: Commercial Sales, Leasing & Tenant Sourcing, Investment Advisory, Land Acquisition & Development, Marketing, Joint Ventures, Portfolio Management |
| **Ventures** | Keja.ai flagship showcase, six platform capabilities, 3-phase roadmap |
| **Insights** | Investment philosophy: Patience · Positioning · Timing + six rules for clients & investors |
| **Contact** | Enquiry form, direct lines, WhatsApp |

## 🎨 Brand

- **Palette:** white + metallic gold (`#C6A34F` family) with warm-charcoal ink — luxury, trustworthy
- **Typography:** Playfair Display (display serif) + Inter (body)
- **Assets:** official Chacadom logo and Keja.ai brand images in `public/brand/` and `public/insights/`

## 🧱 Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS 3 · React Router 6 · Framer Motion · Lucide icons.
Static SPA — no backend required.

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## 🌍 Deploy to Netlify

Netlify-ready (`netlify.toml` + `_redirects` included):

1. Push this repo to GitHub.
2. Netlify → **Add new site → Import from GitHub → select this repo**.
3. Build command `npm run build`, publish directory `dist` (auto-detected).
4. Add custom domain `chacadom.com` in **Site settings → Domain management**.

## 🔧 Configuration

All company details (phone, email, WhatsApp, stats, services, timeline) live in `src/data/content.ts`.
The Keja.ai link is set there too (`kejaUrl`) — update it if the product URL changes.

---

© Chacadom Investments · *We don't sell property. We help people make better property decisions.*
