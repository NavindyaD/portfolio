const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals, users and requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the features, technology, architecture and project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create clean and intuitive interfaces focused on user experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team builds and integrates the complete solution.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test functionality, performance, security and responsiveness.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your solution and provide support for future improvements.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading center">
          <span className="section-label">OUR PROCESS</span>

          <h2>
            From idea to
            <span> reality.</span>
          </h2>

          <p>
            A straightforward development process designed to keep projects
            clear and organized.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;