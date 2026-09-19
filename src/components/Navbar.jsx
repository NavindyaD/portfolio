import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>DEV</span>CRAFT
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;