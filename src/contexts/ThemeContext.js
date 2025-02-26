import { Children, createContext } from "react";

const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return <themeContext.Provider value="light">{children}</themeContext.Provider>;
};

export default themeContext;
