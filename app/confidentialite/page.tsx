import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Canelis",
  description:
    "Comment Canelis collecte, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <a href="#contenu" className="skip">
        Aller au contenu
      </a>
      <header className="legal-top">
        <div className="container legal-top-inner">
          <a href="/" className="logo" aria-label="Accueil Canelis">
            <Image
              src="/logo-canelis-mark.png"
              alt="Canelis"
              width={54}
              height={44}
              priority
              style={{ height: 44, width: "auto" }}
            />
          </a>
          <a href="/" className="legal-back">
            <span aria-hidden="true">←</span> Retour à l&apos;accueil
          </a>
        </div>
      </header>

      <main className="container" id="contenu">
        <article className="legal-wrap">
          <h1>Politique de confidentialité</h1>
          <p className="legal-updated">Dernière mise à jour : 19 juillet 2026</p>

          <p className="legal-lead">
            Canelis accompagne des chercheurs d&apos;emploi en Afrique francophone qui visent le
            Canada. Nous accordons une grande importance à la protection de vos renseignements
            personnels. Cette politique explique quelles données nous collectons, pourquoi, et les
            droits dont vous disposez, conformément à la <strong>Loi 25</strong> du Québec (Loi
            sur la protection des renseignements personnels dans le secteur privé).
          </p>

          <h2>1. Responsable des renseignements personnels</h2>
          <p>
            Les renseignements sont recueillis par <strong>Canelis</strong>, service
            d&apos;accompagnement à l&apos;emploi établi à Trois-Rivières (Québec, Canada). Pour
            toute question relative à cette politique ou à vos données, vous pouvez nous joindre :
          </p>
          <ul>
            <li>
              WhatsApp :{" "}
              <a href="https://wa.me/14382825447" target="_blank" rel="noopener noreferrer">
                +1 438 282 5447
              </a>
            </li>
            <li>
              Courriel : <a href="mailto:hello@canelis.net">hello@canelis.net</a>
            </li>
          </ul>

          <h2>2. Renseignements que nous collectons</h2>
          <p>
            Le formulaire de prise de rendez-vous ne stocke rien sur nos serveurs : il sert
            uniquement à préparer un message <strong>WhatsApp pré-rempli</strong> que{" "}
            <strong>vous</strong> choisissez d&apos;envoyer. Lorsque vous l&apos;envoyez, nous
            recevons via WhatsApp les renseignements que vous nous transmettez volontairement :
          </p>
          <ul>
            <li>votre nom complet ;</li>
            <li>votre numéro WhatsApp ;</li>
            <li>votre pays de résidence et la province canadienne visée ;</li>
            <li>le service souhaité et le créneau d&apos;appel préféré ;</li>
            <li>tout message que vous choisissez d&apos;ajouter au sujet de votre projet.</li>
          </ul>
          <p>
            Nous ne collectons <strong>aucun</strong> renseignement sensible, n&apos;utilisons pas
            de traceurs publicitaires et ne conservons vos informations dans{" "}
            <strong>aucune base de données</strong> : elles restent dans notre conversation
            WhatsApp.
          </p>

          <h2>3. Finalités de la collecte</h2>
          <p>Vos renseignements servent exclusivement à :</p>
          <ul>
            <li>vous recontacter au sujet de votre demande et planifier l&apos;appel découverte ;</li>
            <li>comprendre votre projet afin de vous proposer le bon accompagnement ;</li>
            <li>assurer le suivi de la prestation si vous décidez de travailler avec nous.</li>
          </ul>
          <p>
            Nous n&apos;utilisons jamais vos données à des fins de prospection non sollicitée et ne
            les vendons pas.
          </p>

          <h2>4. Consentement</h2>
          <p>
            En cochant la case de consentement du formulaire, vous acceptez que vos informations
            soient utilisées pour vous recontacter au sujet de votre demande. Vous pouvez retirer
            votre consentement à tout moment (voir la section « Vos droits »).
          </p>

          <h2>5. WhatsApp et destinataires</h2>
          <p>
            Votre demande nous parvient et est conservée dans notre messagerie{" "}
            <strong>WhatsApp</strong>, service exploité par Meta Platforms. À ce titre, les
            messages transitent par l&apos;infrastructure de WhatsApp, qui peut traiter des données
            sur des serveurs situés <strong>à l&apos;extérieur du Québec</strong>. L&apos;usage de
            WhatsApp est régi par sa propre{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              politique de confidentialité
            </a>
            . Seules les personnes de Canelis qui interviennent dans votre accompagnement ont accès
            à ces échanges. Nous ne partageons vos informations avec aucun tiers à des fins
            commerciales.
          </p>

          <h2>6. Durée de conservation</h2>
          <p>
            Nous conservons notre conversation WhatsApp le temps nécessaire au traitement de votre
            demande et, le cas échéant, à la réalisation de la prestation, puis pendant une période
            raisonnable à des fins de suivi. Vous pouvez à tout moment nous demander de supprimer
            cet échange.
          </p>

          <h2>7. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures raisonnables (accès restreint, connexions chiffrées,
            hébergement sécurisé) pour protéger vos renseignements contre la perte, l&apos;accès non
            autorisé ou la divulgation.
          </p>

          <h2>8. Vos droits</h2>
          <p>Conformément à la Loi 25, vous avez le droit de :</p>
          <ul>
            <li>accéder aux renseignements que nous détenons à votre sujet ;</li>
            <li>les faire rectifier s&apos;ils sont inexacts ou incomplets ;</li>
            <li>retirer votre consentement et demander la suppression de vos données ;</li>
            <li>demander la communication de vos renseignements dans un format technologique structuré (portabilité).</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez-nous à{" "}
            <a href="mailto:hello@canelis.net">hello@canelis.net</a>. Nous répondons dans les
            délais prévus par la loi.
          </p>

          <h2>9. Plainte auprès de la Commission d&apos;accès à l&apos;information</h2>
          <p>
            Si vous estimez que vos droits n&apos;ont pas été respectés, vous pouvez déposer une
            plainte auprès de la{" "}
            <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">
              Commission d&apos;accès à l&apos;information du Québec (CAI)
            </a>
            .
          </p>

          <h2>10. Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique afin de refléter des changements légaux ou
            opérationnels. La date de dernière mise à jour figure en haut de cette page.
          </p>

          <p className="legal-note">
            Cette page reflète les pratiques actuelles de Canelis. Certaines informations légales
            (dénomination officielle, coordonnées du responsable de la protection des
            renseignements personnels) seront précisées avant le lancement public.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
