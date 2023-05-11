import React, { useState } from "react";

// Create context object
export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-card");

  const toggleTheme = () => setTheme(theme === "light-card" ? "dark-card" : "light-card");

  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};
