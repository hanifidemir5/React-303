import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import ChangeLang from "./components/ChangeLang";
import { useTheme } from "./contexts/ThemeContext";

const Container = (props) => {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <ChangeTheme />
      <ChangeLang />
      <Footer />
    </div>
  );
};

export default Container;
