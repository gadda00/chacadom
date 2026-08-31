// @vitest-environment jsdom
/**
 * Navbar behaviour — the mobile menu is the site's most-used interactive
 * component and had zero tests: toggle semantics, Escape handling, focus
 * management and the route-change force-close were all unverified.
 */
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Navbar from '@/components/layout/Navbar'

afterEach(cleanup)

function renderNavbar() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>,
  )
}

describe('Navbar', () => {
  it('renders the desktop navigation links', () => {
    renderNavbar()
    for (const label of ['Home', 'About', 'Services', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it('mobile menu: closed by default, opens on toggle, exposes dialog semantics', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    // aria-controls must not dangle when closed
    expect(toggle.getAttribute('aria-controls')).toBeNull()

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(toggle.getAttribute('aria-controls')).toBe('mobile-menu')
    expect(screen.getByRole('dialog', { name: 'Site menu' })).toBeTruthy()
  })

  it('mobile menu: opening moves focus onto the first menu item', async () => {
    renderNavbar()
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    await waitFor(() => {
      expect((document.activeElement as HTMLElement).tagName).toBe('A')
      expect((document.activeElement as HTMLElement).textContent).toBe('Home')
    })
  })

  it('mobile menu: Escape closes it and restores focus to the toggle', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    fireEvent.click(toggle)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(toggle)
  })

  it('mobile menu: closes itself when a menu link navigates', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    fireEvent.click(toggle)
    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    const aboutLink = [...dialog.querySelectorAll('a[href]')].find((a) =>
      a.getAttribute('href')?.endsWith('/about'),
    ) as HTMLAnchorElement
    expect(aboutLink).toBeTruthy()
    fireEvent.click(aboutLink)
    // the menu force-closes on route change (derived state, no effect)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('focus trap: Tab on the last item wraps back to the first', async () => {
    renderNavbar()
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    const links = [...dialog.querySelectorAll('a[href]')] as HTMLAnchorElement[]
    const last = links[links.length - 1]
    const first = links[0]
    last.focus()
    fireEvent.keyDown(dialog, { key: 'Tab' })
    await waitFor(() => expect(document.activeElement).toBe(first))
  })
})
