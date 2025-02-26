import React, { useContext } from "react";
import themeContext from "../contexts/ThemeContext";

const ChangeTheme = (props) => {
  const data = useContext(themeContext);
  console.log(data);
  return (
    <div>
      <p>Aktif tema {data}</p>
      <button>ChangeTheme</button>
    </div>
  );
};

export default ChangeTheme;
