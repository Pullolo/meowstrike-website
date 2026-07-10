import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANGS, TRANSLATIONS, type Lang, type Translation } from "./translations";

const STORAGE_KEY = "ms_lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pl") return stored;

  const browserLangs = window.navigator.languages ?? [window.navigator.language];
  const prefersPolish = browserLangs.some((l) => l.toLowerCase().startsWith("pl"));
  return prefersPolish ? "pl" : "en";
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    const t = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", t.meta.description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", lang === "pl" ? "pl_PL" : "en_US");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", t.meta.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", t.meta.description);
  }, [lang]);

  const setLang = (next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  };

  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export { LANGS };
