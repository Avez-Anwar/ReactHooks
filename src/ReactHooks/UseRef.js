import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseRef() {
  const [name, setName] = useState("");

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My name is {name}</h1>
      <h1>the number of renders are {renderCount.current}</h1>
    </div>
  );
}

export default UseRef;
