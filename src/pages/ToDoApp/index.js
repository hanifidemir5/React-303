import React from "react";
import "./index.css";
import ToDoHeader from "../../components/ToDoComponents/ToDoHeader";
import ToDoContent from "../../components/ToDoComponents/ToDoContent";
import ToDoContentFooter from "../../components/ToDoComponents/ToDoContentFooter";
import ToDoFooter from "../../components/ToDoComponents/ToDoFooter";
import LandingPageButton from "../../components/LandingPageButton";

const ToDoApp = (props) => {
  return (
    <div className="to-do-body">
      <LandingPageButton />
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
