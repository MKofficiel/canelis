import { FadeUp } from "@/components/motion/FadeUp";

export function CtaBig() {
  return (
    <section className="ctab">
      <div className="container">
        <FadeUp>
          <div className="ctab-inner">
            <FadeUp delay={0.08}>
              <h3>Votre prochain emploi commence par un appel.</h3>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p>
                15 minutes suffisent pour comprendre votre situation, identifier le bon levier (CV,
                lettre, entrevues, coaching) et construire un plan concret. Gratuit, sans
                engagement.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <a className="btn primary lg" href="#rdv">
                Réserver mon appel gratuit <span className="arrow">→</span>
              </a>
            </FadeUp>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
