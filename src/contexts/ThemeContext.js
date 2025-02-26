import { createContext, useState } from "react";

const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const values = {
    theme,
    setTheme,
    toggleTheme,
  };
  return <themeContext.Provider value={values}>{children}</themeContext.Provider>;
};

export default themeContext;
