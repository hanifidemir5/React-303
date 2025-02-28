import React from "react";
import { useTodo } from "../../../../contexts/ToDoContext";

const ToDoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input checked={todo.completed} className="toggle" type="checkbox" onChange={() => toggleTodo(todo.id)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
    </li>
  );
};

export default ToDoItem;
