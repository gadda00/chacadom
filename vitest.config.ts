import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  // node env default; DOM-dependent tests opt in with `// @vitest-environment jsdom`
  test: {
    environment: 'node',
    // jsdom lacks IntersectionObserver/ResizeObserver/matchMedia — the mocks
    // let framer-motion pages mount in component tests
    setupFiles: ['src/test/setup.ts'],
  },
  // import.meta.dirname avoids the deprecated __dirname escape that forces
  // Vite's legacy config loader (warning under Vite 8).
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
})
