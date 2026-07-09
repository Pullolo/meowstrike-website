export type Lang = "en" | "pl";

export const LANGS: Lang[] = ["en", "pl"];

export interface FeatureCopy {
  title: string;
  body: string;
}

export interface StepCopy {
  title: string;
  body: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    roster: string;
    worlds: string;
    download: string;
  };
  hero: {
    badge: string;
    tagline: string;
    subtitle: string;
    ctaDownload: string;
    ctaFeatures: string;
    installNote: string;
  };
  features: {
    eyebrow: string;
    title: string;
    body: string;
    items: FeatureCopy[];
  };
  roster: {
    eyebrow: string;
    title: string;
    body: string;
  };
  archetype: {
    dps: string;
    tank: string;
    support: string;
  };
  catNames: Record<string, string>;
  worlds: {
    eyebrow: string;
    title: string;
    body: string;
    names: Record<string, string>;
  };
  download: {
    title: string;
    body: string;
    cta: string;
    steps: StepCopy[];
  };
  footer: {
    releases: string;
    note: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    meta: {
      title: "Meow Strike — download the game for Android",
      description:
        "Gather a team of cosmic cats and head for the stars together. Turn-based battles, campaign, coop and PvP online. Download Meow Strike free for Android.",
    },
    nav: {
      features: "Gameplay",
      roster: "Cats",
      worlds: "Worlds",
      download: "Download",
    },
    hero: {
      badge: "Free game for Android",
      tagline: "Gather a team of cats. Set out on an adventure together.",
      subtitle:
        "Build a team of cosmic cats, fight turn-based battles solo and online, and explore a land full of stars — campaign, coop, PvP arena and 1v1–3v3 draft.",
      ctaDownload: "Download .apk for Android",
      ctaFeatures: "See what's inside",
      installNote:
        'Installed outside the Play Store — Android will show an "install from unknown source" confirmation the first time you run the file.',
    },
    features: {
      eyebrow: "Gameplay",
      title: "One game, tons of ways to play",
      body: "Solo at your own pace or online with friends — campaign, coop, PvP and draft all live in one save.",
      items: [
        {
          title: "Campaign",
          body: "Dozens of missions across a land full of stars — from the Sunlit Markets to the Crystal Marshes. Turn-based battles, regional bosses, and a team that grows from 1→2→3 cats.",
        },
        {
          title: "Online coop",
          body: "1–3 players, one cat each. A shared campaign, the Weekly Clash, and a 5-stage Coop Expedition in one continuous match.",
        },
        {
          title: "PvP arena",
          body: "Ranked 1v1, 2v2 and 3v3 with seasonal Elo, or a casual custom room — the host sets the teams.",
        },
        {
          title: "Bo3 draft",
          body: "Draft a character, then an item, then a mythic — a fresh team before every game. Casual, unranked, from 1v1 up to 3v3.",
        },
        {
          title: "Gacha and collection",
          body: "Dozens of cats across different rarities (1★–5★) and three archetypes — DPS, tank, support. Build a collection that fits your tactics.",
        },
        {
          title: "Forge and runes",
          body: "Craft and upgrade gear at the Forge, tune rune pages to your build, and squeeze the most out of every cat.",
        },
      ],
    },
    roster: {
      eyebrow: "Meet the team",
      title: "Dozens of cats to collect",
      body: "Every cat is a different archetype, skill set and personality — from armored tanks to lightning-fast DPS and feline support. Build a team that fits your style.",
    },
    archetype: {
      dps: "DPS",
      tank: "Tank",
      support: "Support",
    },
    catNames: {
      "Królowa Aurelia": "Queen Aurelia",
    },
    worlds: {
      eyebrow: "Exploration",
      title: "A land built from stardust",
      body: "Eight regions, each with its own mood, boss and enemies — and that's just the start of the map.",
      names: {
        "Słoneczne Targowiska": "Sunlit Markets",
        "Podniebny Dwór": "Skyborne Court",
        "Kryształowe Mokradła": "Crystal Marshes",
        "Świetliste Wzgórze": "Radiant Hill",
        "Neonowe Miasto (Online)": "Neon City (Online)",
      },
    },
    download: {
      title: "Your team of cats is waiting",
      body: "Free, no account required (though an account keeps your progress across devices). Install in under a minute and jump in.",
      cta: "Download Meow Strike (.apk)",
      steps: [
        {
          title: "1. Download the .apk file",
          body: "Click the button below — you'll land on the GitHub releases page with the latest version of the game.",
        },
        {
          title: "2. Allow the install",
          body: "Android will ask for permission to install from outside the Play Store — confirm it for this one file.",
        },
        {
          title: "3. Install and play",
          body: "Open the downloaded file, install it, and launch Meow Strike. Done — see you in the Cat Galaxy!",
        },
      ],
    },
    footer: {
      releases: "Release history",
      note: "Solo-developed game. Installed outside the Play Store — the .apk comes straight from the GitHub repository.",
    },
  },
  pl: {
    meta: {
      title: "Meow Strike — pobierz grę na Androida",
      description:
        "Zbierz drużynę kosmicznych kotów i ruszcie razem w gwiazdy. Turowe bitwy, kampania, coop i PvP online. Pobierz Meow Strike za darmo na Androida.",
    },
    nav: {
      features: "Rozgrywka",
      roster: "Koty",
      worlds: "Światy",
      download: "Pobierz",
    },
    hero: {
      badge: "Darmowa gra na Androida",
      tagline: "Zbierz drużynę kotów. Ruszcie razem w przygodę.",
      subtitle:
        "Buduj drużynę kosmicznych kotów, walcz w turowych bitwach solo i online, i eksploruj krainę pełną gwiazd — kampania, coop, arena PvP i draft 1v1–3v3.",
      ctaDownload: "Pobierz .apk na Androida",
      ctaFeatures: "Zobacz co w środku",
      installNote:
        'Instalacja poza sklepem Play — Android włączy potwierdzenie „zainstaluj z nieznanego źródła" przy pierwszym uruchomieniu pliku.',
    },
    features: {
      eyebrow: "Rozgrywka",
      title: "Jedna gra, mnóstwo sposobów na granie",
      body: "Solo w swoim tempie albo online z przyjaciółmi — kampania, coop, PvP i draft żyją w jednym save'ie.",
      items: [
        {
          title: "Kampania",
          body: "Dziesiątki misji w krainie pełnej gwiazd — od Słonecznych Targowisk po Kryształowe Mokradła. Turowe bitwy, bossowie regionów i rozwój drużyny 1→2→3 kotów.",
        },
        {
          title: "Coop online",
          body: "1–3 graczy, jeden kot na osobę. Wspólna kampania, Starcie Tygodnia i 5-etapowa Wyprawa Coop w jednym ciągłym meczu.",
        },
        {
          title: "Arena PvP",
          body: "Rankingowe 1v1, 2v2 i 3v3 z sezonowym Elo, albo towarzyski pokój niestandardowy — host sam ustala drużyny.",
        },
        {
          title: "Draft Bo3",
          body: "Losujesz postać, potem przedmiot, potem mityk — świeża drużyna przed każdą grą. Casualowo, bez rankingu, w składzie 1v1 do 3v3.",
        },
        {
          title: "Gacha i kolekcja",
          body: "Dziesiątki kotów o różnej rzadkości (1★–5★) i trzech archetypach — DPS, tank, wsparcie. Buduj kolekcję, która pasuje do Twojej taktyki.",
        },
        {
          title: "Kuźnia i runy",
          body: "Twórz i ulepszaj przedmioty w Kuźni, dopasuj strony run do buildu i wyciśnij z każdego kota maksimum.",
        },
      ],
    },
    roster: {
      eyebrow: "Poznaj drużynę",
      title: "Dziesiątki kotów do zebrania",
      body: "Każdy kot to inny archetyp, zestaw umiejętności i osobowość — od pancernych tanków po błyskawiczne DPS-y i kocie wsparcie. Zbuduj drużynę, która pasuje do Twojego stylu.",
    },
    archetype: {
      dps: "DPS",
      tank: "Tank",
      support: "Wsparcie",
    },
    catNames: {},
    worlds: {
      eyebrow: "Eksploracja",
      title: "Kraina zbudowana z gwiezdnego pyłu",
      body: "Osiem regionów, każdy z własnym klimatem, bossem i przeciwnikami — a to dopiero początek mapy.",
      names: {},
    },
    download: {
      title: "Twoja drużyna kotów czeka",
      body: "Za darmo, bez konta (choć konto trzyma postęp między urządzeniami). Zainstaluj w niecałą minutę i wejdź do gry.",
      cta: "Pobierz Meow Strike (.apk)",
      steps: [
        {
          title: "1. Pobierz plik .apk",
          body: "Kliknij przycisk poniżej — trafisz na stronę wydań na GitHubie z najnowszą wersją gry.",
        },
        {
          title: "2. Zezwól na instalację",
          body: "Android zapyta o zgodę na instalację spoza Sklepu Play — potwierdź dla tego jednego pliku.",
        },
        {
          title: "3. Zainstaluj i graj",
          body: "Otwórz pobrany plik, zainstaluj i uruchom Meow Strike. Gotowe — do zobaczenia w Kotlinie Gwiazd!",
        },
      ],
    },
    footer: {
      releases: "Historia wydań",
      note: "Gra rozwijana solo. Instalacja poza Sklepem Play — plik .apk pochodzi bezpośrednio z repozytorium na GitHubie.",
    },
  },
};
