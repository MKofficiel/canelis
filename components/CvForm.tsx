"use client";

import { useState, type KeyboardEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, m, useAnimate, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_QUINT } from "@/lib/motion/config";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CV_COUNTRIES,
  CV_ECA,
  CV_EXPERIENCE,
  CV_LANGUAGES,
  CV_PROVINCES,
  CV_SECTORS,
  CV_STEPS,
  cvSchema,
  type CvInput,
} from "@/lib/schemas/cv";

export function CvForm() {
  const [step, setStep] = useState(0);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduced = useReducedMotion();

  const form = useForm<CvInput>({
    resolver: zodResolver(cvSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      whatsapp: "",
      country: "Burkina Faso",
      targetRole: "",
      language: "Français",
      province: "Indifférent",
      currentRole: "",
      company: "",
      period: "",
      achievements: "",
      sector: "Tech / Informatique",
      diploma: "",
      school: "",
      graduationYear: "",
      diplomaCountry: "",
      eca: "Non, pas encore",
      certifications: "",
      skills: ["Python", "Django", "PostgreSQL", "Git"],
      languages: "",
      experience: "2-5 ans",
      comments: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    // useFieldArray expects an array-typed field; string[] works via `as never`
    name: "skills" as never,
  });

  const isLast = step === CV_STEPS.length - 1;

  async function onNext() {
    const fieldsToValidate = CV_STEPS[step].fields as readonly (keyof CvInput)[];
    const ok = await form.trigger(fieldsToValidate as never);
    if (!ok) {
      if (!reduced && scope.current) {
        animate(scope.current, { x: [0, -6, 6, -4, 4, 0] }, { duration: 0.34 });
      }
      return;
    }
    if (isLast) {
      await form.handleSubmit(onSubmit)();
    } else {
      setStep(step + 1);
    }
  }

  function onSubmit(values: CvInput) {
    console.log("[CV] submit", values);
    alert("Dossier envoyé ! Nous revenons vers vous sous 24h sur WhatsApp.");
    form.reset();
    setStep(0);
  }

  function addSkill(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const target = e.currentTarget;
    const v = target.value.trim();
    if (!v) return;
    append(v as never);
    target.value = "";
  }

  const stepMotion = {
    initial: { opacity: 0, x: reduced ? 0 : 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduced ? 0 : -16 },
    transition: { duration: DURATION.short, ease: EASE_OUT_QUINT },
  };

  return (
    <Form {...form}>
      <div ref={scope} className="form-card dark" id="cv">
        <div className="eye light" style={{ color: "var(--gold)" }}>
          Dossier CV canadien
        </div>
        <h3>
          Soumettez votre dossier.
        </h3>
        <p className="form-card-d">
          4 étapes · environ 8 minutes. Tout peut être relu et modifié avant l&apos;envoi final.
        </p>

        <div className="stepper">
          {CV_STEPS.map((_, i) => (
            <div key={i} className={`step${i <= step ? " on" : ""}`} />
          ))}
        </div>
        <div className="step-label">
          Étape <b>{step + 1} / {CV_STEPS.length}</b> · {CV_STEPS[step].label}
        </div>

        <AnimatePresence mode="wait" initial={false}>
        {step === 0 && (
          <m.div key="step-0" {...stepMotion}>
            <div className="row2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Prénom</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Ibrahim" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Nom</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Konaté" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Email</FormLabel>
                  <FormControl>
                    <input className="input" type="email" placeholder="vous@email.com" {...field} />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <div className="row2">
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">WhatsApp</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="+226 70 00 00 00" inputMode="tel" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Pays</FormLabel>
                    <FormControl>
                      <select className="select" {...field}>
                        {CV_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="targetRole"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Poste ou domaine visé</FormLabel>
                  <FormControl>
                    <input className="input" placeholder="Développeur full-stack, Comptable…" {...field} />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <div className="row2">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Langue du CV</FormLabel>
                    <FormControl>
                      <select className="select" {...field}>
                        {CV_LANGUAGES.map((l) => <option key={l}>{l}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Province visée</FormLabel>
                    <FormControl>
                      <select className="select" {...field}>
                        {CV_PROVINCES.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
          </m.div>
        )}

        {step === 1 && (
          <m.div key="step-1" {...stepMotion}>
            <FormField
              control={form.control}
              name="currentRole"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Poste actuel ou le plus récent</FormLabel>
                  <FormControl>
                    <input className="input" placeholder="Développeur full-stack" {...field} />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <div className="row2">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Entreprise</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Orange Burkina" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="period"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Période</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Jan 2022 à aujourd'hui" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="achievements"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Missions & résultats</FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea"
                      placeholder="3-5 réalisations chiffrées : 'Développé…', 'Réduit de X % le…', 'Livré N projets…'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sector"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Secteur</FormLabel>
                  <FormControl>
                    <select className="select" {...field}>
                      {CV_SECTORS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
          </m.div>
        )}

        {step === 2 && (
          <m.div key="step-2" {...stepMotion}>
            <FormField
              control={form.control}
              name="diploma"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Diplôme le plus élevé</FormLabel>
                  <FormControl>
                    <input className="input" placeholder="Licence en informatique" {...field} />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <div className="row2">
              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Établissement</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Université de Ouagadougou" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Année d&apos;obtention</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="2022" inputMode="numeric" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <div className="row2">
              <FormField
                control={form.control}
                name="diplomaCountry"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Pays d&apos;obtention</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Burkina Faso" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eca"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Équivalence ECA ?</FormLabel>
                    <FormControl>
                      <select className="select" {...field}>
                        {CV_ECA.map((e) => <option key={e}>{e}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="certifications"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Certifications complémentaires</FormLabel>
                  <FormControl>
                    <textarea className="textarea" placeholder="AWS, Google, TOEIC, TEF, PMP…" {...field} />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
          </m.div>
        )}

        {step === 3 && (
          <m.div key="step-3" {...stepMotion}>
            <FormField
              control={form.control}
              name="skills"
              render={() => (
                <FormItem className="field">
                  <FormLabel className="label">Compétences techniques</FormLabel>
                  <input
                    className="input"
                    placeholder="Taper puis Entrée (ex : Python, Excel, SAP…)"
                    onKeyDown={addSkill}
                  />
                  <div className="chiplist">
                    {fields.map((f, i) => (
                      <span className="skillchip" key={f.id}>
                        {(form.getValues(`skills.${i}`) as string) ?? ""}
                        <button
                          type="button"
                          className="skillchip-x"
                          onClick={() => remove(i)}
                          aria-label="Retirer"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
            <div className="row2">
              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Langues parlées</FormLabel>
                    <FormControl>
                      <input className="input" placeholder="Français (natif), Anglais (B2)…" {...field} />
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel className="label">Années d&apos;expérience</FormLabel>
                    <FormControl>
                      <select className="select" {...field}>
                        {CV_EXPERIENCE.map((e) => <option key={e}>{e}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage className="form-err" />
                  </FormItem>
                )}
              />
            </div>
            <div className="field">
              <label className="label">CV actuel (PDF, optionnel mais recommandé)</label>
              <label className="upload">
                <b>Glisser un PDF ou cliquer pour parcourir</b>
                Taille max 10 Mo
                <input type="file" accept="application/pdf" style={{ display: "none" }} />
              </label>
            </div>
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem className="field">
                  <FormLabel className="label">Commentaires libres</FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea"
                      placeholder="Tout ce qu'on doit savoir pour personnaliser votre CV au mieux…"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-err" />
                </FormItem>
              )}
            />
          </m.div>
        )}
        </AnimatePresence>

        <div className="nav2">
          {step > 0 && (
            <button type="button" className="back" onClick={() => setStep(step - 1)}>
              ← Retour
            </button>
          )}
          <button
            type="button"
            className="submit"
            style={{ flex: 1 }}
            onClick={onNext}
            disabled={form.formState.isSubmitting}
          >
            {isLast
              ? form.formState.isSubmitting
                ? "Envoi…"
                : "Envoyer mon dossier"
              : "Étape suivante"}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </Form>
  );
}
