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

  const removeTodoHandler = (index) => {
    console.log("clicked id: " + index);
    const todoList = [...todos];

    console.log("todoList");
    console.log(todoList);
    // const filteredTodo = todoList.filter((item) => item);
    // console.log(filteredTodo);
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
