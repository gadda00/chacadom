// @vitest-environment jsdom
/**
 * Footer newsletter capture — email validation, on-device dedupe and the
 * confirmation state. window.location.href is stubbed because jsdom does not
 * implement mailto navigation.
 */
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Footer from '@/components/layout/Footer'

const originalLocation = window.location

beforeEach(() => {
  localStorage.clear()
  // jsdom throws "Not implemented: navigation" on mailto: assignment
  Object.defineProperty(window, 'location', {
    value: { href: '' } as unknown as Location,
    writable: true,
  })
})

afterEach(() => {
  Object.defineProperty(window, 'location', { value: originalLocation })
  localStorage.clear()
  cleanup()
  vi.restoreAllMocks()
})

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

function fillEmail(value: string) {
  const input = screen.getByLabelText('Email address') as HTMLInputElement
  fireEvent.change(input, { target: { value } })
  return input
}

describe('Footer newsletter capture', () => {
  it('subscribe stays disabled until the email is valid', () => {
    renderFooter()
    const button = screen.getByRole('button', { name: 'Subscribe' }) as HTMLButtonElement
    expect(button.disabled).toBe(true)
    fillEmail('not-an-email')
    expect(button.disabled).toBe(true)
    fillEmail('reader@example.com')
    expect(button.disabled).toBe(false)
  })

  it('submitting records the address on-device (lower-cased, deduped) and confirms', () => {
    renderFooter()
    fillEmail('Reader@Example.com')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    const list = JSON.parse(localStorage.getItem('chacadom:newsletter') ?? '[]')
    expect(list).toEqual(['reader@example.com'])
    expect(screen.getByText(/Saved on this device — press Send in your email app/)).toBeTruthy()
  })

  it('re-submitting the same address does not duplicate the entry', () => {
    localStorage.setItem('chacadom:newsletter', JSON.stringify(['reader@example.com']))
    renderFooter()
    fillEmail('reader@example.com')
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    const list = JSON.parse(localStorage.getItem('chacadom:newsletter') ?? '[]')
    expect(list).toEqual(['reader@example.com'])
  })

  it('survives corrupted storage without throwing (graceful catch)', () => {
    localStorage.setItem('chacadom:newsletter', '{broken json')
    renderFooter()
    fillEmail('new@example.com')
    expect(() => fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))).not.toThrow()
    expect(screen.getByText(/Saved on this device/)).toBeTruthy()
  })
})
