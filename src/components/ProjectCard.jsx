function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <div className="project-overlay">
          <button onClick={() => onClick(project)}>
            View Project →
          </button>
        </div>
      </div>

      <div className="project-content">
        <div className="project-top">
          <span className="project-category">{project.category}</span>

          <span className="project-developer">
            {project.developer}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <button
          className="project-link"
          onClick={() => onClick(project)}
        >
          View Details <span>↗</span>
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;