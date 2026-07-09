import icon from "../assets/brand/icon.png";
import { RELEASES_URL, SITE_TITLE } from "../config";
import { GithubMark } from "./icons/GithubMark";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <img src={icon} alt="" className="h-7 w-7 rounded-lg" />
          <span className="text-sm font-semibold text-ink">{SITE_TITLE}</span>
        </div>
        <div className="flex items-center gap-6 text-[13px] text-ink-muted">
          <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            Historia wydań
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
        <p className="text-[12px] text-ink-muted/70">
          Gra rozwijana solo. Instalacja poza Sklepem Play — plik .apk pochodzi bezpośrednio z
          repozytorium na GitHubie.
        </p>
      </div>
    </footer>
  );
}
