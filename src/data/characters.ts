import aurelia from "../assets/characters/aurelia.webp";
import beryl from "../assets/characters/beryl.webp";
import celestia from "../assets/characters/celestia.webp";
import eon from "../assets/characters/eon.webp";
import nebula from "../assets/characters/nebula.webp";
import nyxara from "../assets/characters/nyxara.webp";
import opal from "../assets/characters/opal.webp";
import runa from "../assets/characters/runa.webp";
import selen from "../assets/characters/selen.webp";
import umbra from "../assets/characters/umbra.webp";
import vespera from "../assets/characters/vespera.webp";
import wega from "../assets/characters/wega.webp";

export type Archetype = "dps" | "tank" | "support";

export interface ShowcaseCat {
  id: string;
  name: string;
  stars: number;
  archetype: Archetype;
  image: string;
}

/** A curated slice of the roster (in-game character data) for the marquee —
 *  every 5★ plus a few standout 4★s, spanning all three archetypes. */
export const SHOWCASE_CATS: ShowcaseCat[] = [
  { id: "celestia", name: "Celestia", stars: 5, archetype: "tank", image: celestia },
  { id: "eon", name: "Eon", stars: 5, archetype: "support", image: eon },
  { id: "aurelia", name: "Królowa Aurelia", stars: 5, archetype: "support", image: aurelia },
  { id: "nebula", name: "Nebula", stars: 5, archetype: "dps", image: nebula },
  { id: "nyxara", name: "Nyxara", stars: 5, archetype: "dps", image: nyxara },
  { id: "wega", name: "Wega", stars: 5, archetype: "dps", image: wega },
  { id: "vespera", name: "Vespera", stars: 5, archetype: "support", image: vespera },
  { id: "opal", name: "Opal", stars: 5, archetype: "support", image: opal },
  { id: "beryl", name: "Beryl", stars: 4, archetype: "tank", image: beryl },
  { id: "umbra", name: "Umbra", stars: 4, archetype: "dps", image: umbra },
  { id: "selen", name: "Selen", stars: 4, archetype: "support", image: selen },
  { id: "runa", name: "Runa", stars: 4, archetype: "dps", image: runa },
];

export const ARCHETYPE_LABEL: Record<Archetype, string> = {
  dps: "DPS",
  tank: "Tank",
  support: "Wsparcie",
};

export const ARCHETYPE_COLOR: Record<Archetype, string> = {
  dps: "#ff5c5c",
  tank: "#3b82f6",
  support: "#3fb66b",
};
