import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appName: "Metropolis Underground",
      tagline: "Move smarter through the city",
      getApp: "Get the app",
      contact: "Contact us",
      email: "info@mu.com",
      phone: "+1-2345-6789",
      address: "123 Ave, New York, USA",
      rights: "© 2026 Metropolis Underground. All rights reserved."
    }
  },
  es: {
    translation: {
      appName: "Metropolis Underground",
      tagline: "Muévete de forma inteligente por la ciudad",
      getApp: "Descarga la app",
      contact: "Contacto",
      email: "info@mu.com",
      phone: "+1-2345-6789",
      address: "123 Ave, Nueva York, EE.UU.",
      rights: "© 2026 Metropolis Underground. Todos los derechos reservados."
    }
  },
  fr: {
    translation: {
      appName: "Metropolis Underground",
      tagline: "Déplacez-vous plus intelligemment en ville",
      getApp: "Téléchargez l'application",
      contact: "Contact",
      email: "info@mu.com",
      phone: "+1-2345-6789",
      address: "123 Ave, New York, USA",
      rights: "© 2026 Metropolis Underground. Tous droits réservés."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
