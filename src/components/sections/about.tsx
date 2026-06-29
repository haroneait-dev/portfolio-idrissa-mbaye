import { CheckCircle2, GraduationCap, Languages, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { profile, softSkills, languages } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="À propos"
          title="Concevoir, déployer et sécuriser des infrastructures"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Pitch + objectif */}
          <Reveal className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/90">{profile.pitch}</p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mon objectif</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {profile.availability}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ma formation</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    BTS SIO option SISR à l&apos;IPSSI Val d&apos;Europe — Solutions
                    d&apos;Infrastructures, Systèmes et Réseaux.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Soft skills + langues */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal delayIndex={1} className="surface-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Qualités
              </h3>
              <ul className="mt-4 space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayIndex={2} className="surface-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Languages className="h-4 w-4" />
                Langues
              </h3>
              <ul className="mt-4 space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
