"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/results", label: "Results" },
  { href: "/clients", label: "Clients" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="container-fluid bg-white sticky-top shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-lg-0">
          <Link className="navbar-brand" href="/">
            <img alt="Frizendo digital marketing agency logo" src="/assets/frizendo-logo.png" />
            <span>Frizendo</span>
          </Link>
          <button
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarCollapse"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-2 py-lg-0">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={
                      active ? "nav-item nav-link active" : "nav-item nav-link"
                    }
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link className="btn btn-primary rounded-pill py-2 px-4 ms-lg-3" href="/contact">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}