const technologies = [
  "React",
  "Angular",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Spring Boot",
  "Laravel",
  "Python",
  "Flask",
  "Java",
  "PHP",
  "MySQL",
  "MongoDB",
  "TensorFlow",
  "Git",
  "GitHub",
];

function Technologies() {
  return (
    <section className="section technology-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-label">TECHNOLOGY</span>

          <h2>
            Built with the
            <span> right tools.</span>
          </h2>

          <p>
            We choose technologies based on the requirements of each project,
            not simply because they are popular.
          </p>
        </div>

        <div className="technology-cloud">
          {technologies.map((technology) => (
            <div className="technology-item" key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;