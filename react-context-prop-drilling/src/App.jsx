import { useState } from "react";

import "./App.css";
import InputContainer from "./components/InputContainer";
import DisplayContainer from "./components/DisplayContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    const todoList = [...todos];
    if (todo) {
      todoList.push(todo);
      setTodos(todoList);
    } else {
      console.log("Invalid Input:" + todo);
    }
  };

  const removeTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id === id ? false : true;
    });

    console.log(newTodos);

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <InputContainer addTodoHandler={addTodoHandler} />
      <DisplayContainer todos={todos} removeTodoHandler={removeTodoHandler} />
    </div>
  );
}

export default App;
