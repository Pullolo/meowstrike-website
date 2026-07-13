import icon from "../assets/brand/icon.png";
import { RELEASES_URL, SITE_TITLE } from "../config";
import { useLanguage } from "../i18n/LanguageContext";
import { GithubMark } from "./icons/GithubMark";

/** `privacyHref` defaults to the homepage's link out to the privacy policy
 *  page; the privacy page itself overrides it to link back to the homepage. */
export function Footer({ privacyHref = "./privacy-policy/" }: { privacyHref?: string }) {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <img src={icon} alt="" className="h-7 w-7 rounded-lg" />
          <span className="text-sm font-semibold text-ink">{SITE_TITLE}</span>
        </div>
        <div className="flex items-center gap-6 text-[13px] text-ink-muted">
          <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            {t.footer.releases}
          </a>
          <a href={privacyHref} className="transition hover:text-ink">
            {t.footer.privacy}
          </a>
          <a
            href="https://github.com/Pullolo/meowstrike"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition hover:text-ink"
          >
            <GithubMark size={14} />
            GitHub
          </a>
        </div>
        <p className="text-[12px] text-ink-muted/70">{t.footer.note}</p>
      </div>
    </footer>
  );
}
