import React, { useEffect } from "react";
import "../Pages/Projects.css";
import ProjectsFilter from "../Components/ProjectsFilter";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects__section">
      <ProjectsFilter />
    </section>
  );
};

export default Projects;
