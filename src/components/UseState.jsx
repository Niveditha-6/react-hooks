import React, { useState } from "react";

export default function UseState() {
  const initialVal = () => {
    console.log("running only once");
    return 1;
  };
  const [number, setNumber] = useState(0);

  const [state, setState] = useState({ num: 0, color: "green" });

  const [num, setNum] = useState(initialVal);

  return (
    <div>
      <button
        onClick={() => {
          setNumber((prevNum) => prevNum - 1);
          setState((prevState) => {
            return { ...prevState, color: "red" };
          });
        }}
      >
        -
      </button>
      <span>
        {number}
        {state.color}
      </span>
      <button
        onClick={() => {
          setNumber((prevNum) => prevNum + 1);
          setState((prevState) => {
            return { ...prevState, color: "green" };
          });
        }}
      >
        +
      </button>
      <button
        style={{ color: state.color }}
        onClick={() =>
          setState((prevState) => {
            return { ...prevState, num: prevState.num + 1 };
          })
        }
      >
        {state.num}
      </button>
    </div>
  );
}
