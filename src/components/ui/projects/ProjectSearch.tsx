"use client";
import { useState } from "react";

export default function ProjectSearch({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />
      <button onClick={() => onSearch(query)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}
