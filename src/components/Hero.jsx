function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for new projects
          </div>

          <h1>
            We Build
            <span> Digital Solutions</span>
            That Move Businesses Forward.
          </h1>

          <p>
            We are a team of software developers creating modern websites,
            business applications, e-commerce platforms and AI-powered
            solutions for businesses.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Our Work →
            </a>

            <a href="#contact" className="btn btn-secondary">
              Start a Project
            </a>
          </div>

          <div className="hero-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>AI / ML</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>solution.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">solution</span> = {"{"}
              </p>

              <p className="indent">
                <span className="code-green">design</span>:{" "}
                <span className="code-yellow">"Modern"</span>,
              </p>

              <p className="indent">
                <span className="code-green">technology</span>:{" "}
                <span className="code-yellow">"Smart"</span>,
              </p>

              <p className="indent">
                <span className="code-green">business</span>:{" "}
                <span className="code-yellow">"Focused"</span>,
              </p>

              <p className="indent">
                <span className="code-green">result</span>:{" "}
                <span className="code-yellow">"Growth"</span>
              </p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Let's build something great.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="scroll-down">
        <span>Scroll to explore</span>
        ↓
      </a>
    </section>
  );
}

export default Hero;