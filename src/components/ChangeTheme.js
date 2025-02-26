import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Active Theme: {theme} </p>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
