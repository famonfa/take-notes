"use client";

import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const theme = localStorage?.getItem("theme");
  const [darkMode, setDarkMode] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative bottom-0 w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full"
      onClick={() => setDarkMode(!darkMode)}
    >
      <CiDark className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-gray-600 w-6 h-6 rounded-full shadow-inner transform transition duration-300 ease-in-out"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
      <FiSun className="ml-5 text-white" size={18} />
    </div>
  );
};

export default ThemeToggle;
