import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-[#1C2833] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#2C3E50] transition ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
