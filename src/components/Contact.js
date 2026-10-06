import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page">
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Reach out</h3>
            <p>
              <strong>Address</strong>
              <br />
              AC/O DINESH KUMAR YADAV, SHUBH ENCLAVE 3RD CROSS
              <br />
              Bellandur, Bangalore South, Bangalore- 560103
            </p>
            <p>
              <strong>Email</strong>
              <br />
              office@aandhfoundation.in
              <br />
              aandhfoundation2025@gmail.com
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              +91 9404604852
            </p>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="thank-box">
                <h3>Message sent</h3>
                <p>Thanks — we'll reply within 2 working days.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <label>
                  Name*
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                  />
                </label>
                <label>
                  Email*
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                  />
                </label>
                <label>
                  Subject
                  <input
                    type="text"
                    value={form.subject}
                    onChange={update('subject')}
                  />
                </label>
                <label>
                  Message*
                  <textarea
                    rows="5"
                    required
                    value={form.message}
                    onChange={update('message')}
                  />
                </label>
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
