import type { ComponentType } from "react";
import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/lib/portfolio-data";

type ContactItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  { icon: Mail, label: "Email", value: profile.email, href: socials.email },
  { icon: Phone, label: "Téléphone", value: profile.phone, href: socials.phone },
  { icon: MapPin, label: "Localisation", value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          {/* Decorative glow */}
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                <span className="h-px w-6 bg-primary" aria-hidden />
                Contact
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Travaillons ensemble
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Je suis à la recherche d&apos;une{" "}
                <strong className="text-foreground">alternance</strong> en réseaux et
                administration systèmes. N&apos;hésitez pas à me contacter pour échanger
                sur une opportunité.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  render={<a href={socials.email} />}
                  size="lg"
                  className="h-11 px-6 text-[0.95rem]"
                >
                  <Mail className="h-4 w-4" />
                  M&apos;envoyer un email
                </Button>
                <Button
                  render={<a href={profile.cvPath} download />}
                  size="lg"
                  variant="outline"
                  className="h-11 px-6 text-[0.95rem]"
                >
                  <Download className="h-4 w-4" />
                  Télécharger le CV
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors group-hover:border-primary/40">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                    {item.href ? (
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    ) : null}
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group block"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="group">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
