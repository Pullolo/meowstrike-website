import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative asset paths (`base: './'`) so the built site works whether it's
// served at a GitHub Pages project path (username.github.io/repo/) or a
// custom domain root — no repo-name coupling in the build output.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
