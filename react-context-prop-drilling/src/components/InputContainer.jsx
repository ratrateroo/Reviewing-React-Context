import { useState } from "react";

const InputContainer = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = () => {
    addTodoHandler(todo);
  };
  return (
    <>
      <div className={"input"}>
        <label>
          Todo:
          <input
            // value={todo.text}
            onChange={(e) => setTodo({ text: e.target.value })}
          />
        </label>
        <button
          onClick={() => {
            submitHandler();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default InputContainer;
