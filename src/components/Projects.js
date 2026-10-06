import React, { useState } from 'react';
import { PROJECTS } from '../data';
import ProjectModal from './ProjectModal';

function Projects({ onDonateProject }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page">
      <div className="page-hero">
        <h1>Our Projects</h1>
        <p>
          Three flagship programmes, one shared belief — dignity, opportunity
          and hope for all.
        </p>
      </div>

      <section className="section">
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div className={`project-row ${i % 2 ? 'reverse' : ''}`} key={p.id}>
              <div
                className="project-img"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="project-body">
                <h2>{p.title}</h2>
                <p className="tagline">{p.tagline}</p>
                <p>{p.description}</p>
                <div className="project-meta">
                  <span className="chip strong">
                    {p.reached.toLocaleString()}+ people reached
                  </span>
                  <span className="chip">
                    {p.volunteers.toLocaleString()}+ volunteers
                  </span>
                  <button
                    className="btn btn-outline sm"
                    onClick={() => setSelected(p)}
                  >
                    View Project
                  </button>
                  <button
                    className="btn btn-primary sm"
                    onClick={() => onDonateProject(p.id)}
                  >
                    Support this project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        onDonate={onDonateProject}
      />
    </div>
  );
}

export default Projects;
