import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [filter, setActiveFilter] = useState("all");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      completed: true,
    },
  ]);

  const addTodo = (text) => setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];
    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;
    setTodos(cloned_todos);
  };

  const destroyTodo = (id) => {
    const cloned_todos = [...todos];
    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    cloned_todos.splice(itemIndex, 1);
    setTodos(cloned_todos);
  };

  const values = {
    todos,
    setTodos,
    filter,
    setActiveFilter,
    addTodo,
    toggleTodo,
    destroyTodo,
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be called within ToDoProvider component");
  }

  return context;
};
