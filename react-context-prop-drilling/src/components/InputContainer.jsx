import { useState, useRef } from "react";

const InputContainer = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const inputRef = useRef(null);

  const submitHandler = () => {
    console.log("todo");
    console.log(todo.length);
    if (todo.length !== 0) {
      addTodoHandler({
        text: todo,
        id: Math.floor(Math.random() * 90000) + 10000,
      });
    } else {
      console.log("falsy");
    }
  };

  const clearTextHandler = () => {
    inputRef.current.value = "";
  };

  return (
    <>
      <div className={"input"}>
        <label className="label">
          Todo:
          <input
            //value={todo.text}
            ref={inputRef}
            onChange={(e) => {
              console.log(e.target.value.length);

              if (e.target.value) {
                console.log("not empty");
                setTodo(e.target.value);
              } else {
                console.log("empty");
                setTodo(null);
              }
            }}
          />
        </label>
        <button
          onClick={() => {
            submitHandler();
            clearTextHandler();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default InputContainer;
