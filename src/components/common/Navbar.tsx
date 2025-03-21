import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#2C3E50] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
  
          <h1 className="text-2xl font-bold tracking-wide">Jason Robinson</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex text-lg">
          <Link href="/" className="hover:text-[#F8F9FA]">Home</Link>
          <Link href="/about" className="hover:text-[#F8F9FA]">About</Link>
          <Link href="/projects" className="hover:text-[#F8F9FA]">Projects</Link>
          <Link href="/skills" className="hover:text-[#F8F9FA]">Skills</Link>
          <Link href="/blog" className="hover:text-[#F8F9FA]">Blog</Link>
          <Link href="/contact" className="hover:text-[#F8F9FA]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
