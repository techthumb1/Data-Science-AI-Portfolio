"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects"); // Ensure API is working
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

  if (loading) return <p className="text-center text-gray-700">Loading projects...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide">Projects</h1>

      <div className="divide-y divide-gray-300">
        {projects.map((project) => (
          <div key={project.id} className="py-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <Link href={`/projects/${project.id}`} className="text-blue-500 font-medium">
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
