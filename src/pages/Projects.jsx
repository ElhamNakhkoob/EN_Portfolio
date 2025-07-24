import ProjectCard from "../components/sidebar/ProjectCard";
import projectData from "../data/projects";

const Projects = () => {
  return (
    <div className="p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projectData.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
