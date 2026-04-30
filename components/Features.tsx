import { Phone, ClipboardText, CheckCircle, ChatCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const FEATURES = [
  {
    num: "01",
    icon: Phone,
    title: "Appel découverte",
    desc: "15 min gratuites pour comprendre votre projet, votre province cible au Canada, et choisir le bon service.",
  },
  {
    num: "02",
    icon: ClipboardText,
    title: "Brief & questionnaire",
    desc: "On rassemble vos infos, expériences et objectifs via un formulaire guidé. Précis, sans paperasse.",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Livraison & révisions",
    desc: "On vous livre CV, lettre ou plan. 2 tours de révision inclus pour ajuster jusqu'au détail.",
  },
  {
    num: "04",
    icon: ChatCircle,
    title: "Suivi entrevues",
    desc: "On reste disponible quand les entretiens arrivent. Préparation, débrief, négociation jusqu'à la signature.",
  },
];

export function Features() {
  return (
    <section className="feat" id="processus">
      <div className="container">
        <FadeUp>
          <div className="feat-block">
            <div className="feat-head">
              <h3>De votre candidature à votre signature.</h3>
              <p className="feat-head-p">
                Un parcours linéaire, sans surprise. Vous savez exactement où vous en êtes à chaque
                étape, du premier appel jusqu&apos;à la signature de votre offre.
              </p>
            </div>
            <StaggerGroup className="feat-cards" stagger={0.08} delayChildren={0.1}>
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <StaggerItem className="feat-card" key={f.num}>
                    <div className="feat-card-top">
                      <span className="feat-card-num">{f.num}</span>
                      <Icon className="feat-card-icon" size={20} weight="regular" />
                    </div>
                    <div className="feat-card-rule" aria-hidden="true" />
                    <h4 className="feat-card-t">{f.title}</h4>
                    <p className="feat-card-d">{f.desc}</p>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
