import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: {
        "es-ES": ["es", "en"],
        es: ["en"],
        fr: ["en"],
        pt: ["en"],
        "de-DE": ["en"],
        "hu-HU": ["en"],
        "ru-RU": ["en"],
        "uk-UA": ["en"],
        "it-IT": ["en"],
        "ar-SA": ["en"],
        default: ["en"],
      },
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;