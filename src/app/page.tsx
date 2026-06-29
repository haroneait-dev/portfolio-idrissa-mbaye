import type { Metadata } from "next";
import { Landing } from "@/components/landing";

export const metadata: Metadata = {
  title: "Bienvenue — Idrissa MBAYE",
  description:
    "Page d'accueil d'Idrissa MBAYE, Technicien Réseau (BTS SIO SISR). Accès rapide aux projets, certifications et au portfolio.",
};

export default function Home() {
  return <Landing />;
}
