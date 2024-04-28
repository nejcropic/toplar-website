// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // For loading translations over a network
import LanguageDetector from "i18next-browser-languagedetector"; // For detecting user language

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpBackend) // loads translations using http (e.g., from public/locales folder)
  .use(LanguageDetector) // detects user language
  .init({
    fallbackLng: "si", // use en if detected lng is not available

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: true,

    // path to the translation files
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    detection: {
      order: ["queryString", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
