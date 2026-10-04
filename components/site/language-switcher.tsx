"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  languages,
  LanguageCode,
  useLanguage,
} from "@/components/site/language-provider";

type LanguageSwitcherProps = {
  inverted?: boolean;
  mobile?: boolean;
};

export default function LanguageSwitcher({
  inverted = false,
  mobile = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = languages.find((item) => item.code === language)!;
  const accessibleLabel: Record<LanguageCode, string> = {
    en: "Choose language",
    ar: "اختر اللغة",
    tr: "Dil seçin",
    id: "Pilih bahasa",
    ms: "Pilih bahasa",
  };

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const choose = (code: LanguageCode) => {
    setOpen(false);
    setLanguage(code);
  };

  return (
    <div ref={rootRef} className={cn("notranslate relative", mobile && "w-full")} translate="no">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition-colors",
          mobile && "w-full h-11 rounded-xl justify-between px-4",
          inverted
            ? "border-white/25 text-white hover:bg-white/10"
            : "border-border bg-background/80 text-foreground hover:bg-muted"
        )}
        aria-label={accessibleLabel[language]}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <span className={cn(!mobile && "hidden 2xl:inline")}>{selected.name}</span>
          <span className={cn("2xl:hidden", mobile && "hidden")}>{selected.shortName}</span>
        </span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute top-[calc(100%+8px)] z-[90] min-w-[210px] overflow-hidden rounded-2xl border border-border bg-background p-1.5 text-foreground shadow-2xl",
              mobile ? "inset-x-0" : "right-0 rtl:right-auto rtl:left-0"
            )}
            role="listbox"
            aria-label="Languages"
          >
            {languages.map((item) => (
              <button
                type="button"
                key={item.code}
                onClick={() => choose(item.code)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-muted",
                  item.code === language && "bg-emerald/10 text-emerald"
                )}
                role="option"
                aria-selected={item.code === language}
                lang={item.code}
                dir={item.dir}
              >
                <span>{item.name}</span>
                {item.code === language && <Check className="h-4 w-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
