import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("update of number");
    setItems(getItems());
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
}
