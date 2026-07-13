import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative asset paths (`base: './'`) so the built site works whether it's
// served at a GitHub Pages project path (username.github.io/repo/) or a
// custom domain root — no repo-name coupling in the build output.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Multi-page build: the privacy policy lives at its own real
      // `/privacy-policy/` HTML file (not a client-side route), so it works
      // on GitHub Pages' static hosting without a server-side rewrite.
      input: {
        main: resolve(__dirname, 'index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
      },
    },
  },
})
