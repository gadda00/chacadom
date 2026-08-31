// @vitest-environment jsdom
/**
 * Contact form — the site's conversion surface: validation gating (incl. the
 * digit-based phone rule), the conditional hint wiring, and ?intent=
 * pre-selection. None of this had any test coverage.
 */
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Contact from '@/pages/Contact'

afterEach(cleanup)

function renderContact(initialEntry = '/contact') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Contact />
    </MemoryRouter>,
  )
}

function fill(form: HTMLFormElement | HTMLElement, overrides: Record<string, string>) {
  const defaults: Record<string, string> = {
    'cf-name': 'Jane Wanjiku',
    'cf-phone': '+254 712 345 678',
    'cf-email': 'jane@example.com',
    'cf-message': 'I am looking at a commercial unit in Westlands for my family office.',
    ...overrides,
  }
  for (const [id, value] of Object.entries(defaults)) {
    const el = form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement
    fireEvent.change(el, { target: { value } })
  }
}

function pickIntent(container: HTMLElement, value: string) {
  const radio = container.querySelector(`input[type="radio"][value="${value}"]`)
  expect(radio).toBeTruthy()
  fireEvent.click(radio as HTMLInputElement)
}

function agree() {
  fireEvent.click(screen.getByRole('checkbox'))
}

function findForm() {
  return document.querySelector('form') as HTMLFormElement
}

function submitEnabled() {
  const btn = document.querySelector('button[type="submit"]') as HTMLButtonElement
  return btn && !btn.disabled
}

describe('Contact form validation', () => {
  it('send is disabled until every field, intent and consent are complete', () => {
    renderContact()
    const form = findForm()
    expect(submitEnabled()).toBe(false)
    fill(form, {})
    expect(submitEnabled()).toBe(false) // still no intent
    pickIntent(form, 'buy')
    expect(submitEnabled()).toBe(false) // still no consent
    agree()
    expect(submitEnabled()).toBe(true)
  })

  it('phone must contain 7+ digits — letters no longer pass', () => {
    renderContact()
    const form = findForm()
    fill(form, { 'cf-phone': 'abcdefg' })
    pickIntent(form, 'buy')
    agree()
    expect(submitEnabled()).toBe(false)
    fill(form, { 'cf-phone': '0712 345 678' })
    expect(submitEnabled()).toBe(true)
  })

  it('email must be well-formed when provided', () => {
    renderContact()
    const form = findForm()
    fill(form, { 'cf-email': 'not-an-email' })
    pickIntent(form, 'buy')
    agree()
    expect(submitEnabled()).toBe(false)
    fill(form, { 'cf-email': 'a@b.co' })
    expect(submitEnabled()).toBe(true)
  })

  it('message shorter than 10 characters blocks sending', () => {
    renderContact()
    const form = findForm()
    fill(form, { 'cf-message': 'too short' })
    pickIntent(form, 'buy')
    agree()
    expect(submitEnabled()).toBe(false)
  })

  it('the hint alert only exists (and is referenced) while the form is invalid', () => {
    renderContact()
    const form = findForm()
    fill(form, { 'cf-name': 'x' })
    expect(document.querySelector('#cf-hint')).toBeTruthy()
    expect(form.querySelector('#cf-name')?.getAttribute('aria-describedby')).toBe('cf-hint')
    fill(form, {})
    pickIntent(form, 'buy')
    agree()
    expect(document.querySelector('#cf-hint')).toBeNull()
    expect(form.querySelector('#cf-name')?.getAttribute('aria-describedby')).toBeNull()
  })
})

describe('Contact intent pre-selection', () => {
  it('?intent=sell pre-selects the selling door', () => {
    const { container } = renderContact('/contact?intent=sell')
    const radio = container.querySelector('input[type="radio"][value="sell"]') as HTMLInputElement
    expect(radio.checked).toBe(true)
  })

  it('an unknown ?intent value falls back to no pre-selection', () => {
    const { container } = renderContact('/contact?intent=nonsense')
    const checked = container.querySelectorAll('input[type="radio"]:checked')
    expect(checked.length).toBe(0)
  })
})
