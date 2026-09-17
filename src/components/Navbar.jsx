    import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>DEV</span>CRAFT
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

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

          <a href="#team" onClick={closeMenu}>
            Team
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;