import { Link } from "react-router";
import { useLang } from "../../contexts/LangContext";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();

  return (
    <div>
      <Link to={"/"} className="main-page-button navigation-link">
        Main Page
      </Link>
      <hr />
      <p>Active Theme: {theme}</p>
      <p>Active Lang: {lang}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
