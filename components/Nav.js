"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["The Latest Issue", "/latest-issue"],
  ["The Archive", "/archive"],
  ["Our Story", "/our-story"],
  ["The Offscreen Club", "/#club"],
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav ${open ? "open" : ""}`}>
      <div className="nav-in">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          Offscreen Press
        </Link>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="site-menu" className="nav-links" aria-label="Main">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="label"
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
