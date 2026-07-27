import Image from "next/image";

export function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="container">
        <div className="foot-big">
          Parlons de votre <span className="serif">carrière.</span>
        </div>

        <div className="foot-cols">
          <div>
            <a href="#" className="logo" aria-label="Canelis">
              <Image
                src="/logo-canelis-mark.png"
                alt="Canelis"
                width={54}
                height={44}
                style={{ height: 44, width: "auto" }}
              />
            </a>
            <p className="foot-brand-p">
              Accompagnement à la recherche d&apos;emploi au Canada, 100 % en ligne, pour les
              candidats basés en Afrique. CV, lettres, entrevues, coaching.
            </p>
            <div className="foot-socials">
              <a
                href="https://wa.me/14382825447"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.19 3.03 14.69 2 12.04 2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zm7.6 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.49 3.05 5.49 7.02V22h-4.56v-6.24c0-1.49-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V22H7.82z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05 6.33 6.33 0 0 0-5.58 9.5 6.34 6.34 0 0 0 10.95-4.31V8.16a8.16 8.16 0 0 0 4.86 1.56V6.69z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="foot-col-t">Contact direct</div>
            <a
              href="https://wa.me/14382825447"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-row"
            >
              WhatsApp
              <span className="foot-row-meta">+1 438 282 5447</span>
            </a>
            <a href="mailto:hello@canelis.net" className="foot-row">
              Email
              <span className="foot-row-meta">hello@canelis.net</span>
            </a>
            <a href="#" className="foot-row">
              Instagram
              <span className="foot-row-meta">@canelis.ca</span>
            </a>
            <a href="#" className="foot-row">
              TikTok
              <span className="foot-row-meta">@canelis</span>
            </a>
          </div>
          <div>
            <div className="foot-col-t">Services</div>
            <a href="#services" className="foot-row">CV canadien</a>
            <a href="#services" className="foot-row">Lettre de présentation</a>
            <a href="#services" className="foot-row">Préparation aux entrevues</a>
            <a href="#services" className="foot-row">Accompagnement complet A&rarr;Z</a>
          </div>
          <div>
            <div className="foot-col-t">Navigation</div>
            <a href="#processus" className="foot-row">Processus</a>
            <a href="#coach" className="foot-row">Coach</a>
            <a href="#faq" className="foot-row">FAQ</a>
          </div>
        </div>

        <div className="foot-bot">
          <div>© 2026 Canelis · Accompagnement à l&apos;emploi au Canada</div>
          <div>
            <a href="#">Mentions légales</a>
            <a href="#">CGV</a>
            <a href="/confidentialite">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
