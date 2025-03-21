export default function BlogTags({ tags }: { tags: string[] }) {
    return (
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-200 rounded">
            {tag}
          </span>
        ))}
      </div>
    );
  }
  