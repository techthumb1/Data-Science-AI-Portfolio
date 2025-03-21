export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12 px-6">
          {children}
        </div>
      </div>
    );
  }
  