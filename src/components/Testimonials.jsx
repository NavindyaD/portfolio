const testimonials = [
  {
    text: "The team understood our requirements and delivered a solution that matched our business needs.",
    name: "Client Name",
    company: "Business Name",
  },
  {
    text: "Professional communication, modern design and a smooth development process from beginning to end.",
    name: "Client Name",
    company: "Business Name",
  },
  {
    text: "They were responsive throughout the project and helped us turn our idea into a working system.",
    name: "Client Name",
    company: "Business Name",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-label">CLIENT FEEDBACK</span>

          <h2>
            What our clients
            <span> say.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote">“</div>

              <p>{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;