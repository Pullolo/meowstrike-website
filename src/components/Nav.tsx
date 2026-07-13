import { Download } from "lucide-react";
import icon from "../assets/brand/icon.png";
import { APK_DOWNLOAD_URL, SITE_TITLE } from "../config";
import { LANGS, useLanguage } from "../i18n/LanguageContext";
import { GithubMark } from "./icons/GithubMark";

function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px] font-bold">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-current={lang === l}
          className={
            "rounded-full px-2 py-1 uppercase transition " +
            (lang === l ? "bg-gold text-bg" : "text-ink-muted hover:text-ink")
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/** `homePath` lets pages other than the homepage (e.g. the privacy policy
 *  page, which lives one directory down) point these anchors back at the
 *  homepage's sections instead of a same-page hash that doesn't exist there. */
export function Nav({ homePath = "" }: { homePath?: string }) {
  const { t } = useLanguage();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href={`${homePath}#top`} className="flex items-center gap-2.5">
          <img
            src={icon}
            alt=""
            className="h-8 w-8 rounded-xl shadow-[0_0_18px_-4px_var(--color-gold)]"
          />
          <span className="text-[15px] font-semibold tracking-wide text-ink">{SITE_TITLE}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-muted sm:flex">
          <a href={`${homePath}#features`} className="transition hover:text-ink">
            {t.nav.features}
          </a>
          <a href={`${homePath}#roster`} className="transition hover:text-ink">
            {t.nav.roster}
          </a>
          <a href={`${homePath}#worlds`} className="transition hover:text-ink">
            {t.nav.worlds}
          </a>
          <a
            href="https://github.com/Pullolo/meowstrike"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition hover:text-ink"
          >
            <GithubMark size={15} />
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[13px] font-bold text-bg shadow-[0_0_20px_-4px_var(--color-gold)] transition hover:brightness-110 active:scale-95"
          >
            <Download size={15} strokeWidth={2.5} />
            {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
