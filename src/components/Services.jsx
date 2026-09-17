import { services } from "../data/services";

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">WHAT WE DO</span>

          <h2>
            Technology that solves
            <span> real problems.</span>
          </h2>

          <p>
            From simple business websites to intelligent software systems, we
            create solutions designed around your goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;