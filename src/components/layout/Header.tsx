import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Jason Robinson</h1>
          <nav className="flex space-x-4">
            <Link href="/projects">
              <a className="hover:text-secondary">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-secondary">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-secondary">Contact</a>
            </Link>
          </nav>
        </div>
      </header>
    );
  }
  