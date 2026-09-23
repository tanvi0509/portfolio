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
      className="relative h-8 w-16 cursor-pointer rounded-full border border-[#FF3E88]/40 bg-[#FF3E88]/15 p-1 backdrop-blur-md"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon
        className={`absolute left-2 top-1/2 -translate-y-1/2 text-[#FF3E88] ${
          darkMode ? "opacity-100" : "opacity-50"
        }`}
        size={14}
      />
      <div
        className={`absolute h-6 w-6 rounded-full bg-[#FF3E88] shadow-md transition-all duration-300 ${
          darkMode ? "left-[2px]" : "left-[38px]"
        }`}
      ></div>
      <BsSunFill
        className={`absolute right-2 top-1/2 -translate-y-1/2 text-[#FF3E88] ${
          darkMode ? "opacity-50" : "opacity-100"
        }`}
        size={13}
      />
    </div>
  );
};

export default ThemeToggle;
