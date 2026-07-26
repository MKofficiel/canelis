"use client";

/* ============================================================
   SERVICES — Redesign Linear/Notion grade

   AVANT : 4 cards alternées dark/light/light/dark, padding 40px,
           titre H3 sur 2 lignes via <br>, num en italique,
           liste de 4 items "bold + sub" séparés par bordures,
           prix "Tarif sur demande" + CTA pleine largeur en bas.
           Header H2 centré + eye-line + span serif gold.

   APRÈS : 4 cards uniformes (light), 1 col mobile / 2 col tablet
           / 3 col desktop avec la card "Coaching" en featured
           plein-largeur (gold-soft + tag "Recommandé").
           Header H2 left-aligned, sous-titre body, pas d'eye-line.
           Chaque card = icône Lucide + titre court + prix + 3
           bullets + CTA inline gold-deep "Choisir ce service →".
   ============================================================ */

import {
  FileText,
  Envelope,
  ChatCircle,
  Briefcase,
  Check,
  type Icon,
} from "@phosphor-icons/react";
import { m } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { DURATION, EASE_OUT_QUINT, VIEWPORT } from "@/lib/motion/config";

type Service = {
  id: string;
  icon: Icon;
  title: string;
  price: string;
  priceMeta: string;
  bullets: [string, string, string];
  cta: string;
  featured?: { tag: string };
};

const SERVICES: Service[] = [
  {
    id: "cv",
    icon: FileText,
    title: "CV canadien",
    price: "Tarif sur demande",
    priceMeta: "Livré sous 5 jours",
    bullets: [
      "Réécriture complète au format nord-américain (1-2 pages, résultats chiffrés)",
      "Les codes que les recruteurs canadiens attendent — et ceux qui vous font recaler sans le savoir",
      "Optimisation ATS : mots-clés alignés sur les offres de votre secteur",
    ],
    cta: "Choisir ce service",
  },
  {
    id: "lettre",
    icon: Envelope,
    title: "Lettre de présentation",
    price: "Tarif sur demande",
    priceMeta: "Livrée sous 48 h",
    bullets: [
      "Lettre adaptée à une offre ou à un secteur précis",
      "Ton canadien : direct, orienté réalisations",
      "Structure réutilisable pour vos candidatures suivantes",
    ],
    cta: "Choisir ce service",
  },
  {
    id: "entrevue",
    icon: ChatCircle,
    title: "Préparation entrevue",
    price: "Tarif sur demande",
    priceMeta: "2 sessions d'1 h",
    bullets: [
      "2 entrevues simulées, enregistrées et débriefées",
      "Méthode STAR appliquée à vos propres expériences",
      "Préparation à la discussion salariale",
    ],
    cta: "Choisir ce service",
  },
  {
    id: "accompagnement",
    icon: Briefcase,
    title: "Accompagnement complet A→Z",
    price: "Tarif sur demande",
    priceMeta: "De la recherche à la signature",
    bullets: [
      "On cherche les offres avec vous et on postule à votre place aux postes qui correspondent",
      "Suivi WhatsApp de bout en bout : chaque étape, chaque candidature, réponses sous 24 h ouvrées",
      "Préparation aux entretiens, négociation du salaire et accompagnement jusqu'à la signature du contrat",
    ],
    cta: "Être accompagné de A à Z",
    featured: { tag: "Recommandé" },
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <FadeUp>
          <header className="services-head">
            <div className="eye">Services</div>
            <h2>Quatre services, conçus pour le marché canadien.</h2>
            <p>
              Chaque livrable suit les standards attendus par les recruteurs et les systèmes de
              tri (ATS) au Canada.
            </p>
          </header>
        </FadeUp>

        <m.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <m.article
                key={s.id}
                className={`service${s.featured ? " featured" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: DURATION.reveal, ease: EASE_OUT_QUINT },
                  },
                }}
              >
                {s.featured && <span className="service-tag">{s.featured.tag}</span>}

                <div className="service-icon" aria-hidden="true">
                  <Icon size={28} weight="light" />
                </div>

                <div className="service-head">
                  <h3 className="service-t">{s.title}</h3>
                  <div className="service-price">
                    <span className="service-price-amount">{s.price}</span>
                    <span className="service-price-meta">{s.priceMeta}</span>
                  </div>
                </div>

                <ul className="service-bullets">
                  {s.bullets.map((b) => (
                    <li className="service-bullet" key={b}>
                      <Check size={14} weight="bold" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a className="service-cta" href="#rdv" aria-label={`${s.cta} : ${s.title}`}>
                  {s.cta}
                </a>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
