import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import ToDoApp from "./pages/ToDoApp";
import StateManagementWithContextAPI from "./pages/stateManagementWithContextAPI";
import { ToDoProvider } from "./contexts/ToDoContext";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route element={<StateManagementWithContextAPI />} path="/stateManagementWithContextAPI" />
        <Route
          element={
            <ToDoProvider>
              <ToDoApp />
            </ToDoProvider>
          }
          path="toDoApp"
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
