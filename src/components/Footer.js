import React, { useContext } from "react";
import themeContext from "../contexts/ThemeContext";

const Footer = (props) => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div>
      <hr />
      <p>Active Theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
