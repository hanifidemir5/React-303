import React from "react";
import { Link } from "react-router";
import "./index.css";

const MainPage = (props) => {
  return (
    <div className="main-container">
      <Link to={"/stateManagementWithContextAPI"} className="navigation-link">
        State Management With ContextAPI
      </Link>
      <Link to={"/toDoApp"} className="navigation-link">
        To Do App
      </Link>
    </div>
  );
};

export default MainPage;
