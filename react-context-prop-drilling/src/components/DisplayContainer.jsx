import { useState } from "react";

const DisplayContainer = ({ todos }) => {
  console.log(todos);
  return (
    <>
      <div className="display">
        <ul>
          {todos.map((todo) => {
            return <li>{todo.text}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default DisplayContainer;
