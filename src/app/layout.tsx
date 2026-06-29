import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://idrissa-mbaye-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Idrissa MBAYE — Technicien Réseau",
  description:
    "Portfolio d'Idrissa MBAYE, étudiant en BTS SIO option SISR à l'IPSSI. À la recherche d'un stage et d'une alternance en réseaux et systèmes. Projets : infrastructure VLAN (Labo GSB), stage réseau (changement de pare-feu), travaux pratiques Cisco.",
  keywords: [
    "BTS SIO",
    "SISR",
    "alternance",
    "stage",
    "technicien réseau",
    "administration système",
    "Cisco Packet Tracer",
    "VLAN",
    "réseau",
    "Idrissa MBAYE",
    "Chanteloup-en-Brie",
  ],
  authors: [{ name: "Idrissa MBAYE" }],
  openGraph: {
    title: "Idrissa MBAYE — Technicien Réseau",
    description:
      "Étudiant BTS SIO option SISR en recherche de stage et d'alternance. Réseaux, systèmes et sécurité.",
    url: siteUrl,
    siteName: "Portfolio — Idrissa MBAYE",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
