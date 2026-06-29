import { Radar, Rss, BookOpen, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { veille } from "@/lib/portfolio-data";

export function Veille() {
  return (
    <section
      id="veille"
      className="scroll-mt-20 border-t border-border bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Veille technologique"
          title={veille.subject}
          description={veille.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Thèmes suivis */}
          <Reveal className="surface-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Radar className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Ce que je suis</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {veille.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Sources */}
          <Reveal delayIndex={1} className="surface-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Rss className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Mes sources</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {veille.sources.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contribution */}
          <Reveal delayIndex={2} className="flex flex-col rounded-3xl border border-primary/30 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Ma contribution</h3>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
              {veille.contribution}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
