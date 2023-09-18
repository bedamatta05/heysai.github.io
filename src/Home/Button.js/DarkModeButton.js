import React, { useState } from "react";
import "./DarkModeButton.css";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false); // Initialize darkMode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      className={`dark-mode-button ${darkMode ? "active" : ""}`}
      onClick={toggleDarkMode}
    >
      <i className="fas fa-moon"></i>
    </div>
  );
}

export default DarkModeButton;
