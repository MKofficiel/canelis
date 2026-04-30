# CLAUDE.md — Canelis

## Projet

**Canelis** est une landing page qui aide les personnes en Afrique francophone à obtenir un contrat de travail au Canada. Le coach accompagne les clients dans les démarches pour décrocher un contrat.

## Public cible

- Professionnels et diplômés d'Afrique francophone (Burkina, Côte d'Ivoire, Sénégal, Mali…)
- Mobile-first (la majorité navigue sur téléphone)
- Communication via WhatsApp

## Stack

- **Next.js 16** (App Router, latest)
- **shadcn/ui** + **Tailwind CSS v4**
- **Zod** (validation des formulaires)
- **TypeScript** (strict)
- **Supabase** (stockage des soumissions RDV + dossiers CV)

## Scope

Landing page uniquement. Une seule page avec :

1. Hero (accroche + CTA)
2. Services (consultation immigration + création CV canadien)
3. Chiffres clés
4. Témoignages clients
5. Formulaire de prise de rendez-vous (nom, WhatsApp, pays, service, date, heure, message)
6. Formulaire de soumission CV (infos perso, objectif pro, expériences, formations, compétences)
7. FAQ (accordéon)
8. CTA final
9. Footer (contacts, navigation)

## Conventions

- Français partout (UI, commentaires, noms de variables lisibles)
- Mobile-first : toujours designer pour mobile d'abord
- Composants dans `src/components/`
- Server Actions dans `src/actions/`
- Schémas Zod dans `src/lib/validations/`
- Un seul `page.tsx` à la racine — c'est une landing page, pas un site multi-pages