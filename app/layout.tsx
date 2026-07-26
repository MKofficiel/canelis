import type { Metadata } from "next";
import { Inter, Outfit, Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Corps de texte — Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Chiffres clés / labels display — Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Titres (h1-h3) et wordmark "Canelis" — Lora serif
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Indexation autorisée uniquement sur le déploiement de production.
// Local, preview et branches restent en noindex.
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://canelis.vercel.app"),
  title: "Canelis · Coaching emploi Canada",
  description:
    "Plateforme d'accompagnement à l'emploi pour les chercheurs d'emploi en Afrique qui visent le Canada. CV canadien, lettre de présentation, préparation aux entrevues et coaching de carrière.",
  alternates: { canonical: "/" },
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${lora.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
