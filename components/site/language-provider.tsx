"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const languages = [
  { code: "en", name: "English", shortName: "EN", dir: "ltr" },
  { code: "ar", name: "العربية", shortName: "ع", dir: "rtl" },
  { code: "tr", name: "Türkçe", shortName: "TR", dir: "ltr" },
  { code: "id", name: "Bahasa Indonesia", shortName: "ID", dir: "ltr" },
  { code: "ms", name: "Bahasa Melayu", shortName: "MY", dir: "ltr" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "marhaba-language";
const GOOGLE_SCRIPT_ID = "google-translate-script";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: Record<string, unknown>,
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

function translationCookie(language: LanguageCode) {
  return language === "en" ? "/en/en" : `/en/${language}`;
}

function setGoogleCookie(language: LanguageCode) {
  const value = translationCookie(language);
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `googtrans=${value};path=/;max-age=${maxAge};SameSite=Lax`;

  // Google also checks the parent-domain cookie on production domains.
  const hostParts = window.location.hostname.split(".");
  if (hostParts.length > 1 && window.location.hostname !== "localhost") {
    const domain = `.${hostParts.slice(-2).join(".")}`;
    document.cookie = `googtrans=${value};path=/;domain=${domain};max-age=${maxAge};SameSite=Lax`;
  }
}

function updateDocumentLanguage(language: LanguageCode) {
  const selected = languages.find((item) => item.code === language)!;
  document.documentElement.lang = language;
  document.documentElement.dir = selected.dir;
  document.body.dir = selected.dir;
  document.body.classList.toggle("is-rtl", selected.dir === "rtl");
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const browserLanguage = window.navigator.language.split("-")[0];
    const initial = isLanguageCode(saved)
      ? saved
      : isLanguageCode(browserLanguage)
      ? browserLanguage
      : "en";

    setLanguageState(initial);
    setGoogleCookie(initial);
    updateDocumentLanguage(initial);

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const mount = document.getElementById("google_translate_element");
      if (mount && !mount.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ar,tr,id,ms",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
      setReady(true);
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    } else if (!document.getElementById(GOOGLE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = GOOGLE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => setReady(true);
      document.head.appendChild(script);
    }

    // The selector is usable immediately; translation loads in the background.
    const fallback = window.setTimeout(() => setReady(true), 2500);
    return () => window.clearTimeout(fallback);
  }, []);

  const setLanguage = useCallback(
    (nextLanguage: LanguageCode) => {
      if (nextLanguage === language) return;

      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      setGoogleCookie(nextLanguage);
      updateDocumentLanguage(nextLanguage);

      const googleSelect = document.querySelector<HTMLSelectElement>(
        ".goog-te-combo"
      );

      // Returning to English requires clearing Google's translated DOM, so a
      // reload is the most reliable option. The same fallback handles a slow
      // or blocked translation script.
      if (nextLanguage === "en" || !googleSelect) {
        window.location.reload();
        return;
      }

      googleSelect.value = nextLanguage;
      googleSelect.dispatchEvent(new Event("change", { bubbles: true }));
      setLanguageState(nextLanguage);
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, ready }),
    [language, setLanguage, ready]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <div
        id="google_translate_element"
        className="google-translate-mount"
        aria-hidden="true"
      />
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
