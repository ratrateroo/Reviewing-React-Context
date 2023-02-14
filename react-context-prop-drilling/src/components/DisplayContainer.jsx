import { useState } from "react";

const DisplayContainer = ({ todos }) => {
  console.log(todos);
  return (
    <>
      <div>
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
