import { FadeUp } from "@/components/motion/FadeUp";

export function CtaBig() {
  return (
    <section className="ctab">
      <div className="container">
        <FadeUp>
          <div className="ctab-inner">
            <FadeUp>
              <div className="eye">Réserver</div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2>Commencez par un appel de 15 minutes.</h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p>
                On fait le point sur votre situation, votre province cible et le service adapté.
                Gratuit, sans engagement, réponse WhatsApp sous 24 h ouvrées.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <a className="btn accent lg" href="#rdv">
                Réserver mon appel gratuit <span className="arrow">→</span>
              </a>
            </FadeUp>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
