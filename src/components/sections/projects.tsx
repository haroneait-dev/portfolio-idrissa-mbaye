import Link from "next/link";
import {
  Network,
  Wrench,
  Globe,
  ArrowUpRight,
  ArrowRight,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { projects, type Project } from "@/lib/portfolio-data";

const categoryStyle: Record<Project["category"], { icon: LucideIcon; label: string }> = {
  Réseau: { icon: Network, label: "Réseau" },
  Stage: { icon: Wrench, label: "Stage" },
  Web: { icon: Globe, label: "Web" },
};

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projets"
          title="Des réalisations concrètes, du labo au terrain"
          description="Projets pédagogiques, missions de stage et initiatives personnelles qui illustrent mon parcours en réseaux et systèmes."
        />

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => {
            const { icon: Icon, label } = categoryStyle[project.category];
            return (
              <Reveal key={project.slug} delayIndex={i}>
                <article className="group grid gap-6 surface-card surface-card-hover p-6 sm:p-8 lg:grid-cols-3">
                {/* Left: header */}
                <div className="lg:col-span-1">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {project.context}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.period}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.detailHref ? (
                      <Link
                        href={project.detailHref}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Voir la page dédiée
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
                      >
                        {project.link.label}
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Right: details */}
                <div className="lg:col-span-2">
                  <p className="text-sm leading-relaxed text-foreground/90">{project.summary}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
