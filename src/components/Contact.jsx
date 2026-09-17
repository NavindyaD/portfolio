import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );

    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">CONTACT US</span>

            <h2>
              Let's talk about
              <span> your project.</span>
            </h2>

            <p>
              Have an idea, need a website or looking for a custom business
              solution? Send us a message.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">✉</div>

                <div>
                  <span>Email</span>
                  <strong>your@email.com</strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>

                <div>
                  <span>Phone</span>
                  <strong>+94 XX XXX XXXX</strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>

                <div>
                  <span>Location</span>
                  <strong>Sri Lanka</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Company</label>

              <input
                type="text"
                name="company"
                placeholder="Your company"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Tell us about your project</label>

              <textarea
                name="message"
                rows="6"
                placeholder="What would you like us to build?"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-button">
              Send Inquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;