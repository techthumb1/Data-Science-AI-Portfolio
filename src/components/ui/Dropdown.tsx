"use client";
import { useState } from "react";

export default function Dropdown({ options, onSelect }: { options: string[]; onSelect: (option: string) => void }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <button className="px-4 py-2 bg-gray-200 rounded">{selected || "Select an option"}</button>
      <div className="absolute bg-white shadow-md rounded mt-2">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => {
              setSelected(option);
              onSelect(option);
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
