import { Fragment } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  syntheseColumns,
  syntheseRows,
  syntheseMeta,
} from "@/lib/portfolio-data";

export function Synthese() {
  return (
    <section id="synthese" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tableau de synthèse"
          title="Réalisations professionnelles & compétences"
          description="Document officiel de l'épreuve E5 (BTS SIO) — mes réalisations mises en regard des compétences du référentiel SISR."
        />

        {/* En-tête officiel */}
        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-card px-5 py-4 text-sm">
          <span className="font-semibold text-foreground">{syntheseMeta.diplome}</span>
          <span className="text-muted-foreground">{syntheseMeta.session}</span>
          <span className="text-muted-foreground">
            Candidat : <span className="font-medium text-foreground">{syntheseMeta.nom}</span>
          </span>
          <span className="text-muted-foreground">
            Centre : <span className="font-medium text-foreground">{syntheseMeta.centre}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            <Check className="h-3.5 w-3.5" />
            Option {syntheseMeta.option}
          </span>
        </Reveal>

        {/* Matrice */}
        <Reveal className="mt-6 overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[60rem] border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 w-64 bg-primary px-3 py-3 align-bottom text-sm font-semibold text-primary-foreground">
                  Réalisations professionnelles
                </th>
                {syntheseColumns.map((col) => (
                  <th
                    key={col.key}
                    title={col.bullets.join(" • ")}
                    className="border-l border-primary-foreground/15 bg-primary px-2 py-2 align-top text-primary-foreground"
                  >
                    <p className="text-[11px] font-bold leading-tight">{col.title}</p>
                    <ul className="mt-1.5 space-y-0.5">
                      {col.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[9px] leading-tight text-primary-foreground/70"
                        >
                          ▸ {b}
                        </li>
                      ))}
                    </ul>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {syntheseRows.map((grp) => (
                <Fragment key={grp.group}>
                  <tr>
                    <td
                      colSpan={1 + syntheseColumns.length}
                      className="border-t border-border bg-primary/10 px-3 py-2 text-sm font-semibold text-primary"
                    >
                      {grp.group}
                    </td>
                  </tr>
                  {grp.items.map((item, i) => (
                    <tr key={item.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                      <td className="sticky left-0 z-10 border-t border-border bg-inherit px-3 py-2.5 align-top text-xs leading-relaxed text-foreground/90">
                        {item.label}
                      </td>
                      {syntheseColumns.map((col) => {
                        const active = item.marks.includes(col.key);
                        return (
                          <td
                            key={col.key}
                            className="border-l border-t border-border px-2 py-2.5 text-center align-middle"
                          >
                            {active ? (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Check className="h-3 w-3" />
                              </span>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-3 text-xs text-muted-foreground">
          Chaque ✓ indique une compétence du référentiel SISR mobilisée par la réalisation. Le détail
          des activités est listé sous chaque compétence (en-têtes de colonnes).
        </p>
      </div>
    </section>
  );
}
