function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#home" className="logo">
              <span>DEV</span>CRAFT
            </a>

            <p>
              Building modern digital solutions for businesses.
            </p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} DEVCraft. All rights reserved.
          </p>

          <p>Built with React ⚡</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;