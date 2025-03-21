export default function ProjectFilter({ categories, onSelect }: { categories: string[]; onSelect: (category: string) => void }) {
    return (
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button key={category} onClick={() => onSelect(category)} className="px-4 py-2 bg-gray-200 rounded">
            {category}
          </button>
        ))}
      </div>
    );
  }
  