"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import ptBR from "@/src/languages/pt-BR.json";
import enCA from "@/src/languages/en-CA.json";

type Locale = "pt-BR" | "en-CA";

type Messages = typeof ptBR;

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (next: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("mpe:locale") as Locale | null) : null;
    if (stored === "pt-BR" || stored === "en-CA") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("mpe:locale", next);
      // Update document lang attribute for accessibility
      document.documentElement.lang = next;
    }
  };

  const messages = useMemo(() => (locale === "en-CA" ? enCA : ptBR), [locale]);

  const value = useMemo(() => ({ locale, messages, setLocale }), [locale, messages]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

