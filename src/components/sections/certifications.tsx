import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-border bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Sécurité & conformité"
          description="Des certifications reconnues pour ancrer les bonnes pratiques de cybersécurité et de protection des données."
        />

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const obtained = cert.status === "obtenue";
            return (
              <Reveal
                key={cert.name}
                delayIndex={i}
                className="surface-card surface-card-hover relative overflow-hidden p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span
                    className={
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold " +
                      (obtained
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                        : "bg-amber-50 text-amber-700 ring-1 ring-amber-200")
                    }
                  >
                    {obtained ? (
                      <BadgeCheck className="h-3.5 w-3.5" />
                    ) : (
                      <Clock className="h-3.5 w-3.5" />
                    )}
                    {obtained ? "Obtenue" : "En cours"}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {cert.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
