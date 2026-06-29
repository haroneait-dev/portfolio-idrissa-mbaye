"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveCanvas } from "@/components/ui/canvas";
import { CountUp } from "@/components/count-up";
import { profile } from "@/lib/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const stats = [
  { value: "6+", label: "Réalisations pro" },
  { value: "1", label: "Stage en entreprise" },
  { value: "2", label: "Certifications" },
  { value: "SISR", label: "BTS SIO" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-svh snap-start flex-col justify-center overflow-hidden bg-slate-950 pt-28 pb-20 text-slate-100"
    >
      {/* Interactive neon trail canvas (21st.dev) */}
      <InteractiveCanvas className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.9)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Availability badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          Disponible pour une alternance
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-4xl bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent animate-text-gradient sm:text-6xl lg:text-7xl"
        >
          {profile.fullName}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-2xl font-semibold text-blue-400 sm:text-3xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          {profile.availability}
        </motion.p>

        {/* Meta info */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-400" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-blue-300"
          >
            <Mail className="h-4 w-4 text-blue-400" />
            {profile.email}
          </a>
        </motion.div>

        {/* Skill badges */}
        <motion.ul
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-2"
        >
          {profile.badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm"
            >
              {badge}
            </li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            render={<Link href="#projets" />}
            size="lg"
            className="group h-11 px-6 text-[0.95rem]"
          >
            Voir mes projets
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Button>
          <a
            href={profile.cvPath}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 text-[0.95rem] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Télécharger le CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.dl
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <dt className="text-sm text-slate-400">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-white">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#a-propos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-blue-300"
        aria-label="Défiler vers le contenu"
      >
        Défiler
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
