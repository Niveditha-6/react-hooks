import React from "react";
import { useState } from "react";

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

//this acts as a context provider function holding both the contexts
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={dark}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
