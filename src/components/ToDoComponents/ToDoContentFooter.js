import React from "react";
import { useTodo } from "../../contexts/ToDoContext";

const ToDoContentFooter = (props) => {
  const { todos, filter, setActiveFilter, setTodos } = useTodo();

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => todo.completed === false));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        item{todos.length > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={() => setActiveFilter("all")} className={filter === "all" ? "selected" : ""}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => setActiveFilter("active")} className={filter === "active" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setActiveFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default ToDoContentFooter;
