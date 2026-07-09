import { ArrowRight, Download, Sparkles } from "lucide-react";
import arena from "../assets/env/arena.webp";
import icon from "../assets/brand/icon.png";
import logoGlow from "../assets/brand/logo-glow.png";
import { APK_DOWNLOAD_URL, SITE_TITLE } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Backdrop: blurred arena art + starfield + cosmic glow, all behind a
          heavy scrim so the foreground text stays perfectly readable. */}
      <div className="absolute inset-0 -z-20">
        <img
          src={arena}
          alt=""
          className="h-full w-full scale-110 object-cover opacity-25 blur-[2px]"
        />
      </div>
      <div className="starfield absolute inset-0 -z-10 opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/40 via-bg/85 to-bg" />
      <div
        className="absolute top-[-10%] left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-cosmic), transparent 70%)" }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="relative mb-4 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
          {/* Ambient nebula glow behind the mark — the game's own "cosmic
              backdrop" art, not the subject itself. */}
          <img
            src={logoGlow}
            alt=""
            className="animate-glow-pulse absolute inset-[-40%] h-[180%] w-[180%] object-contain opacity-80"
          />
          <img
            src={icon}
            alt={SITE_TITLE}
            className="animate-float relative h-24 w-24 rounded-[28px] object-cover shadow-[0_0_45px_-6px_rgba(245,184,61,0.55)] ring-1 ring-white/15 sm:h-28 sm:w-28"
          />
        </div>

        <div className="mb-5 flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-gold">
          <Sparkles size={13} />
          {t.hero.badge}
        </div>

        <h1 className="text-balance text-5xl leading-[1.05] font-bold tracking-tight text-ink sm:text-7xl">
          {SITE_TITLE}
        </h1>
        <p className="text-balance mt-5 max-w-xl text-lg text-ink-muted sm:text-xl">
          {t.hero.tagline}
        </p>
        <p className="text-balance mt-3 max-w-lg text-sm text-ink-muted/80 sm:text-base">
          {t.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 rounded-2xl bg-gold px-7 py-4 text-[15px] font-bold text-bg shadow-[0_10px_40px_-8px_var(--color-gold)] transition hover:brightness-110 active:scale-[0.98]"
          >
            <Download size={19} strokeWidth={2.5} />
            {t.hero.ctaDownload}
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
          <a
            href="#features"
            className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-[15px] font-semibold text-ink transition hover:border-white/20 hover:bg-white/10"
          >
            {t.hero.ctaFeatures}
          </a>
        </div>

        <p className="mt-5 text-xs text-ink-muted/70">
          {t.hero.installNote}
        </p>
      </div>
    </section>
  );
}
