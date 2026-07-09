import { ARCHETYPE_COLOR, ARCHETYPE_LABEL, SHOWCASE_CATS, type ShowcaseCat } from "../data/characters";

function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: stars }, (_, i) => (
        <span key={i} className="text-[11px] leading-none text-gold">
          ★
        </span>
      ))}
    </div>
  );
}

function CatCard({ cat }: { cat: ShowcaseCat }) {
  const accent = ARCHETYPE_COLOR[cat.archetype];
  return (
    <div
      className="group relative mx-2.5 flex w-36 shrink-0 flex-col items-center gap-2.5 rounded-2xl border border-white/8 bg-surface/60 p-4 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 sm:w-40"
      style={{ boxShadow: `0 0 0 1px transparent` }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-30"
        style={{ background: accent }}
      />
      <div
        className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 sm:h-24 sm:w-24"
        style={{ borderColor: accent + "88", background: accent + "14" }}
      >
        <img src={cat.image} alt={cat.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="relative flex flex-col items-center gap-1">
        <span className="text-center text-[13px] leading-tight font-semibold text-ink">
          {cat.name}
        </span>
        <StarRow stars={cat.stars} />
        <span
          className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide"
          style={{ color: accent, backgroundColor: accent + "1c" }}
        >
          {ARCHETYPE_LABEL[cat.archetype]}
        </span>
      </div>
    </div>
  );
}

/** Seamless infinite scroll: the track is the roster twice back-to-back,
 *  animated exactly -50% so the loop point is invisible. Hover pauses it —
 *  handy for actually reading a card. */
export function CharacterMarquee() {
  const track = [...SHOWCASE_CATS, ...SHOWCASE_CATS];
  return (
    <section id="roster" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-cosmic uppercase">
          Poznaj drużynę
        </span>
        <h2 className="text-balance mt-3 text-3xl font-bold text-ink sm:text-4xl">
          Dziesiątki kotów do zebrania
        </h2>
        <p className="text-balance mt-4 text-ink-muted">
          Każdy kot to inny archetyp, zestaw umiejętności i osobowość — od pancernych tanków po
          błyskawiczne DPS-y i kocie wsparcie. Zbuduj drużynę, która pasuje do Twojego stylu.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />
        <div className="animate-marquee flex w-max py-2 hover:[animation-play-state:paused]">
          {track.map((cat, i) => (
            <CatCard key={`${cat.id}-${i}`} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
