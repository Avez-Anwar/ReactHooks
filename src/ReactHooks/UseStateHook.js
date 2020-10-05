import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(4);

  function decrement() {
    setCount((preCount) => preCount - 1);
    setCount((preCount) => preCount - 1);
  }

  function increment() {
    setCount((preCount) => preCount - 1);
    setCount((preCount) => preCount + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseStateHook;
