import { Dices, Gem, Hammer, Map as MapIcon, Swords, Users } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  Icon: typeof MapIcon;
  color: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    Icon: MapIcon,
    color: "var(--color-fish)",
    title: "Kampania",
    body: "Dziesiątki misji w krainie pełnej gwiazd — od Słonecznych Targowisk po Kryształowe Mokradła. Turowe bitwy, bossowie regionów i rozwój drużyny 1→2→3 kotów.",
  },
  {
    Icon: Users,
    color: "var(--color-info)",
    title: "Coop online",
    body: "1–3 graczy, jeden kot na osobę. Wspólna kampania, Starcie Tygodnia i 5-etapowa Wyprawa Coop w jednym ciągłym meczu.",
  },
  {
    Icon: Swords,
    color: "var(--color-danger)",
    title: "Arena PvP",
    body: "Rankingowe 1v1, 2v2 i 3v3 z sezonowym Elo, albo towarzyski pokój niestandardowy — host sam ustala drużyny.",
  },
  {
    Icon: Dices,
    color: "var(--color-cosmic)",
    title: "Draft Bo3",
    body: "Losujesz postać, potem przedmiot, potem mityk — świeża drużyna przed każdą grą. Casualowo, bez rankingu, w składzie 1v1 do 3v3.",
  },
  {
    Icon: Gem,
    color: "var(--color-shard)",
    title: "Gacha i kolekcja",
    body: "Dziesiątki kotów o różnej rzadkości (1★–5★) i trzech archetypach — DPS, tank, wsparcie. Buduj kolekcję, która pasuje do Twojej taktyki.",
  },
  {
    Icon: Hammer,
    color: "var(--color-stardust)",
    title: "Kuźnia i runy",
    body: "Twórz i ulepszaj przedmioty w Kuźni, dopasuj strony run do buildu i wyciśnij z każdego kota maksimum.",
  },
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
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <SectionHeading
        eyebrow="Rozgrywka"
        title="Jedna gra, mnóstwo sposobów na granie"
        body="Solo w swoim tempie albo online z przyjaciółmi — kampania, coop, PvP i draft żyją w jednym save'ie."
      />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
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
