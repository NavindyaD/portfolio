import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />

        <FeaturedProjects
          onProjectClick={(project) => setSelectedProject(project)}
        />

        <Technologies />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default App;