import { Download, FolderDown, ShieldCheck, Smartphone } from "lucide-react";
import appIcon from "../assets/brand/icon.png";
import { APK_DOWNLOAD_URL } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

const STEP_ICONS = [Download, ShieldCheck, Smartphone];

export function DownloadCta() {
  const { t } = useLanguage();
  const steps = t.download.steps.map((step, i) => ({ ...step, Icon: STEP_ICONS[i] }));
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 65%)" }}
      />
      <div className="starfield absolute inset-0 -z-20 opacity-40" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <img
          src={appIcon}
          alt="Meow Strike"
          className="mb-6 h-20 w-20 rounded-3xl shadow-[0_0_50px_-10px_var(--color-gold)]"
        />
        <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
          {t.download.title}
        </h2>
        <p className="text-balance mt-4 max-w-lg text-ink-muted">{t.download.body}</p>
        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 flex items-center gap-2.5 rounded-2xl bg-gold px-8 py-4 text-[15px] font-bold text-bg shadow-[0_10px_40px_-8px_var(--color-gold)] transition hover:brightness-110 active:scale-[0.98]"
        >
          <FolderDown size={19} strokeWidth={2.5} />
          {t.download.cta}
        </a>

        <div className="mt-16 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {steps.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/8 bg-surface/50 p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Icon size={18} />
              </div>
              <h3 className="text-[14px] font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
