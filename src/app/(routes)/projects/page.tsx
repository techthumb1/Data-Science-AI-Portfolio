"use client";

import projects from "@/data/projects.json"; // ✅ Directly import the JSON file
import TitleDivider from "@/components/TitleDivider";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide">
        Projects
      </h1>
      <TitleDivider />

      <div className="divide-y divide-gray-300">
        {projects.map((project) => (
          <div key={project.id} className="py-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
            {project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 font-medium"
  >
    View Project →
  </a>
)}

          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/techthumb1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1C2833] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2C3E50] transition"
        >
          Check out more on my GitHub →
        </a>
      </div>
    </div>
  );
}
