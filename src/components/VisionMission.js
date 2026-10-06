import React from 'react';

function VisionMission() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Vision & Mission</h1>
        <p>Where we're going, and how we plan to get there.</p>
      </div>

      <section className="section">
        <div className="vm-grid">
          <div className="vm-card">
            <div className="vm-tag">Vision</div>
            <h2>A society where dignity is not a privilege.</h2>
            <p>
              We imagine a country where every child learns, every woman leads,
              every family eats, and every village breathes clean — regardless
              of income, caste or geography.
            </p>
          </div>
          <div className="vm-card dark">
            <div className="vm-tag">Mission</div>
            <h2>To be the bridge between goodwill and grassroots need.</h2>
            <p>
              We channel donations, volunteering and expertise directly into
              programmes on the ground — measured, transparent, and shaped by
              the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <h2>Our Programmes at a Glance</h2>
          <p>Three focus areas — one shared goal.</p>
        </div>
        <ul className="programme-list">
          <li>
            <strong>Equal Chance —</strong> Making quality education accessible
            to all, one child at a time.
          </li>
          <li>
            <strong>Udyam Shakti —</strong> Transforming aspirations into skill,
            and skills into livelihoods.
          </li>
          <li>
            <strong>Nurture Nature —</strong> Growing green, nurturing clean
            communities for all.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default VisionMission;
