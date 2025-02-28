import React from "react";
import ToDoList from "./ToDoList";

const ToDoContent = (props) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ToDoList />
    </section>
  );
};

export default ToDoContent;
