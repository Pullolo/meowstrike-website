import neonCity from "../assets/env/neon-city.webp";
import regionHill from "../assets/env/region-hill.webp";
import regionMarket from "../assets/env/region-market.webp";
import regionMarsh from "../assets/env/region-marsh.webp";
import regionSky from "../assets/env/region-sky.webp";
import { SectionHeading } from "./Features";

const WORLDS = [
  { image: regionMarket, name: "Słoneczne Targowiska", big: true },
  { image: regionSky, name: "Podniebny Dwór", big: false },
  { image: regionMarsh, name: "Kryształowe Mokradła", big: false },
  { image: regionHill, name: "Świetliste Wzgórze", big: false },
  { image: neonCity, name: "Neonowe Miasto (Online)", big: false },
];

export function Worlds() {
  return (
    <section id="worlds" className="relative py-20 sm:py-28">
      <SectionHeading
        eyebrow="Eksploracja"
        title="Kraina zbudowana z gwiezdnego pyłu"
        body="Osiem regionów, każdy z własnym klimatem, bossem i przeciwnikami — a to dopiero początek mapy."
      />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 px-6 sm:grid-cols-3">
        {WORLDS.map((w) => (
          <div
            key={w.name}
            className={
              "group relative overflow-hidden rounded-2xl border border-white/8 " +
              (w.big ? "col-span-2 aspect-[16/9] sm:col-span-2" : "aspect-square sm:aspect-[4/5]")
            }
          >
            <img
              src={w.image}
              alt={w.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            <span className="absolute right-3 bottom-3 left-3 text-[13px] font-bold text-ink drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:text-[15px]">
              {w.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
