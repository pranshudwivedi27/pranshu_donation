import React, { useState } from 'react';
import { PROJECTS } from '../data';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  city: '',
  age: '',
  interest: PROJECTS[0].id,
  availability: 'weekends',
  message: '',
};

function Volunteer() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page">
        <div className="page-hero">
          <h1>Thank you, {form.name.split(' ')[0] || 'friend'}!</h1>
          <p>
            Your details are with us. A programme coordinator will reach out
            within 3 working days.
          </p>
        </div>
        <section className="section">
          <div className="center-btn">
            <button
              className="btn btn-outline"
              onClick={() => {
                setForm(INITIAL);
                setSubmitted(false);
              }}
            >
              Submit another response
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-hero">
        <h1>Become a Volunteer</h1>
        <p>Give a few hours a week. Change a life for a lifetime.</p>
      </div>

      <section className="section">
        <form className="form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Full Name*
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
          </div>

          <div className="form-row">
            <label>
              Phone*
              <input
                type="tel"
                required
                value={form.phone}
                onChange={update('phone')}
              />
            </label>
            <label>
              City*
              <input
                type="text"
                required
                value={form.city}
                onChange={update('city')}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Age
              <input
                type="number"
                min="14"
                value={form.age}
                onChange={update('age')}
              />
            </label>
            <label>
              Availability
              <select
                value={form.availability}
                onChange={update('availability')}
              >
                <option value="weekends">Weekends</option>
                <option value="weekdays">Weekday evenings</option>
                <option value="flexible">Flexible</option>
                <option value="fulltime">Full-time</option>
              </select>
            </label>
          </div>

          <label>
            Which programme interests you the most?
            <select value={form.interest} onChange={update('interest')}>
              {PROJECTS.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.title}
                </option>
              ))}
              <option value="any">Any / Wherever needed</option>
            </select>
          </label>

          <label>
            Tell us a bit about yourself
            <textarea
              rows="4"
              value={form.message}
              onChange={update('message')}
              placeholder="Skills, past experience, why you want to volunteer…"
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default Volunteer;
