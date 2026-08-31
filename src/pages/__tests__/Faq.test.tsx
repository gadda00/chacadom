// @vitest-environment jsdom
/**
 * FAQ accordion — open/close behaviour, the h3 question structure (the
 * primary screen-reader browsing mode for FAQs) and the FAQPage JSON-LD
 * this route publishes.
 */
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Faq from '@/pages/Faq'

afterEach(cleanup)

function renderFaq() {
  return render(
    <MemoryRouter>
      <Faq />
    </MemoryRouter>,
  )
}

describe('Faq page', () => {
  it('renders every question inside an h3 (heading navigation can find them)', () => {
    const { container } = renderFaq()
    const h3s = container.querySelectorAll('h3')
    expect(h3s.length).toBe(11)
    // every h3 contains the toggle button
    for (const h3 of h3s) {
      expect(h3.querySelector('button')).toBeTruthy()
    }
  })

  it('first question is open by default, others closed', () => {
    renderFaq()
    const buttons = screen_buttons()
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    expect(buttons[1].getAttribute('aria-expanded')).toBe('false')
  })

  it('clicking a closed question opens it and its region is no longer hidden', () => {
    const { container } = renderFaq()
    const buttons = screen_buttons()
    fireEvent.click(buttons[2])
    expect(buttons[2].getAttribute('aria-expanded')).toBe('true')
    const panel = container.querySelector('#faq-panel-2')
    expect(panel?.hasAttribute('hidden')).toBe(false)
  })

  it('clicking the open question closes it', () => {
    renderFaq()
    const buttons = screen_buttons()
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
  })

  it('publishes FAQPage JSON-LD scoped to this route and removes it on unmount', () => {
    const { unmount } = renderFaq()
    const script = document.getElementById('chacadom-route-jsonld')
    expect(script).toBeTruthy()
    expect(script?.textContent).toContain('FAQPage')
    expect(script?.textContent).toContain('Question')
    unmount()
    expect(document.getElementById('chacadom-route-jsonld')).toBeNull()
  })

  it('the fee answer no longer asserts a published schedule (truth-layer alignment)', () => {
    const { container } = renderFaq()
    const text = container.textContent ?? ''
    expect(text).toContain('No formal fee schedule is published on this site yet')
    expect(text).not.toMatch(/typically 5–8%/)
  })
})

/** Toggle buttons in DOM order (they carry the question text). */
function screen_buttons() {
  return Array.from(document.querySelectorAll('h3 > button[aria-expanded]')) as HTMLButtonElement[]
}
