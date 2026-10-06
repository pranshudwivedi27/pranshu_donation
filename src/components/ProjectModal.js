import React, { useEffect } from 'react';

function ProjectModal({ project, onClose, onDonate }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div
          className="pm-hero"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="pm-hero-overlay">
            <span className="vm-tag">Project since {project.startedYear}</span>
            <h2>{project.title}</h2>
            <p>{project.tagline}</p>
          </div>
        </div>

        <div className="pm-body">
          <div className="pm-stats">
            <div className="pm-stat">
              <div className="pm-stat-value">
                {project.reached.toLocaleString()}+
              </div>
              <div className="pm-stat-label">People reached</div>
            </div>
            <div className="pm-stat">
              <div className="pm-stat-value">
                {project.volunteers.toLocaleString()}+
              </div>
              <div className="pm-stat-label">Volunteers joined</div>
            </div>
            <div className="pm-stat">
              <div className="pm-stat-value">{project.locations}</div>
              <div className="pm-stat-label">Active locations</div>
            </div>
          </div>

          <div className="pm-section">
            <h3>About the project</h3>
            <p>{project.description}</p>
          </div>

          <div className="pm-split">
            <div className="pm-card">
              <span className="vm-tag">Our Vision</span>
              <p>{project.vision}</p>
            </div>
            <div className="pm-card dark">
              <span className="vm-tag">Our Mission</span>
              <p>{project.mission}</p>
            </div>
          </div>

          <div className="pm-section">
            <h3>Focus areas</h3>
            <ul className="pm-focus">
              {project.focusAreas.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="pm-actions">
            <button className="btn btn-outline" onClick={onClose}>
              Close
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onDonate(project.id);
              }}
            >
              Support this project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
