"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { DURATION, EASE_OUT_QUINT } from "@/lib/motion/config";

const FAQ = [
  { q: "À qui s'adresse Canelis ?", a: "Aux chercheurs d'emploi en Afrique qui visent le Canada : diplômés, profils qualifiés, hommes de métier avec au moins 02 ans d'expérience, personnes en reconversion. Si vous postulez au Canada, on peut vous aider." },
  { q: "Faites-vous de l'accompagnement immigration ou visa ?", a: "Non. Canelis est uniquement spécialisé dans l'accompagnement à l'emploi : CV, lettres, entrevues, coaching de carrière. Pour toutes démarches administratives liées au séjour et aux différents programmes d'immigration, consultez un professionnel agréé en immigration." },
  { q: "En combien de temps puis-je décrocher un emploi ?", a: "Cela dépend de votre secteur, de votre niveau d'expérience, de la province visée et de votre disponibilité. Notre rôle : vous donner les meilleurs outils pour aller vite. Un CV qui passe les ATS, des entretiens préparés, et un suivi régulier." },
  { q: "Travaillez-vous pour toutes les provinces canadiennes ?", a: "Oui. Nos coachs adaptent vos livrables à votre province cible : Québec (français), Ontario, Alberta, Colombie-Britannique, Manitoba, Nouveau-Brunswick. Le ton, les codes et les attentes varient. On cale sur votre cible." },
  { q: "Faut-il parler anglais ?", a: "Pas forcément. Le Québec recrute majoritairement en français, et plusieurs provinces accueillent des candidats francophones. Selon votre profil et la province visée, on adapte CV et lettre dans la bonne langue." },
  { q: "Comment se passe la préparation aux entrevues ?", a: "Deux sessions d'1 h en visio. On simule des entrevues réelles, on enregistre, on débriefe, puis on travaille la méthode STAR et la négociation salariale." },
  { q: "Quels sont vos délais de livraison ?", a: "CV : 5 jours ouvrés. Lettre : 48 h. Coaching : démarrage sous 7 jours après l'appel découverte." },
  { q: "Comment payer depuis l'Afrique ?", a: "Wave, Orange Money, MTN Money, Moov Money, virement bancaire et carte Visa/Mastercard. Échéances et modalités définies ensemble lors de l'appel découverte." },
  { q: "Garantissez-vous l'embauche ?", a: "Aucun coach sérieux ne le garantit. Ce que nous garantissons : un CV qui passe les ATS, des entretiens préparés à fond, et un suivi personnalisé jusqu'à votre signature." },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-head">
            <FadeUp>
              <div className="eye">FAQ</div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2>Vos questions, nos réponses.</h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p>
                Les questions qui reviennent le plus souvent avant de se lancer. Pas trouvé la
                vôtre ?
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="faq-head-contact">
                <div className="faq-head-contact-t">Une question avant de commencer ?</div>
                <div className="faq-head-contact-d">
                  Réponse sous 24h ouvrées, en français, par un humain.
                </div>
                <a
                  href="https://wa.me/14382825447"
                  className="btn primary"
                  style={{ padding: "10px 8px 10px 16px", fontSize: 13 }}
                >
                  <span>Ouvrir WhatsApp</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="faq-list">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              const n = String(i + 1).padStart(2, "0");
              return (
                <FadeUp key={i} delay={i * 0.04}>
                  <div className={`faq-item${isOpen ? " open" : ""}`}>
                    <button
                      className="faq-q"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-n">{n}</span>
                      <span className="faq-q-t">{item.q}</span>
                      <m.span
                        className="faq-toggle"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: DURATION.short, ease: EASE_OUT_QUINT }}
                      >
                        +
                      </m.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          key="a"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: DURATION.short, ease: EASE_OUT_QUINT }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="faq-a-inner">{item.a}</div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
