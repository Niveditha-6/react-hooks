import React, { useState, useMemo } from "react";
import { useEffect } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const styles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "grey",
      color: dark ? "white" : "black",
      padding: "2em",
    };
  }, [dark]);
  const toggle = () => {
    setDark((prevState) => !prevState);
  };

  //instaed we can memorise the slowfunctions output, if the number being passed to it is same, but re-render is happening for other changes, here slowfunction is not executed unless the number is changed!!
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //though we have dependency of styles, even when number is changed the useeffect is ran because of refrential inequality, that is everytime a componnet is re-rendered a new style variable is created,so the  solution will be using useMemo to memorise the styles
  useEffect(() => {
    console.log("theme changed");
  }, [styles]);
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={toggle}>Change Theme</button>
      <div style={styles}>{doubleNumber}</div>
    </div>
  );
}

//the huge function is called everytime a component re-rendered causing performance issue
function slowFunction(number) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
}
