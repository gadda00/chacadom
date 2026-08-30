import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
interface State {
  error: Error | null
}

/** Catches render errors so a single component fault can't white-screen the site. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[Chacadom] Render error captured:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-5xl font-bold gold-text">Something went wrong</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            An unexpected error occurred. Reloading usually resolves it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => window.location.reload()} className="btn-gold">Reload page</button>
            <a href={import.meta.env.BASE_URL} className="btn-outline">Back to home</a>
          </div>
          <p className="mt-6 max-w-lg truncate rounded-lg bg-cream px-3 py-2 font-mono text-[11px] text-ink-muted" role="note">
            {this.state.error.message}
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
