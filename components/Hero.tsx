"use client";

import Image from "next/image";
import { m } from "motion/react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { DURATION, EASE_OUT_QUINT } from "@/lib/motion/config";

export function Hero() {
  const baseT = { duration: DURATION.reveal, ease: EASE_OUT_QUINT };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-inner">
            <m.div
              className="eye"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseT, delay: 0.1 }}
            >
              Coaching emploi · Canada
            </m.div>

            <h1 className="hero-h1">
              <span className="hero-h1-line">
                <MaskReveal delay={0.25}>
                  Postulez au <span className="hl">Canada</span>
                </MaskReveal>
              </span>
              <span className="hero-h1-line">
                <MaskReveal delay={0.38}>avec les codes du marché.</MaskReveal>
              </span>
            </h1>

            <m.p
              className="hero-sub"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseT, delay: 0.55 }}
            >
              CV au format nord-américain, lettre au ton canadien, préparation aux entrevues.
              Un accompagnement structuré depuis l&apos;Afrique, avec un coach installé au Québec.
            </m.p>

            <m.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseT, delay: 0.7 }}
            >
              <a className="btn accent lg" href="#rdv">
                Réserver mon appel gratuit <span className="arrow">→</span>
              </a>
              <a className="hero-link" href="#services">
                Voir les services <span aria-hidden="true">→</span>
              </a>
            </m.div>

            <m.div
              className="hero-trust"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...baseT, delay: 0.85 }}
            >
              <div className="hero-trust-t">
                <span className="hero-trust-item"><b>100 %</b> en français</span>
                <span className="hero-trust-sep" aria-hidden="true" />
                <span className="hero-trust-item">Coach basé à Trois-Rivières, QC</span>
                <span className="hero-trust-sep" aria-hidden="true" />
                <span className="hero-trust-item">Réponse sous 24 h ouvrées</span>
              </div>
            </m.div>
          </div>

          <m.figure
            className="hero-portrait"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseT, delay: 0.6 }}
          >
            <Image
              src="/photoPro.jpg"
              alt="KOFFI Kouamé Patrick, coach carrière Canelis"
              width={1100}
              height={1280}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 480px"
              className="hero-portrait-img"
            />
            <figcaption className="hero-portrait-cap">
              <span className="hero-portrait-name">KOFFI Kouamé Patrick</span>
              <span className="hero-portrait-meta">Coach carrière · Trois-Rivières, QC</span>
            </figcaption>
          </m.figure>
        </div>
      </div>
    </section>
  );
}
