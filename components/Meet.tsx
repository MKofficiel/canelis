import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

export function Meet() {
  return (
    <section className="meet" id="coach">
      <div className="container">
        <div className="meet-grid">
          <FadeUp y={36}>
            <div className="meet-img">
              <Image
                src="/photoPro.jpg"
                alt="KOFFI Kouamé Patrick, coach carrière Canelis"
                width={1100}
                height={1280}
                sizes="(max-width: 768px) 100vw, 420px"
                className="meet-img-photo"
              />
            </div>
          </FadeUp>

          <div className="meet-body">
            <FadeUp delay={0.08}>
              <div className="eye">À propos</div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2>KOFFI Kouamé Patrick, coach carrière à Trois-Rivières.</h2>
            </FadeUp>

            {/* TODO: ajuster avec le vrai parcours de Patrick (origine, formation, métier avant) */}
            <FadeUp delay={0.18}>
              <p>
                Je suis arrivé de Côte d&apos;Ivoire en 2024, diplôme en poche. Pendant des mois,
                mes candidatures sont restées sans réponse.
              </p>
            </FadeUp>

            {/* TODO: ajuster les détails de l'expérience personnelle */}
            <FadeUp delay={0.22}>
              <p>
                Mon CV ne passait pas les filtres ATS. Ma lettre suivait les codes français, pas
                les codes canadiens. Je ne savais pas ce qu&apos;un recruteur d&apos;ici attendait en
                entrevue.
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p>
                J&apos;ai repris chaque élément un par un : le format nord-américain,
                l&apos;optimisation par mots-clés, la méthode STAR, la façon de parler salaire.
                C&apos;est ce qui a fini par ouvrir les portes, et c&apos;est exactement ce que je
                transmets aujourd&apos;hui.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p>
                <strong>Pourquoi Canelis :</strong> ces derniers mois, des dizaines de personnes
                m&apos;ont demandé de l&apos;aide pour leurs candidatures. J&apos;ai préféré
                structurer un accompagnement sérieux plutôt que de donner des conseils éparpillés.
                Un cadre clair, des livrables définis, un suivi réel.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
