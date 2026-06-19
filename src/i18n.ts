import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

// English ships now. To add Swahili later: drop in src/locales/sw.json with the
// same key structure, add it to `resources` below, and wire up a language switcher.
export const resources = {
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;
