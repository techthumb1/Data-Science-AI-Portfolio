"use client";
import Link from "next/link";
import navigation from "@/data/navigation.json";
import { useState } from "react";

interface NavigationData {
  id: number;
  title: string;
  url: string;
}

const navigationData: NavigationData[] = navigation;


export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button onClick={() => setOpen(!open)} className="py-2">
        {open ? "Close Menu" : "Open Menu"}
      </button>
      <div className={open ? "block" : "hidden"}>
        {navigationData.map((link) => (
          <Link key={link.id} href={link.url} className="block py-2">{link.title}</Link>
        ))}
      </div>
    </nav>
  );
}
