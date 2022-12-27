import React, { useState } from "react";
import { useCallback } from "react";
import List from "./List";

export default function UseCallback() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [num, num + 1, num + 2];
  }, [num]);

  const theme = {
    backgroundColor: dark ? "black" : "grey",
    color: dark ? "white" : "black",
    padding: "1em",
  };
  return (
    <div style={theme}>
      <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevState) => !prevState)}>
        toggle theme
      </button>
      {/* whenever the useCallback component is re-rendered, that is even when the dark is changed the new refernce for getItems is being passed to list, which causes a useEffect in the List to run unnecessarily, so to avoid this we wrap getItems in useCallback so it returns the function if no changes is made to num */}
      <List getItems={getItems} />
    </div>
  );
}
