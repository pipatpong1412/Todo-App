// App.jsx
import React, { useContext } from "react";
import DashBoard from "./components/DashBoard";
import FormAddTodo from "./components/FormAddTodo";
import TodoContainer from "./components/TodoContainer";
import TodoContext from "./contexts/TodoContext";

export default function App() {
  const { isLoading } = useContext(TodoContext);

  if (isLoading) {
    return <h3 className="text-center mt-4">Loading...</h3>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <DashBoard />
      <FormAddTodo />
      <TodoContainer />
    </div>
  );
}
