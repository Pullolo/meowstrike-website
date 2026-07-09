/**
 * Site-wide constants. Everything a future update to the release process
 * would touch lives here — swap these instead of hunting through components.
 */

/**
 * GitHub Releases "latest" always resolves to whatever tag is newest, so this
 * URL never needs to change when a new APK ships. Points at THIS site's own
 * repo (public), not the game's source repo (private, so its releases page
 * 404s for anyone without access) — publish the .apk as a Release here.
 */
export const APK_DOWNLOAD_URL =
  "https://github.com/Pullolo/meowstrike-website/releases/latest";

/** Direct link to the releases list (for players who want to see changelogs
 *  or grab an older build). */
export const RELEASES_URL =
  "https://github.com/Pullolo/meowstrike-website/releases";

export const SITE_TITLE = "Meow Strike";
