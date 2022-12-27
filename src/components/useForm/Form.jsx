import React from "react";
import { useForm } from "./useForm";

export default function Form() {
  const [state, handleChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="handler" onChange={handleChange} />
      <button>Register</button>
    </form>
  );
}
