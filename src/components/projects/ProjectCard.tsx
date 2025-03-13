import React from 'react';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: { title: string; description: string; link: string; image: string } }) {
    return (
      <div className="p-6 bg-gray-100 rounded">
        <Image src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
        <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
        <a href={project.link} className="mt-2 inline-block text-blue-600">
          View Project
        </a>
      </div>
    );
  }
  