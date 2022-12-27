import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
  TOGGLE_TODO: "toggle_todo",
};

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}
function reducer(todos, actions) {
  switch (actions.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(actions.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      console.log("i am toggled");
      return todos.map((todo) => {
        if (todo.id === actions.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== actions.payload.id);

    default:
      return todos;
  }
}
export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
