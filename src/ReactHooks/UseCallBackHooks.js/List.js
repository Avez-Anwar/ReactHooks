import React, { useState } from "react";
import { useEffect } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
