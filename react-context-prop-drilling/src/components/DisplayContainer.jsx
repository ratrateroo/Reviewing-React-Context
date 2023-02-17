import { useState } from "react";

const DisplayContainer = ({ todos, removeTodoHandler }) => {
  console.log(todos);
  let filteredTodos = [];
  if (todos) {
    filteredTodos = todos.filter((item) => item);
  } else {
    filteredTodos = [];
  }

  return (
    <>
      <div className="display">
        <ul>
          {filteredTodos
            ? filteredTodos.length !== 0
              ? filteredTodos.map((todo, index) => {
                  if (todo.text && todo) {
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
                  }
                })
              : null
            : null}
        </ul>
      </div>
    </>
  );
};

export default DisplayContainer;
