import React, { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./index.css";
import LandingPageButton from "../../components/LandingPageButton";
import { useTranslation } from "react-i18next";

const messages = {
  tr: {
    translation: {
      welcome: "Merhaba Dünya",
      description: "{{count}} yeni mesajınız var",
    },
  },
  en: {
    translation: {
      welcome: "Hello World",
      description: "You have {{count}} new messages",
    },
  },
};

// Initialize i18next with default language
i18n.use(initReactI18next).init({
  resources: messages,
  lng: localStorage.getItem("locale") || "en", // Default to 'en' if no locale is set
  interpolation: {
    escapeValue: false, // Not needed for React
  },
});

const Localization = () => {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language.split("-")[0]; // Extract language code (en, tr)
  const [locale, setLocale] = useState(defaultLocale);
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLocale(language); // Update state and change language in i18next
  };

  useEffect(() => {
    localStorage.setItem("locale", locale); // Store the language in localStorage
    console.log(locale);
  }, [locale]);

  return (
    <div className="localization-container">
      <h1>{t("welcome")}</h1>
      <h2>{t("description", { count: 5 })}</h2> {/* Example with count */}
      <div>
        <button onClick={() => handleChangeLanguage("en")}>EN</button> {/* Switch to English */}
        <button onClick={() => handleChangeLanguage("tr")}>TR</button> {/* Switch to Turkish */}
      </div>
      <LandingPageButton />
    </div>
  );
};

export default Localization;
