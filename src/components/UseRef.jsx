import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef();
  const text = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  //one more use of useref is we can store prev value of state
  useEffect(() => {
    prevName.current = name;
  });

  const handleText = (e) => {
    const value = e.target.value;
    text.current = value;
  };

  return (
    <div>
      {/* we can access Dom element using useRef */}
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focusInput}>Focus on input</button>
      <div>
        my name is {name} and it used to be {prevName.current}
      </div>
      <input onChange={handleText} />
      {/* gets updated only if other changes cause re-render */}
      <div>{text.current}</div>
    </div>
  );
}
