"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Processus" },
  { href: "#coach", label: "Coach" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <span className="logo-m">C</span>Canelis
          </a>
          <nav className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#rdv" className="btn dark">
              <span>Réserver un appel</span>
              <span className="arrow">→</span>
            </a>
            <button
              className="menu-toggle"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-drawer${open ? " on" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="nav-drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="nav-drawer-panel">
          <div className="nav-drawer-top">
            <a href="#" className="logo" onClick={() => setOpen(false)}>
              <span className="logo-m">C</span>Canelis
            </a>
            <button
              className="nav-drawer-close"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="nav-drawer-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#rdv" className="btn primary nav-drawer-cta" onClick={() => setOpen(false)}>
            <span>Prendre RDV</span>
            <span className="arrow">→</span>
          </a>
        </aside>
      </div>
    </>
  );
}
