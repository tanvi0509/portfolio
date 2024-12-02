"use client";

import { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Sync theme state with localStorage and system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#0f0f0f";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-hovercolor cursor-pointer 
      rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon
        className={`text-gray-800 dark:text-white ${
          darkMode ? "opacity-100" : "opacity-50"
        }`}
        size={18}
      />
      <div
        className={`absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "bg-black" : "bg-white"
        }`}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill
        className={`ml-auto text-red-700 ${
          darkMode ? "opacity-50" : "opacity-100"
        }`}
        size={18}
      />
    </div>
  );
};

export default ThemeToggle;
