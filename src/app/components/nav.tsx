"use client";

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false); // For navbar toggling
  const [theme, setTheme] = useState<"black" | "blue" | "violet">("black"); // For theme change

  const handleToggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const handleThemeChange = () => {
    switch (theme) {
      case "black":
        setTheme("blue");
        break;
      case "blue":
        setTheme("violet");
        break;
      case "violet":
        setTheme("black");
        break;
      default:
        setTheme("black");
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document.body;
      const dividers = document.querySelectorAll(".divider");

      // Set body class to match the current theme
      body.className = theme;

      // Update each divider's data-theme attribute
      dividers.forEach((divider) => {
        if (divider instanceof HTMLElement) {
          divider.setAttribute("data-theme", theme);
        }
      });
    }
  }, [theme]); // Runs when theme changes

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${styles.navbar} ${isNavbarActive ? styles.active : ""}`}
        data-navbar
      >
        <button
          className={styles["nav-toggler"]}
          data-nav-toggler
          onClick={handleToggleNavbar}
        >
          {isNavbarActive ? 'Close Navbar' : 'Open Navbar'}
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isNavbarActive ? styles.active : ""}`}
        data-overlay
      ></div>

      {/* Theme Button */}
      <button id="theme-btn" onClick={handleThemeChange}>
        Change Theme
      </button>

      {/* Example Dividers */}
      <div className="divider" />
      <div className="divider" />
    </>
  );
};

export default Navbar;







