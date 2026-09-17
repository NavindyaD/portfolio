function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-content">
          <span className="project-category">{project.category}</span>

          <h2>{project.title}</h2>

          <p className="modal-description">
            {project.description}
          </p>

          <h4>Features</h4>

          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <span>✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <h4>Technologies</h4>

          <div className="project-tech modal-tech">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="modal-buttons">
            {/* {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Website ↗
              </a>
            )} */}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;