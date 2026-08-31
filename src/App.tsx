import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import ErrorBoundary from '@/components/ErrorBoundary'
import { MotionConfig } from 'framer-motion'

const About = lazy(() => import('@/pages/About'))
const Proof = lazy(() => import('@/pages/Proof'))
const Services = lazy(() => import('@/pages/Services'))
const Ventures = lazy(() => import('@/pages/Ventures'))
const Insights = lazy(() => import('@/pages/Insights'))
const Contact = lazy(() => import('@/pages/Contact'))
const Team = lazy(() => import('@/pages/Team'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Faq = lazy(() => import('@/pages/Faq'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Careers = lazy(() => import('@/pages/Careers'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  // Every route change resets scroll to the top — regardless of hash. Anchor
  // navigations then scroll to their target (below), which always runs after
  // and therefore lands in the right place.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    // pathname is intentionally a trigger-only dependency: the effect must
    // re-run on every route change even though the body does not read it.
    // oxlint-disable-next-line react/exhaustive-effect-dependencies
  }, [pathname])

  useEffect(() => {
    if (!hash) return undefined
    // Routes are lazy(): on slow loads the hash target is not mounted yet,
    // so a single fixed-delay scroll silently fails. Retry briefly instead —
    // scroll as soon as the element exists, give up quietly after ~20 tries.
    const targetId = hash.slice(1)
    let attempts = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    const tryScroll = () => {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      attempts += 1
      if (attempts < 20) timer = setTimeout(tryScroll, 100)
      // else: element never appeared — give up silently
    }
    timer = setTimeout(tryScroll, 100)
    return () => clearTimeout(timer)
  }, [hash])
  return null
}

function LazyFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gold-100 border-t-gold-600" />
    </div>
  )
}

export default function App() {
  // Keying the boundary per route resets its error state on navigation, so a
  // crash on one route can't brick every other route for the rest of the visit.
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gold-300"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        <ErrorBoundary key={location.pathname}>
          <Suspense fallback={<LazyFallback />}>
            <MotionConfig reducedMotion="user">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/proof" element={<Proof />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ventures" element={<Ventures />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/team" element={<Team />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MotionConfig>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
