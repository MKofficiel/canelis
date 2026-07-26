import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// TODO: ajuster les engagements selon ce que Patrick veut tenir
type Promise = {
  num: string;
  title: string;
  desc: string;
};

const PROMISES: Promise[] = [
  {
    num: "01",
    title: "Premier appel gratuit",
    desc: "15 minutes d'appel découverte sans engagement. Si on ne peut pas vous aider, on vous le dit franchement.",
  },
  {
    num: "02",
    title: "Révisions incluses",
    desc: "2 tours de révisions inclus sur chaque livrable (CV, lettre, plan). On ajuste jusqu'à ce que ce soit juste.",
  },
  {
    num: "03",
    title: "Vos livrables, à vie",
    desc: "Tous les documents produits ensemble vous appartiennent. Pas d'abonnement, pas de licence.",
  },
];

export function Engagement() {
  return (
    <section className="engage" id="engagement">
      <div className="container">
        <div className="engage-head">
          <FadeUp>
            <div className="eye">Notre engagement</div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>Trois promesses simples, tenues à la lettre.</h2>
          </FadeUp>
        </div>

        <StaggerGroup className="engage-grid" stagger={0.08} delayChildren={0.1}>
          {PROMISES.map((p) => (
            <StaggerItem className="engage-card" key={p.num}>
              <span className="engage-num">{p.num}</span>
              <h3 className="engage-t">{p.title}</h3>
              <p className="engage-d">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
