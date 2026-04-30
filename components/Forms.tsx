import { FadeUp } from "@/components/motion/FadeUp";
import { RdvForm } from "./RdvForm";

export function Forms() {
  return (
    <section className="forms" id="rdv">
      <div className="container">
        <div className="forms-single">
          <FadeUp>
            <RdvForm />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
