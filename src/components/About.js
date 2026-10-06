import React from 'react';

function About() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>About Us</h1>
        <p>Rooted in community. Powered by compassion.</p>
      </div>

      <section className="section">
        <div className="prose">
          <p>
            <strong>AANDH Foundation</strong> was born from a simple belief —
            that every human being deserves dignity, opportunity and hope. What
            started as a group of friends distributing meals on weekends has
            grown into a multi-program non-profit reaching tens of thousands of
            lives each year.
          </p>
          <p>
            We work at the grassroots — walking into villages, sitting with
            families, listening before we act. Our team of volunteers, social
            workers and donors comes together around one common goal: to leave
            every community we touch better than we found it.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <h2>What Guides Us</h2>
        </div>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">♥</div>
            <h3>Compassion</h3>
            <p>Every action begins with listening and empathy.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✦</div>
            <h3>Integrity</h3>
            <p>Transparent use of every rupee donated and hour volunteered.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">◈</div>
            <h3>Impact</h3>
            <p>Measurable, lasting change — not one-off charity.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✪</div>
            <h3>Community</h3>
            <p>Solutions built with — not for — the people we serve.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
