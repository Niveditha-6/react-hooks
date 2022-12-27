import { useState } from "react";

const useForm = (submitCallback) => {
  //maintains dynamic state for all the form elements
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e) => {
    //persists all synthetic events
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [state, handleChange, handleSubmit, setState];
};
export default useForm;
