import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import ToDoApp from "./pages/ToDoApp";
import StateManagementWithContextAPI from "./pages/stateManagementWithContextAPI";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route element={<StateManagementWithContextAPI />} path="/stateManagementWithContextAPI" />
        <Route element={<ToDoApp />} path="toDoApp" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
