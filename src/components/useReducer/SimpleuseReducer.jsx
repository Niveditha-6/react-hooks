import React, { useReducer } from "react";

function reduce(state, actions) {
  switch (actions.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function SimpleuseReducer() {
  const [state, dispatch] = useReducer(reduce, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
}
