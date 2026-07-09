import { Download } from "lucide-react";
import icon from "../assets/brand/icon.png";
import { APK_DOWNLOAD_URL, SITE_TITLE } from "../config";
import { GithubMark } from "./icons/GithubMark";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={icon}
            alt=""
            className="h-8 w-8 rounded-xl shadow-[0_0_18px_-4px_var(--color-gold)]"
          />
          <span className="text-[15px] font-semibold tracking-wide text-ink">{SITE_TITLE}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-muted sm:flex">
          <a href="#features" className="transition hover:text-ink">
            Rozgrywka
          </a>
          <a href="#roster" className="transition hover:text-ink">
            Koty
          </a>
          <a href="#worlds" className="transition hover:text-ink">
            Światy
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
        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[13px] font-bold text-bg shadow-[0_0_20px_-4px_var(--color-gold)] transition hover:brightness-110 active:scale-95"
        >
          <Download size={15} strokeWidth={2.5} />
          Pobierz
        </a>
      </div>
    </header>
  );
}
