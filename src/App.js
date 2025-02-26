import ChangeTheme from "./components/ChangeTheme";
import themeContext from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <themeContext.Provider value="light">
        <ChangeTheme />
      </themeContext.Provider>
    </div>
  );
}

export default App;
