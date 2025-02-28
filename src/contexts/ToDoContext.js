import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
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

  const values = {
    todos,
    setTodos,
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
