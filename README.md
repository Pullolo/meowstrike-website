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

**Private-repo caveat:** GitHub Pages only serves out of a private repository
on paid plans (Pro / Team / Enterprise) — on the Free plan, Pages requires a
**public** repository. If this repo stays private on a Free account, either
upgrade the plan or make this repo public — there's no game source in here
(only the marketing site + copied art), so publicity is low-stakes, but it's
your call.

## Updating the download link

`src/config.ts` → `APK_DOWNLOAD_URL`. It's already pointed at
`github.com/Pullolo/meowstrike/releases/latest`, which auto-resolves to
whatever tag is newest — no edits needed when a new APK ships, unless the
release repo/URL changes.

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
