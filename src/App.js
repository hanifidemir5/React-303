import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages";
import ToDoApp from "./pages/ToDoApp";
import StateManagementWithContextApi from "./pages/StateManagement";
import { ToDoProvider } from "./contexts/ToDoContext";
import SCONPMJS from "./pages/SharingComponentsonNPMJS";
import UnitTesting from "./pages/UnitTesting";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route element={<StateManagementWithContextApi />} path="/SMWCAPI" />
        <Route
          element={
            <ToDoProvider>
              <ToDoApp />
            </ToDoProvider>
          }
          path="toDoApp"
        />
      </Route>
      <Route element={<SCONPMJS />} path="SCONPMJS" />
      <Route element={<UnitTesting />} path="UnitTesting" />
    </Routes>
  </BrowserRouter>
);

export default App;
