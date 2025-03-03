import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import "./index.css";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
  },
  "en-US": {
    title: "Hello World",
  },
};

const Localization = (props) => {
  const [lang, setLang] = useState("en-US");

  return (
    <div className="localization-container">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <div>
          <button onClick={() => setLang("en-US")}>EN</button>

          <button onClick={() => setLang("tr-TR")}>TR</button>
        </div>
      </IntlProvider>
    </div>
  );
};

export default Localization;
