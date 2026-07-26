"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Processus" },
  { href: "#coach", label: "Coach" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])',
            ),
          )
        : [];

    // Déplace le focus dans le drawer (bouton fermer) à l'ouverture.
    const closeBtn = panel?.querySelector<HTMLElement>(".nav-drawer-close");
    (closeBtn ?? getFocusable()[0])?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // Restaure le focus sur le bouton d'ouverture.
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo" aria-label="Canelis">
            <Image
              src="/logo-canelis-mark.png"
              alt="Canelis"
              width={54}
              height={44}
              priority
              style={{ height: 44, width: "auto" }}
            />
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
              ref={toggleRef}
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

      {/* `inert` (React 19) retire tout le sous-arbre du tab order et de
          l'arbre d'accessibilité quand le drawer est fermé — ce que
          aria-hidden seul ne faisait pas : les 6 liens restaient tabulables.
          Repli CSS via visibility:hidden sur .nav-drawer. */}
      <div
        className={`nav-drawer${open ? " on" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        inert={!open}
      >
        <div className="nav-drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="nav-drawer-panel" ref={panelRef}>
          <div className="nav-drawer-top">
            <a href="#" className="logo" aria-label="Canelis" onClick={() => setOpen(false)}>
              <Image
                src="/logo-canelis-mark.png"
                alt="Canelis"
                width={54}
                height={44}
                style={{ height: 44, width: "auto" }}
              />
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
