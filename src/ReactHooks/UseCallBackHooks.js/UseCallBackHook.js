import React, { useState, useCallBack } from "react";
import List from "./List";

function UseCallBackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <inputx
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggled button
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallBackHook;
