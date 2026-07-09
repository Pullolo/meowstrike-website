# Meow Strike — download site

A static landing page whose only job is to explain the game in one scroll and
get players to the `.apk`. React + TypeScript + Tailwind CSS v4, built with
Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # → dist/
npm run preview # serve dist/ locally to sanity-check the production build
```

`vite.config.ts` sets `base: './'` (relative asset paths), so the build works
unmodified whether it ends up at a GitHub Pages **project** path
(`username.github.io/repo-name/`) or a custom domain root — no repo-name
hardcoded anywhere.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to
`main`. One-time setup in the repo: **Settings → Pages → Source → GitHub
Actions**. After that, pushing to `main` is the whole deploy.

This repo (`meowstrike-website`) is public — required for GitHub Pages on the
Free plan (private repos need Pro/Team/Enterprise to serve Pages).

## Publishing a new APK

The main game repo (`meowstrike`) is **private**, so its Releases page 404s
for players. The download button instead points at **this** repo's Releases
(`src/config.ts` → `APK_DOWNLOAD_URL`, already set to
`github.com/Pullolo/meowstrike-website/releases/latest`) — publish each new
build here:

1. GitHub → this repo → **Releases → Draft a new release**.
2. Tag it (e.g. `v1.2.0`), attach the built `.apk`.
3. Publish. `/releases/latest` picks it up automatically — no site edits, no
   redeploy needed.

## Refreshing game assets

Character portraits, environment art and the app icon are copied from the
main game repo and **re-compressed for web display sizes** (they're full game
assets, several hundred KB each — nothing here is displayed anywhere near that
large). If you swap in new art, resize it the same way before copying it in,
or the bundle balloons:

```bash
npm install -D --no-save sharp
node -e "
  const sharp = require('sharp');
  sharp('path/to/source.webp')
    .resize({ width: 240 })            // portraits: ~240px; env art: ~960px
    .webp({ quality: 78 })
    .toFile('src/assets/characters/name.webp');
"
npm uninstall sharp
```

Source assets live in the main game repo under `src/assets/content/`
(characters, environments) and `src/assets/images/` (brand: icon, logo-glow).
