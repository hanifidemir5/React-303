import React from "react";
import { Link } from "react-router";
import "./index.css";

const LandingPage = (props) => {
  return (
    <div className="main-container">
      <Link to={"/SMWCAPI"} className="navigation-link">
        State Management With ContextAPI
      </Link>
      <Link to={"/toDoApp"} className="navigation-link">
        To Do App
      </Link>
      <Link to={"/SCONPMJS"} className="navigation-link">
        SCONPMJS
      </Link>
    </div>
  );
};

export default LandingPage;
