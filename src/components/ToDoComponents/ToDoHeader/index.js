import React from "react";
import "../../../pages/ToDoApp/index.css";
import HeaderForm from "./HeaderForm/HeaderForm";

const ToDoHeader = (props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <HeaderForm />
    </header>
  );
};

export default ToDoHeader;
