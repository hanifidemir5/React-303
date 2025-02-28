import React from "react";
import { useTodo } from "../../../../contexts/ToDoContext";
import ToDoItem from "./item";

let filtered = null;

const ToDoList = (props) => {
  const { todos, filter } = useTodo();

  filtered = todos;

  if (filter !== "all") {
    filtered = todos.filter((todo) => (filter === "active" ? todo.completed === false : todo.completed === true));
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
