import React from "react";
import { ACTIONS } from "./UseReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          console.log("i am clicked!");
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          console.log("i am clicked too");
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </div>
  );
}
