import { FadeUp } from "@/components/motion/FadeUp";

export function Meet() {
  return (
    <section className="meet" id="coach">
      <div className="container">
        <div className="meet-grid">
          <FadeUp y={36}>
            <div className="meet-img" aria-hidden="true">
              <div className="meet-img-mark">PK</div>
            </div>
          </FadeUp>

          <div className="meet-body">
            <FadeUp delay={0.08}>
              <div className="eye">À propos</div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h3>Patrick Kouamé Koffy, votre allié au Canada.</h3>
            </FadeUp>

            {/* TODO: ajuster avec le vrai parcours de Patrick (origine, formation, métier avant) */}
            <FadeUp delay={0.18}>
              <p>
                Installé à Trois-Rivières (Québec) depuis 2024, j&apos;ai débarqué de Côte d&apos;Ivoire avec un
                diplôme en poche et l&apos;envie de bâtir une carrière au Canada.
              </p>
            </FadeUp>

            {/* TODO: ajuster les détails de l'expérience personnelle */}
            <FadeUp delay={0.22}>
              <p>
                J&apos;ai postulé pendant des mois sans réponse. Mon CV ne passait pas les filtres
                ATS, ma lettre parlait comme en France au lieu du ton canadien, et je ne savais
                pas comment me préparer aux entrevues d&apos;ici.
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p>
                Aujourd&apos;hui, je sais exactement ce qui ne passe pas dans une candidature au
                Canada — et ce qui passe. Le format CV nord-américain, les codes culturels du
                Québec et du Canada anglais, l&apos;optimisation par mots-clés, la méthode STAR en
                entrevue, la négociation salariale.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p>
                <strong>Pourquoi je lance Canelis aujourd&apos;hui :</strong> parce que des dizaines
                de personnes m&apos;ont demandé de l&apos;aide ces derniers mois. Je préfère
                structurer un vrai accompagnement plutôt que des conseils éparpillés. Vous payez
                pour un coaching humain, ciblé, et sérieux jusqu&apos;à la signature.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
