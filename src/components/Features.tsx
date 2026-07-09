import { Dices, Gem, Hammer, Map as MapIcon, Swords, Users } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface Feature {
  Icon: typeof MapIcon;
  color: string;
  title: string;
  body: string;
}

const FEATURE_ICONS = [
  { Icon: MapIcon, color: "var(--color-fish)" },
  { Icon: Users, color: "var(--color-info)" },
  { Icon: Swords, color: "var(--color-danger)" },
  { Icon: Dices, color: "var(--color-cosmic)" },
  { Icon: Gem, color: "var(--color-shard)" },
  { Icon: Hammer, color: "var(--color-stardust)" },
];

function FeatureCard({ Icon, color, title, body }: Feature) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-25"
        style={{ background: color }}
      />
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: color + "1c", color }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{body}</p>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const features: Feature[] = t.features.items.map((item, i) => ({
    ...FEATURE_ICONS[i],
    title: item.title,
    body: item.body,
  }));

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <SectionHeading
        eyebrow={t.features.eyebrow}
        title={t.features.title}
        body={t.features.body}
      />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 text-center">
      <span className="text-xs font-bold tracking-[0.2em] text-cosmic uppercase">{eyebrow}</span>
      <h2 className="text-balance mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      <p className="text-balance mt-4 text-ink-muted">{body}</p>
    </div>
  );
}
