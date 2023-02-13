import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputContainer from "./components/InputContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <InputContainer />
      </div>
    </div>
  );
}

export default App;
