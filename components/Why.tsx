import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const PILLARS = [
  {
    n: "01",
    t: "Les codes du marché",
    d: "Formats, ton, attentes RH : le Canada ne recrute pas comme la France ou l'Afrique de l'Ouest. Chaque livrable est adapté à votre province et à votre secteur cible.",
  },
  {
    n: "02",
    t: "Un interlocuteur, pas un logiciel",
    d: "Vous travaillez directement avec un coach qui a traversé le processus lui-même. Réponses sous 24 h ouvrées, en français.",
  },
  {
    n: "03",
    t: "Des livrables, pas de la théorie",
    d: "Vous repartez avec des documents utilisables : CV, lettre, plan de recherche, trames d'entrevue. Deux tours de révision inclus sur chacun.",
  },
];

export function Why() {
  return (
    <section className="why">
      <div className="container">
        <FadeUp>
          <div className="eye">Pourquoi Canelis</div>
        </FadeUp>
        <FadeUp delay={0.06}>
          <h2>Ce qui fait la différence dans une candidature au Canada.</h2>
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
