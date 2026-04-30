import { z } from "zod";

export const COUNTRIES = [
  "Sénégal",
  "Côte d'Ivoire",
  "Burkina Faso",
  "Mali",
  "Cameroun",
  "Bénin",
  "Togo",
  "Guinée",
  "Niger",
  "Tchad",
  "RDC",
  "Autre",
] as const;

export const PROVINCES = [
  "Indifférent",
  "Québec",
  "Ontario",
  "Alberta",
  "Colombie-Britannique",
  "Manitoba",
  "Nouveau-Brunswick",
  "Autre province",
] as const;

export const SERVICES = [
  "CV canadien",
  "Lettre de présentation",
  "Préparation aux entrevues",
  "Coaching personnalisé",
  "Je ne sais pas encore",
] as const;

export const SLOTS = [
  { d: "Lun 27 avr", t: "10h00" },
  { d: "Lun 27 avr", t: "15h00" },
  { d: "Mar 28 avr", t: "11h00" },
  { d: "Mer 29 avr", t: "16h00" },
] as const;

const phoneRegex = /^\+?[0-9 ()-]{8,20}$/;

export const rdvSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80, "Nom trop long"),
  whatsapp: z
    .string()
    .trim()
    .regex(phoneRegex, "Numéro invalide (ex : +221 77 000 00 00)"),
  country: z.enum(COUNTRIES),
  province: z.enum(PROVINCES),
  service: z.enum(SERVICES),
  slot: z.number().int().min(0).max(SLOTS.length - 1),
  message: z.string().max(1000),
});

export type RdvInput = z.infer<typeof rdvSchema>;
