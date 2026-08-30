import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  // node env default; DOM-dependent tests opt in with `// @vitest-environment jsdom`
  test: { environment: 'node' },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
