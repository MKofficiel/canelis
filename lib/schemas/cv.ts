import { z } from "zod";

export const CV_COUNTRIES = [
  "Burkina Faso",
  "Côte d'Ivoire",
  "Sénégal",
  "Mali",
  "Cameroun",
  "Autre",
] as const;

export const CV_LANGUAGES = ["Français", "Anglais", "Les deux"] as const;

export const CV_PROVINCES = [
  "Indifférent",
  "Québec",
  "Ontario",
  "Alberta",
  "Colombie-Britannique",
  "Nouveau-Brunswick",
] as const;

export const CV_SECTORS = [
  "Tech / Informatique",
  "Santé",
  "Finance / Comptabilité",
  "Enseignement",
  "Commerce",
  "Ingénierie",
  "Autre",
] as const;

export const CV_ECA = [
  "Oui, ECA obtenue",
  "Non, pas encore",
  "En cours",
  "Je ne sais pas ce que c'est",
] as const;

export const CV_EXPERIENCE = ["0-2 ans", "2-5 ans", "5-10 ans", "10+ ans"] as const;

const phoneRegex = /^\+?[0-9 ()-]{8,20}$/;

export const cvSchema = z.object({
  // Step 0: Identité
  firstName: z.string().trim().min(2, "Prénom trop court"),
  lastName: z.string().trim().min(2, "Nom trop court"),
  email: z.email("Email invalide"),
  whatsapp: z.string().trim().regex(phoneRegex, "Numéro invalide"),
  country: z.enum(CV_COUNTRIES),
  targetRole: z.string().trim().min(2, "Précisez un poste ou domaine"),
  language: z.enum(CV_LANGUAGES),
  province: z.enum(CV_PROVINCES),

  // Step 1: Expériences
  currentRole: z.string().trim().min(2, "Champ requis"),
  company: z.string().trim().min(2, "Champ requis"),
  period: z.string().trim().min(3, "Précisez la période"),
  achievements: z.string().trim().min(20, "Décrivez au moins une réalisation (20 caractères min)"),
  sector: z.enum(CV_SECTORS),

  // Step 2: Formations
  diploma: z.string().trim().min(2, "Champ requis"),
  school: z.string().trim().min(2, "Champ requis"),
  graduationYear: z
    .string()
    .trim()
    .regex(/^(19|20)\d{2}$/, "Année sur 4 chiffres (ex : 2022)"),
  diplomaCountry: z.string().trim().min(2, "Champ requis"),
  eca: z.enum(CV_ECA),
  certifications: z.string().max(500),

  // Step 3: Compétences
  skills: z
    .array(z.string().trim().min(1))
    .min(3, "Ajoutez au moins 3 compétences")
    .max(30, "Maximum 30 compétences"),
  languages: z.string().trim().min(3, "Précisez les langues parlées"),
  experience: z.enum(CV_EXPERIENCE),
  comments: z.string().max(1000),
});

export type CvInput = z.infer<typeof cvSchema>;

export const CV_STEPS = [
  {
    label: "Identité",
    fields: [
      "firstName",
      "lastName",
      "email",
      "whatsapp",
      "country",
      "targetRole",
      "language",
      "province",
    ],
  },
  {
    label: "Expériences",
    fields: ["currentRole", "company", "period", "achievements", "sector"],
  },
  {
    label: "Formations",
    fields: ["diploma", "school", "graduationYear", "diplomaCountry", "eca", "certifications"],
  },
  {
    label: "Compétences",
    fields: ["skills", "languages", "experience", "comments"],
  },
] as const satisfies ReadonlyArray<{
  label: string;
  fields: ReadonlyArray<keyof CvInput>;
}>;
