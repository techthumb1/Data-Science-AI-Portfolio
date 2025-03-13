import projects from "../../../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={{
            ...project, 
            link: project.link || '', 
            image: project.image || ''
          }} 
        />
      ))}
    </div>
  );
}

