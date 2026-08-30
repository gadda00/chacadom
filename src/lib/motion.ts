/**
 * Shared framer-motion presets — single source of truth (was duplicated
 * verbatim in 8 page files). Pair with <MotionConfig reducedMotion="user">
 * in App.tsx so the OS accessibility setting is honoured automatically.
 */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
} as const
