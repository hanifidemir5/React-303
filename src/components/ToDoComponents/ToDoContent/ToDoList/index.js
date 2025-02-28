import React from "react";
import { useTodo } from "../../../../contexts/ToDoContext";
import ToDoItem from "./item";

const ToDoList = (props) => {
  const { todos } = useTodo();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
