import React from "react";

const ToDoItem = ({ todo }) => {
  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input checked={todo.completed} className="toggle" type="checkbox" />
        <label>{todo.text}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
};

export default ToDoItem;
