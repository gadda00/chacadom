# Chacadom Investments — Building Wealth Through Real Estate Excellence

Corporate site of Chacadom Investments, parent of **Keja.ai** (Kenya's AI real-estate trust layer).
Live at **https://gadda00.github.io/chacadom/**

Round-3 upgrades: honest contact flow (map embed, EAT hours), FAQ in nav + FAQPage structured data, real newsletter capture, risk disclaimers on performance figures, WebP image pipeline (~500KB lighter), prefers-reduced-motion support, WCAG-AA gradient contrast, Careers page, 12-route sitemap.

## Pages

Home · About (2022–2026 timeline) · **Leadership & Desks** · Services (7 lines) · **Track Record** · Ventures (Keja.ai showcase + 2026–2030 roadmap + investor relations) · Insights (philosophy) · Contact (mailto + WhatsApp handoff) · **FAQ** · **Privacy Policy (KDPA-aligned)** · **Terms & Disclaimers**

Bold = added in the 2026 trust-build wave, alongside: per-route SEO titles/descriptions, WCAG-AA gold contrast (deep-gold CTAs, #a88727 brand alignment), PWA (manifest + service worker + offline page), real 404, error boundary, focus/ARIA fixes, optimized images (WebP, 4KB logo variants), and the fixed Keja.ai banner (previously a live 404).

## Stack

React 19 · Vite 8 · TypeScript · Tailwind 3.4 · framer-motion · GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev
npm run build   # base /chacadom/ baked into vite.config (matches CI)
```

## Contact details

`src/data/content.ts` holds the single source for phone/email/WhatsApp — replace the placeholder numbers there (and in `index.html` JSON-LD) when the real client lines are confirmed.

## Deployment

`git push origin main` → Actions builds `--base=/chacadom/`, SPA 404 fallback, Pages deploy.
