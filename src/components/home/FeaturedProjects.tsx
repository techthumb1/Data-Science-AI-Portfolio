import projects from "@/data/projects.json";
import React from "react";


export default function FeaturedProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.slice(0, 2).map((project) => (
        <div key={project.id} className="p-6 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          <a href={project.demoUrl} className="mt-2 inline-block text-blue-600">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
