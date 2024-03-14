
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translation/en/en.json'
import arTranslation from './translation/ar/ar.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      // Add more languages as needed
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;