// @vitest-environment jsdom
/**
 * VideoFacade — the click-to-load YouTube tour. Contract:
 *  - BEFORE play: no iframe exists (no third-party request — the site's
 *    click-to-load privacy policy, disclosed on /privacy).
 *  - AFTER play: exactly one youtube-nocookie.com iframe with the video id,
 *    an accessible title, autoplay, and the fullscreen permission (the old
 *    sandbox without allow-same-origin broke playback in Safari and the
 *    missing `fullscreen` in `allow` blocked Chrome's fullscreen button).
 */
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import VideoFacade from '@/components/ui/VideoFacade'

afterEach(cleanup)

const props = {
  videoId: 'zDlefHy09pg',
  title: 'The Waterfront, Karen — Things To Do, Prices & Location',
  channel: 'Kyls Journal (YouTube)',
  poster: '/images/waterfront/wf-lake.jpg',
  posterAlt: 'The Waterfront Karen lake at dusk',
}

describe('VideoFacade — click-to-load YouTube embed', () => {
  it('renders only the poster facade before play (no iframe, no third-party request)', () => {
    render(<VideoFacade {...props} />)
    expect(document.querySelector('iframe')).toBeNull()
    expect(screen.getByRole('button', { name: /Play video: The Waterfront, Karen/i })).toBeTruthy()
    expect(screen.getByAltText(props.posterAlt)).toBeTruthy()
  })

  it('mounts the youtube-nocookie iframe with title, id and fullscreen permission on click', () => {
    render(<VideoFacade {...props} />)
    fireEvent.click(screen.getByRole('button', { name: /Play video/i }))
    const iframe = document.querySelector('iframe')
    expect(iframe).toBeTruthy()
    expect(iframe?.getAttribute('src')).toContain('youtube-nocookie.com/embed/zDlefHy09pg')
    expect(iframe?.getAttribute('src')).toContain('autoplay=1')
    expect(iframe?.getAttribute('title')).toBe(props.title)
    expect(iframe?.getAttribute('allow')).toContain('fullscreen')
    expect(iframe?.getAttribute('allowFullScreen')).not.toBeNull()
    // the opaque-origin sandbox broke YouTube playback in some browsers —
    // the facade must NOT sandbox the embed (the Maps embed made the same
    // call for the same reason)
    expect(iframe?.getAttribute('sandbox')).toBeNull()
  })
})
