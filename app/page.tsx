import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Meet } from "@/components/Meet";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { Engagement } from "@/components/Engagement";
import { Forms } from "@/components/Forms";
import { Faq } from "@/components/Faq";
import { CtaBig } from "@/components/CtaBig";
import { Footer } from "@/components/Footer";
import { WaFloat } from "@/components/WaFloat";

export default function Page() {
  return (
    <>
      <a href="#contenu" className="skip">
        Aller au contenu
      </a>
      <Nav />
      <main id="contenu">
        <Hero />
        <TrustStrip />
        <Services />
        <Why />
        <Meet />
        <Testimonials />
        <Features />
        <Engagement />
        <Forms />
        <Faq />
        <CtaBig />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
