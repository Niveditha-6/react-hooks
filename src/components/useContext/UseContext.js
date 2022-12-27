import React, { useContext } from "react";
import { ThemeContext, UpdateThemeContext } from "./ThemeContext";

export default function UseContext() {
  const dark = useContext(ThemeContext);
  const toggleTheme = useContext(UpdateThemeContext);
  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "1em",
  };
  return (
    <div style={styles}>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
