import React, { useContext } from "react";
import LangContext from "../contexts/LangContext";
import ThemeContext from "../contexts/ThemeContext";

const Footer = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div>
      <hr />
      <p>Active Theme: {theme}</p>
      <p>Active Lang: {lang}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
