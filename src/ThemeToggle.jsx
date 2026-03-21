import React, { useState, useEffect } from "react";
import { Thing } from "./components/Thing";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  // Toggle the class on the body element so the whole app reacts
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('theme-dark');
      root.classList.remove('theme-light');
    } else {
      root.classList.add('theme-light');
      root.classList.remove('theme-dark');
    }
  }, [isDark]);

  return (
    <Thing 
      description="small neutral rounded button" 
      className="neutral-800 border-sm border-neutral-700"
      event={() => setIsDark(!isDark)}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </Thing>
  );
};