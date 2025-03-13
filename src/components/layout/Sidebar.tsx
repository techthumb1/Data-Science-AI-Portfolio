import Link from 'next/link';

export default function Sidebar() {
    return (
      <aside className="w-64 bg-secondary text-white p-4 hidden lg:block">
        <ul className="space-y-2">
          <li><Link href="/projects"><a className="hover:text-accent">Projects</a></Link></li>
          <li><Link href="/blog"><a className="hover:text-accent">Blog</a></Link></li>
          <li><a href="/contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </aside>
    );
  }
  