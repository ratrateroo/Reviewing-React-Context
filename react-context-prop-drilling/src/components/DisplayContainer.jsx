import { useState } from "react";

const DisplayContainer = ({ todos, removeTodoHandler }) => {
  console.log(todos);
  return (
    <>
      <div className="display">
        <ul>
          {todos
            ? todos.map((todo, index) => {
                return (
                  <li>
                    {todo.text}{" "}
                    <button
                      onClick={() => {
                        removeTodoHandler(index);
                      }}
                    >
                      Click
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default DisplayContainer;
