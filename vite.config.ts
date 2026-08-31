import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  // Default to the GitHub Pages subpath; Netlify sets VITE_BASE=/ via
  // netlify.toml so the same repo deploys correctly to either host
  // (previously the base was hardcoded, so a Netlify deploy 404'd every asset).
  base: process.env.VITE_BASE ?? '/chacadom/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
