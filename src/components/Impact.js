import React from 'react';
import { PROJECTS } from '../data';

function Impact() {
  const total = PROJECTS.reduce((s, p) => s + p.reached, 0);
  const max = Math.max(...PROJECTS.map((p) => p.reached));

  return (
    <div className="page">
      <div className="page-hero">
        <h1>Our Impact</h1>
        <p>
          Every number here is a real person, a real family, a real change.
        </p>
      </div>

      <section className="section">
        <div className="impact-total">
          <div className="impact-total-value">{total.toLocaleString()}+</div>
          <div className="impact-total-label">
            Total people reached across all programmes
          </div>
        </div>

        <div className="impact-list">
          {PROJECTS.map((p) => {
            const pct = Math.round((p.reached / max) * 100);
            return (
              <div className="impact-item" key={p.id}>
                <div className="impact-item-head">
                  <span className="impact-title">{p.title}</span>
                  <span className="impact-count">
                    {p.reached.toLocaleString()}+
                  </span>
                </div>
                <div className="impact-bar">
                  <div
                    className="impact-bar-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="impact-caption">{p.tagline}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Impact;
