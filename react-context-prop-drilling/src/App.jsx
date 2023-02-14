import { useState } from "react";
import reactLogo from "./assets/react.svg";
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

  return (
    <div className="App">
      <div className="card">
        <InputContainer addTodoHandler={addTodoHandler} />
        <DisplayContainer todos={todos} />
      </div>
    </div>
  );
}

export default App;
