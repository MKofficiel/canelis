"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  COUNTRIES,
  PROVINCES,
  SERVICES,
  SLOT_COUNT,
  getSlots,
  normalizeWhatsapp,
  rdvSchema,
  type RdvInput,
  type Slot,
} from "@/lib/schemas/rdv";

const WHATSAPP_NUMBER = "14382825447";

export function RdvForm() {
  const [submitState, setSubmitState] = useState<"idle" | "ok">("idle");
  const [waUrl, setWaUrl] = useState<string>("");
  // Créneaux générés au montage (côté client) pour rester toujours à jour.
  const [slots, setSlots] = useState<Slot[]>([]);
  const slotLabelId = useId();

  useEffect(() => {
    setSlots(getSlots());
  }, []);

  const form = useForm<RdvInput>({
    resolver: zodResolver(rdvSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      country: "Sénégal",
      province: "Indifférent",
      service: SERVICES[0],
      slot: "",
      message: "",
      consent: false as unknown as true,
    },
    mode: "onTouched",
  });

  function onSubmit(values: RdvInput) {
    const slot = slots.find((s) => s.id === values.slot);
    const slotLabel = slot ? `${slot.day} à ${slot.time}` : values.slot;

    const text = [
      "Bonjour Canelis, je souhaite réserver un appel découverte gratuit.",
      "",
      `• Nom : ${values.name}`,
      `• WhatsApp : ${normalizeWhatsapp(values.whatsapp)}`,
      `• Pays : ${values.country}`,
      `• Province visée : ${values.province}`,
      `• Service : ${values.service}`,
      `• Créneau préféré : ${slotLabel} (heure du Québec)`,
      values.message ? `• Message : ${values.message}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    // Ouvre WhatsApp avec le message pré-rempli (app mobile ou WhatsApp Web).
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitState("ok");
    form.reset();
  }

  if (submitState === "ok") {
    return (
      <div className="form-card dark form-success" role="status" aria-live="polite">
        <div className="eye">Presque terminé</div>
        <h3>On ouvre WhatsApp…</h3>
        <p className="form-card-d">
          Votre demande est déjà rédigée dans WhatsApp : il ne vous reste qu&apos;à appuyer sur
          <strong> Envoyer</strong>. Si l&apos;application ne s&apos;est pas ouverte, utilisez le
          bouton ci-dessous.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="submit"
          style={{ textDecoration: "none" }}
        >
          Ouvrir WhatsApp
          <span className="arrow">→</span>
        </a>
        <button
          type="button"
          className="back"
          style={{ marginTop: 12 }}
          onClick={() => setSubmitState("idle")}
        >
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="form-card dark"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <div className="eye">Appel découverte gratuit</div>
        <h3>Réservez votre appel gratuit.</h3>
        <p className="form-card-d">
          15 min en visio pour identifier le bon service (CV, lettre, entrevues, coaching) et
          bâtir un plan concret. Votre demande part directement sur WhatsApp, réponse sous 24 h
          ouvrées.
        </p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="field">
              <FormLabel className="label">Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Fatou Diop" autoComplete="name" {...field} />
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
                  <Input
                    placeholder="+221 77 000 00 00"
                    inputMode="tel"
                    autoComplete="tel"
                    {...field}
                  />
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
                <FormLabel className="label">Pays de résidence</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="form-err" />
              </FormItem>
            )}
          />
        </div>

        <div className="row2">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="field">
                <FormLabel className="label">Province visée</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PROVINCES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="form-err" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="field">
                <FormLabel className="label">Service souhaité</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="form-err" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="slot"
          render={({ field, fieldState }) => (
            <FormItem className="field">
              <FormLabel className="label" id={slotLabelId}>
                Créneau préféré <span className="label-note">(heure du Québec)</span>
              </FormLabel>
              <FormControl>
                <div
                  className="slots"
                  role="radiogroup"
                  aria-labelledby={slotLabelId}
                  aria-invalid={!!fieldState.error}
                  aria-busy={slots.length === 0}
                >
                  {slots.length === 0
                    ? /* Squelettes : les créneaux sont calculés au montage pour
                         rester à jour malgré le prérendu statique. Sans eux, la
                         grille passait de 0 à 10 cases et décalait la page. */
                      Array.from({ length: SLOT_COUNT }, (_, i) => (
                        <span key={i} className="slot slot-skeleton" aria-hidden="true" />
                      ))
                    : slots.map((s) => (
                        <label
                          key={s.id}
                          className={`slot${field.value === s.id ? " on" : ""}`}
                        >
                          <input
                            type="radio"
                            className="slot-input"
                            name={field.name}
                            value={s.id}
                            checked={field.value === s.id}
                            onChange={() => field.onChange(s.id)}
                            onBlur={field.onBlur}
                          />
                          <span className="slot-d">{s.day}</span>
                          <span>{s.time}</span>
                        </label>
                      ))}
                </div>
              </FormControl>
              <FormMessage className="form-err" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="field">
              <FormLabel className="label">
                Quelques mots sur votre projet (optionnel)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex : Je suis développeuse à Abidjan, je vise Montréal, j'ai 4 ans d'expérience en JavaScript…"
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-err" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="field consent-field">
              <label className="consent">
                <input
                  type="checkbox"
                  className="consent-box"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  aria-invalid={!!form.formState.errors.consent}
                />
                <span className="consent-text">
                  J&apos;accepte que mes informations soient utilisées pour me recontacter au
                  sujet de ma demande.{" "}
                  <a href="/confidentialite" className="consent-link">
                    Politique de confidentialité
                  </a>
                </span>
              </label>
              <FormMessage className="form-err" />
            </FormItem>
          )}
        />

        <button type="submit" className="submit">
          Réserver sur WhatsApp
          <span className="arrow">→</span>
        </button>
      </form>
    </Form>
  );
}
