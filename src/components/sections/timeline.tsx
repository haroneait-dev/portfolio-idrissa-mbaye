import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/lib/portfolio-data";

export function Timeline() {
  return (
    <section id="parcours" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Parcours"
          title="Formation & expérience"
        />

        <div className="mt-12 max-w-3xl">
          <ol className="relative border-l border-border pl-8">
            {timeline.map((entry, i) => {
              const Icon = entry.kind === "experience" ? Briefcase : GraduationCap;
              return (
                <Reveal
                  as="li"
                  key={`${entry.title}-${i}`}
                  delayIndex={i}
                  className="mb-10 last:mb-0"
                >
                  <span className="absolute -left-[1.30rem] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">{entry.title}</h3>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">{entry.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
