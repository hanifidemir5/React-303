import React, { useEffect, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import "./index.css";
import LandingPageButton from "../../components/LandingPageButton";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages",
  },
};

const Localization = (props) => {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <div className="localization-container">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="title" />
        </p>
        <p>
          <FormattedMessage id="description" values={{ count: 5 }} />
        </p>
        <div>
          <button onClick={() => setLocale("en-US")}>EN</button>

          <button onClick={() => setLocale("tr-TR")}>TR</button>
        </div>
      </IntlProvider>
      <LandingPageButton />
    </div>
  );
};

export default Localization;
