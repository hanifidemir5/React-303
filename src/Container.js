import React, { useContext } from "react";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import ChangeLang from "./components/ChangeLang";
import ThemeContext from "./contexts/ThemeContext";

const Container = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <ChangeTheme />
      <ChangeLang />
      <Footer />
    </div>
  );
};

export default Container;
