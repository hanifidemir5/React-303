import { useLang } from "../contexts/LangContext";

const ChangeLang = () => {
  const { lang, setLang } = useLang();
  return (
    <div>
      <hr />
      <div>Active Language: {lang}</div>
      <button onClick={() => setLang("tr")}>TR</button>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("de")}>DE</button>
    </div>
  );
};

export default ChangeLang;
