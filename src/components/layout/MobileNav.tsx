import Link from "next/link";
import navigation from "../../../data/navigation.json";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">☰</button>
      {open && (
        <div className="absolute bg-white w-full shadow-md p-4">
          {navigation.links.map((link) => (
            <Link key={link.name} href={link.path} className="block py-2">{link.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
