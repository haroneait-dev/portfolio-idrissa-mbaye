"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderGit2,
  ClipboardCheck,
  Mail,
  ArrowRight,
  ArrowUpRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { profile } from "@/lib/portfolio-data";

const WATER_BG =
  'url("https://images.unsplash.com/photo-1432251407527-504a6b4174a2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center';

type DockItem = {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  img?: string;
  Icon?: LucideIcon;
  gradient?: string;
};

const dockItems: DockItem[] = [
  {
    label: "Mes projets",
    description:
      "Mes réalisations réseau : infrastructure du laboratoire GSB (VLAN, routage, DHCP sous Cisco Packet Tracer), stage chez IT One (changement de pare-feu, supervision) et travaux pratiques de formation.",
    href: "/portfolio#projets",
    cta: "Voir mes projets",
    Icon: FolderGit2,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    label: "Tableau de synthèse",
    description:
      "Mon tableau de synthèse officiel de l'épreuve E5 (BTS SIO) : mes réalisations professionnelles mises en regard des compétences du référentiel SISR.",
    href: "/portfolio#synthese",
    cta: "Voir la synthèse",
    Icon: ClipboardCheck,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    label: "Contact",
    description:
      "Je recherche un stage et une alternance en réseaux & administration systèmes. Retrouve mon email, mon téléphone et mon CV à télécharger.",
    href: "/portfolio#contact",
    cta: "Me contacter",
    Icon: Mail,
    gradient: "from-sky-500 to-blue-600",
  },
];

function TileVisual({ item, size = "md" }: { item: DockItem; size?: "md" | "sm" }) {
  const box = size === "sm" ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16";
  const icon = size === "sm" ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8";
  if (item.img) {
    return (
      <img
        src={item.img}
        alt={item.label}
        className={`${box} rounded-2xl object-cover`}
      />
    );
  }
  return (
    <div
      className={`flex ${box} items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
    >
      {item.Icon ? <item.Icon className={`${icon} text-white`} /> : null}
    </div>
  );
}

/**
 * Isolated, memoized background layer.
 * Animated with `transform` (GPU/compositor) so it never restarts when the
 * page re-renders on icon clicks — and it never re-renders thanks to memo().
 */
const WaterBackground = memo(function WaterBackground() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden
      style={{
        background: WATER_BG,
        animation: "moveBackground 60s linear infinite",
      }}
    />
  );
});

export function Landing() {
  const [active, setActive] = useState<DockItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden px-6 py-16"
    >
      {/* Animated, isolated water background */}
      <WaterBackground />

      <GlassFilter />

      {/* Soft scrim for text readability over bright water */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.25),rgba(2,6,23,0.5))]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-base font-medium text-white/90 drop-shadow-md sm:text-lg">
            Bienvenue 👋
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
            Je m&apos;appelle {profile.firstName}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-white/90 drop-shadow-md sm:text-lg">
            {profile.title} · BTS SIO option SISR
          </p>
          <p className="mt-2 text-sm text-white/70 drop-shadow-md">
            Clique sur une icône pour découvrir ce qu&apos;elle contient
          </p>
        </motion.div>

        {/* Liquid glass dock */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-full overflow-x-auto pb-2"
        >
          <GlassEffect className="w-fit rounded-3xl p-3">
            <div className="flex items-start justify-center gap-3 px-1 sm:gap-4">
              {dockItems.map((item) => {
                const isActive = active?.label === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActive(isActive ? null : item)}
                    aria-label={item.label}
                    aria-pressed={isActive}
                    className="group flex w-[5.5rem] flex-col items-center gap-2 rounded-2xl p-1 text-center sm:w-24"
                  >
                    <span
                      className={`transition-transform duration-500 group-hover:scale-110 ${
                        isActive ? "scale-110" : ""
                      }`}
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                      }}
                    >
                      <TileVisual item={item} />
                    </span>
                    <span className="line-clamp-2 text-[11px] font-medium leading-tight text-white drop-shadow">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </GlassEffect>
        </motion.div>

        {/* Explanation card (shown on icon click) */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.label}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <GlassEffect className="w-[min(92vw,26rem)] rounded-3xl p-5">
                <div className="w-full text-left text-white">
                  <div className="flex items-start gap-3">
                    <TileVisual item={active} size="sm" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold">{active.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/85">
                        {active.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      aria-label="Fermer"
                      className="rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4">
                    {active.external ? (
                      <a
                        href={active.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90"
                      >
                        {active.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={active.href}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90"
                      >
                        {active.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </GlassEffect>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button to portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link href="/portfolio" className="block">
            <GlassEffect className="rounded-3xl px-9 py-5 transition-all duration-700 hover:px-10 hover:py-6">
              <span className="flex items-center gap-2 text-lg font-semibold text-white sm:text-xl">
                Découvrir mon portfolio
                <ArrowRight className="h-5 w-5" />
              </span>
            </GlassEffect>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
