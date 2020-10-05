import React, { useEffect, useState } from "react";

function UseEffectHookwin() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return <div>{windowWidth}</div>;
}

export default UseEffectHookwin;
