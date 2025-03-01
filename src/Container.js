import ChangeTheme from "./components/StateManagementComponents/ChangeTheme";
import Footer from "./components/StateManagementComponents/Footer";
import ChangeLang from "./components/StateManagementComponents/ChangeLang";
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
