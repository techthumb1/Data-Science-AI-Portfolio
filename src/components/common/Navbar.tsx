'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-[#2C3E50] text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-wide">Jason Robinson</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex text-lg space-x-6">
          <Link href="/" className="hover:text-[#F8F9FA]">Home</Link>
          <Link href="/about" className="hover:text-[#F8F9FA]">About</Link>
          <Link href="/projects" className="hover:text-[#F8F9FA]">Projects</Link>
          <Link href="/skills" className="hover:text-[#F8F9FA]">Skills</Link>
          <Link href="/blog" className="hover:text-[#F8F9FA]">Blog</Link>
          <Link href="/contact" className="hover:text-[#F8F9FA]">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2C3E50] px-6 pt-2 pb-4 space-y-2 text-lg shadow-md z-40">
          <Link href="/" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/skills" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/blog" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" className="block hover:text-[#F8F9FA] py-2" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}