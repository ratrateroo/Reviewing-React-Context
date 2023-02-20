import { useState } from "react";

const InputContainer = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = () => {
    if (todo) {
      addTodoHandler({
        text: todo,
        id: Math.floor(Math.random() * 90000) + 10000,
      });
    } else {
      console.log("falsy");
    }
  };
  console.log(todo);
  return (
    <>
      <div className={"input"}>
        <label className="label">
          Todo:
          <input
            //value={todo.text}
            onChange={(e) => {
              if (e.target.value) {
                setTodo(e.target.value);
              } else {
                setTodo("");
              }
            }}
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
