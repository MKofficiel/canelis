import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// TODO: ajuster les profils selon les vrais clients ciblés
type Persona = {
  tag: string;
  title: string;
  desc: string;
  service: string;
};

const PERSONAS: Persona[] = [
  {
    tag: "Profil 01",
    title: "Diplômés universitaires",
    desc: "Bachelor, master ou doctorat en main. Vous visez un emploi qualifié au Canada et vous ne savez pas comment vous y prendre.",
    service: "CV canadien · Coaching",
  },
  {
    tag: "Profil 02",
    title: "Hommes et femmes de métier",
    desc: "Au moins 2 ans d'expérience comme infirmier, mécanicien, électricien, plombier, boulanger. Ces métiers figurent parmi les professions en demande au Canada.",
    service: "CV canadien · Lettre",
  },
  {
    tag: "Profil 03",
    title: "Cadres et profils confirmés",
    desc: "Vous visez un poste à responsabilité au Canada, avec négociation salariale et préparation entrevue à la hauteur du package.",
    service: "Coaching carrière 1-à-1",
  },
  {
    tag: "Profil 04",
    title: "Personnes en reconversion",
    desc: "Vous changez de secteur. On structure votre nouveau positionnement et votre récit professionnel.",
    service: "Coaching · Lettre",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testi">
        <div className="testi-inner">
          <div className="testi-head">
            <FadeUp>
              <div className="eye">Profils</div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2>Pour qui c&apos;est fait.</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="testi-head-p">
                Canelis accompagne quatre profils qui visent le marché canadien.
              </p>
            </FadeUp>
          </div>
          <StaggerGroup className="testi-grid" stagger={0.08}>
            {PERSONAS.map((p) => (
              <StaggerItem className="testi-card persona" key={p.tag}>
                <div className="persona-tag">{p.tag}</div>
                <h3 className="persona-t">{p.title}</h3>
                <p className="persona-d">{p.desc}</p>
                <div className="persona-svc">{p.service}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
