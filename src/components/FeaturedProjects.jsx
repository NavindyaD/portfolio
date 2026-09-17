import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const categories = [
  "All",
  "Web Development",
  "E-Commerce",
  "AI / ML",
  "Business Software",
  "SEO",
];

function FeaturedProjects({ onProjectClick }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <span className="section-label">OUR WORK</span>

            <h2>
              Projects we've
              <span> built.</span>
            </h2>
          </div>

          <p>
            A selection of software solutions and digital experiences created
            for different business needs.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;