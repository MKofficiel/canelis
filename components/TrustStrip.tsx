import { FadeUp } from "@/components/motion/FadeUp";

// TODO: ajuster les données selon ce qui est tenable côté coach
const KPIS = [
  { kpi: "Gratuit", label: "Premier appel découverte · sans engagement" },
  { kpi: "< 24 h", label: "Réponse WhatsApp en jours ouvrés" },
  { kpi: "Français", label: "Coaching humain · 100 % en français" },
  { kpi: "Trois-Rivières", label: "Coach installé au Québec" },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Repères de confiance">
      <div className="container">
        <FadeUp>
          <div className="trust-grid">
            {KPIS.map((it) => (
              <div className="trust-cell" key={it.label}>
                <div className="trust-kpi">{it.kpi}</div>
                <div className="trust-label">{it.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
