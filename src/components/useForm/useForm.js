import { useState } from "react";

export const useForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return [state, handleChange];
};
