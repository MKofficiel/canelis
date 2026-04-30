import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const PILLARS = [
  {
    n: "01",
    t: "Compréhension du marché canadien",
    d: "On connaît les codes : ATS, ton attendu, attentes RH par province et par secteur. Québec, Ontario, Alberta : chaque livrable est adapté à votre cible.",
  },
  {
    n: "02",
    t: "Approche humaine",
    d: "Pas de templates génériques. Pas de robot. Vous parlez à un coach qui a fait le chemin et qui répond sous 24 h, en français.",
  },
  {
    n: "03",
    t: "Approche concrète",
    d: "Pas de théorie, pas de jargon. Chaque livrable (CV, lettre, plan) est conçu pour décrocher des entretiens, pas pour figurer dans un classement.",
  },
];

export function Why() {
  return (
    <section className="why">
      <div className="container">
        <FadeUp>
          <h2>L&apos;expertise du marché canadien, l&apos;humain en plus.</h2>
        </FadeUp>

        <StaggerGroup className="why-pillars" stagger={0.08} delayChildren={0.1}>
          {PILLARS.map((p) => (
            <StaggerItem className="why-pillar" key={p.n}>
              <div className="why-pillar-n">{p.n}</div>
              <div className="why-pillar-t">{p.t}</div>
              <div className="why-pillar-d">{p.d}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
