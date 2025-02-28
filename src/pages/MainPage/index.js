import React from "react";
import { Link } from "react-router";
import "./index.css";

const MainPage = (props) => {
  return (
    <div className="main-container">
      <Link to={"/stateManagementWithContextAPI"}>State Management With ContextAPI</Link>
      <Link to={"/toDoApp"}>To Do App</Link>
    </div>
  );
};

export default MainPage;
