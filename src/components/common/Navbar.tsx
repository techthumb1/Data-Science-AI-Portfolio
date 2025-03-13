import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#2C3E50] text-white py-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold">Jason Robinson</h1>
        <div className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/skills" className="hover:text-gray-300">Skills</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
