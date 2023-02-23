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
        <ul className="todolist">
          {filteredTodos
            ? filteredTodos.length !== 0
              ? filteredTodos.map((todo, index) => {
                  if (todo.text && todo) {
                    return (
                      <li key={todo.id}>
                        {`Text: ${todo.text} - ID: ${todo.id}`}{" "}
                        <button
                          onClick={() => {
                            removeTodoHandler(todo.id);
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
