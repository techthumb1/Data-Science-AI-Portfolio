"use client"; 
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </ul>
    </div>
  );
}
