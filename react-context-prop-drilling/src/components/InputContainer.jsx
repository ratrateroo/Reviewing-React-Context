import { useState } from "react";

const InputContainer = () => {
  const [todo, setTodo] = useState("");

  const submitHandler = () => {
    console.log(todo);
  };
  return (
    <>
      <div>
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
