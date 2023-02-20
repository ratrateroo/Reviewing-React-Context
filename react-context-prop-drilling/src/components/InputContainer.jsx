import { useState } from "react";

const InputContainer = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = () => {
    addTodoHandler({ text: todo, id: Math.random() });
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
                console.log("empty");
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
