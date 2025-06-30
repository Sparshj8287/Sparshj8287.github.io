"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme";

// Create the context with default values
const ThemeContext = createContext();

// ThemeProviderContext Component to manage theme state and provide the context
export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load the theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Select the theme object based on the current theme
  const themeMode = theme === "light" ? LightTheme : DarkTheme;
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom Hook for easier access to the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderContext");
  }
  return context;
};

export default ThemeContext;
