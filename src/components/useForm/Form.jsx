import React from "react";
import useForm from "./useForm";

export default function Form() {
  const register = () => {
    console.log(values);
    //clearing values
    setState({});
  };

  const [values, handleChange, handleSubmit, setState] = useForm(register);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          //if we dont provide initial value, we get warning odf conrolled and uncontrolled input
          // A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
          value={values.name || ""}
          type="text"
          onChange={handleChange}
        />

        <label>Handle:</label>
        <input
          name="handle"
          value={values.handle || ""}
          className="form-control p-1 shadow-sm mb-1"
          type="text"
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
