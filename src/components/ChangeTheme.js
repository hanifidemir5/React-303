import React, { useContext } from "react";
import themeContext from "../contexts/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div>
      <p>Active Theme: {theme} </p>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
