export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    featured: boolean;
    date: string;
    category: 'data-science' | 'machine-learning' | 'ai' | 'web-development';
  }
  