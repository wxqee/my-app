import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import {reactI18nextModule} from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en", // use en if detected lng is not available

    defaultNS: 'common', // this defines which namespace to use when no namespace is provided (to withTranslation, etc.)
    ns: ['common'], // this is the preloaded namespace when page first loads.
    fallbackNS: 'common',

    load: 'currentOnly', // setting to 'currentOnly' will avoid loading 'en' when current language is 'en-CN'

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
