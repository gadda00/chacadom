// @vitest-environment jsdom
/**
 * Page smoke tests — every route's page component must render its heading
 * without throwing. Before this file, a page that crashed on render was only
 * caught at deploy time (prerender) or, worse, in production; PR checks never
 * rendered a single component.
 */
import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import type { ComponentType } from 'react'

import About from '@/pages/About'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import Faq from '@/pages/Faq'
import Home from '@/pages/Home'
import Insights from '@/pages/Insights'
import NotFound from '@/pages/NotFound'
import Portfolio from '@/pages/Portfolio'
import Privacy from '@/pages/Privacy'
import Proof from '@/pages/Proof'
import Services from '@/pages/Services'
import Team from '@/pages/Team'
import Terms from '@/pages/Terms'
import Ventures from '@/pages/Ventures'

const PAGES: [string, ComponentType][] = [
  ['Home', Home],
  ['About', About],
  ['Proof', Proof],
  ['Services', Services],
  ['Ventures', Ventures],
  ['Insights', Insights],
  ['Contact', Contact],
  ['Careers', Careers],
  ['Team', Team],
  ['Portfolio', Portfolio],
  ['Faq', Faq],
  ['Privacy', Privacy],
  ['Terms', Terms],
  ['NotFound', NotFound],
]

afterEach(cleanup)

describe('page smoke renders', () => {
  for (const [name, Page] of PAGES) {
    it(`${name} renders with a single h1 and no crash`, () => {
      const { container } = render(
        <MemoryRouter>
          <Page />
        </MemoryRouter>,
      )
      const h1s = container.querySelectorAll('h1')
      expect(h1s.length, `${name} must have exactly one h1`).toBe(1)
      expect(h1s[0].textContent?.trim().length ?? 0).toBeGreaterThan(0)
    })
  }

  it('every page sets its own document title', () => {
    for (const [name, Page] of PAGES) {
      const { unmount } = render(
        <MemoryRouter>
          <Page />
        </MemoryRouter>,
      )
      expect(document.title, `${name} must set a title`).toMatch(/Chacadom/)
      unmount()
    }
  })
})
