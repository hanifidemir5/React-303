import React from "react";
import { Link } from "react-router";
import "./index.css";
import ToDoHeader from "../../components/ToDoComponents/ToDoHeader";
import ToDoContent from "../../components/ToDoComponents/ToDoContent";
import ToDoContentFooter from "../../components/ToDoComponents/ToDoContentFooter";
import ToDoFooter from "../../components/ToDoComponents/ToDoFooter";
const ToDoApp = (props) => {
  return (
    <div className="to-do-body">
      <Link to={"/"} className="main-page-button navigation-link">
        Main Page
      </Link>
      <section className="todoapp">
        <ToDoHeader />
        <ToDoContent />
        <ToDoContentFooter />
      </section>
      <ToDoFooter />
    </div>
  );
};

export default ToDoApp;
