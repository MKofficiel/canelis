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

/* Source unique des libellés de services : le formulaire RDV, le footer et
   la section Services doivent nommer le 4ᵉ service à l'identique. */
export const SERVICES = [
  "CV canadien",
  "Lettre de présentation",
  "Préparation aux entrevues",
  "Accompagnement complet A→Z",
  "Je ne sais pas encore",
] as const;

/* ------------------------------------------------------------------
   Créneaux dynamiques — prochains 5 jours ouvrés à partir de DEMAIN,
   2 créneaux/jour (10 h et 15 h, heure du Québec / America/Toronto).
   L'id est stable (`YYYY-MM-DDTHH:00`) et sert de valeur de formulaire ;
   le label est en français avec date complète.
   ------------------------------------------------------------------ */
export type Slot = { id: string; day: string; time: string };

const SLOT_TIMES = ["10:00", "15:00"] as const;
const SLOT_DAYS = 5;
/* Nombre de créneaux rendus — sert à afficher autant de squelettes avant
   le calcul côté client, pour réserver la hauteur exacte de la grille. */
export const SLOT_COUNT = SLOT_DAYS * SLOT_TIMES.length;
export const SLOT_ID_REGEX = /^\d{4}-\d{2}-\d{2}T(?:10|15):00$/;

export function getSlots(): Slot[] {
  // Date « aujourd'hui » telle qu'elle est au Québec (évite les décalages
  // pour un visiteur en Afrique).
  const todayQc = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
  }).format(new Date());
  const [y, m, d] = todayQc.split("-").map(Number);
  // Minuit UTC de la date québécoise : on formate ensuite en UTC pour que
  // le jour de la semaine reste cohérent avec la date calendaire.
  const cursor = new Date(Date.UTC(y, m - 1, d));

  const dayFmt = new Intl.DateTimeFormat("fr-CA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const slots: Slot[] = [];
  let daysAdded = 0;
  while (daysAdded < SLOT_DAYS) {
    cursor.setUTCDate(cursor.getUTCDate() + 1); // commence demain
    const dow = cursor.getUTCDay(); // 0 = dimanche, 6 = samedi
    if (dow === 0 || dow === 6) continue;

    const rawLabel = dayFmt.format(cursor);
    const dayLabel = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);
    const isoDate = cursor.toISOString().slice(0, 10);

    for (const t of SLOT_TIMES) {
      const [hh] = t.split(":");
      slots.push({
        id: `${isoDate}T${t}`,
        day: dayLabel,
        time: `${hh} h 00`,
      });
    }
    daysAdded++;
  }
  return slots;
}

/* Numéro WhatsApp : on retire espaces, tirets, points et parenthèses,
   puis on exige un format international commençant par « + ». */
export const normalizeWhatsapp = (v: string) => v.replace(/[\s().-]/g, "");
const WHATSAPP_REGEX = /^\+[1-9]\d{7,14}$/;

export const rdvSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80, "Nom trop long"),
  whatsapp: z
    .string()
    .trim()
    .refine(
      (v) => WHATSAPP_REGEX.test(normalizeWhatsapp(v)),
      "Indicatif international requis (ex : +221 77 000 00 00)",
    ),
  country: z.enum(COUNTRIES),
  province: z.enum(PROVINCES),
  service: z.enum(SERVICES),
  slot: z.string().regex(SLOT_ID_REGEX, "Choisissez un créneau proposé"),
  message: z.string().max(1000),
  consent: z.literal(true, {
    message: "Vous devez accepter pour que nous puissions vous recontacter",
  }),
});

export type RdvInput = z.infer<typeof rdvSchema>;
