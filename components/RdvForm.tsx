"use client";

import { useState } from "react";
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
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  COUNTRIES,
  PROVINCES,
  SERVICES,
  SLOTS,
  rdvSchema,
  type RdvInput,
} from "@/lib/schemas/rdv";

export function RdvForm() {
  const [submitState, setSubmitState] = useState<"idle" | "ok" | "error">("idle");

  const form = useForm<RdvInput>({
    resolver: zodResolver(rdvSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      country: "Sénégal",
      province: "Indifférent",
      service: SERVICES[0],
      slot: 1,
      message: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(values: RdvInput) {
    try {
      console.log("[RDV] submit", values);
      await new Promise((r) => setTimeout(r, 600));
      setSubmitState("ok");
      form.reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "ok") {
    return (
      <div className="form-card dark form-success" role="status" aria-live="polite">
        <div className="eye light" style={{ color: "var(--gold)" }}>
          Demande reçue
        </div>
        <h3>Merci, on vous recontacte.</h3>
        <p className="form-card-d">
          Confirmation par WhatsApp sous 24 h ouvrées avec le créneau définitif et le lien visio.
        </p>
        <button
          type="button"
          className="submit"
          onClick={() => setSubmitState("idle")}
        >
          Envoyer une autre demande
          <span className="arrow">→</span>
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
        <div className="eye light" style={{ color: "var(--gold)" }}>
          Appel découverte gratuit
        </div>
        <h3>Réservez votre appel gratuit.</h3>
        <p className="form-card-d">
          15 min en visio pour identifier le bon levier (CV, lettre, entrevues, coaching) et bâtir
          un plan concret. Confirmation WhatsApp sous 24 h.
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
                <FormControl>
                  <Select {...field}>
                    {COUNTRIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </Select>
                </FormControl>
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
                <FormControl>
                  <Select {...field}>
                    {PROVINCES.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </Select>
                </FormControl>
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
                <FormControl>
                  <Select {...field}>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </Select>
                </FormControl>
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
              <FormLabel className="label">Créneau préféré</FormLabel>
              <FormControl>
                <div
                  className="slots"
                  role="radiogroup"
                  aria-label="Créneau"
                  aria-invalid={!!fieldState.error}
                >
                  {SLOTS.map((s, i) => (
                    <button
                      type="button"
                      key={i}
                      role="radio"
                      aria-checked={field.value === i}
                      className={`slot${field.value === i ? " on" : ""}`}
                      onClick={() => field.onChange(i)}
                    >
                      <div className="slot-d">{s.d}</div>
                      <div>{s.t}</div>
                    </button>
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

        {submitState === "error" && (
          <div className="form-banner-err" role="alert">
            Impossible d&apos;envoyer la demande. Réessayez ou contactez-nous sur WhatsApp.
          </div>
        )}

        <button
          type="submit"
          className="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <span className="submit-spinner" aria-hidden="true" />
              Envoi…
            </>
          ) : (
            <>
              Réserver mon appel gratuit
              <span className="arrow">→</span>
            </>
          )}
        </button>
      </form>
    </Form>
  );
}
