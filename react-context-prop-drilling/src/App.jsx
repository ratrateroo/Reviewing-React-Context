import { useState } from "react";

import "./App.css";
import InputContainer from "./components/InputContainer";
import DisplayContainer from "./components/DisplayContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    const todoList = [...todos];
    todoList.push(todo);
    setTodos(todoList);
  };

  const removeTodoHandler = (index) => {
    const todoList = [...todos];
    delete todoList[index];
    setTodos(todoList);
  };

  return (
    <div className="app">
      <InputContainer addTodoHandler={addTodoHandler} />
      <DisplayContainer todos={todos} removeTodoHandler={removeTodoHandler} />
    </div>
  );
}

export default App;
