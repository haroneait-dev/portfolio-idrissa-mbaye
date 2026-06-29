"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  X,
  CornerDownLeft,
  LayoutGrid,
  Cpu,
  FolderGit2,
  ShieldCheck,
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  navLinks,
  skillCategories,
  projects,
  certifications,
  profile,
} from "@/lib/portfolio-data";

type Group = "Section" | "Compétence" | "Projet" | "Certification" | "Action";

type SearchEntry = {
  label: string;
  group: Group;
  href: string;
  keywords?: string;
  action?: "scroll" | "download" | "external";
};

const groupIcon: Record<Group, typeof Search> = {
  Section: LayoutGrid,
  Compétence: Cpu,
  Projet: FolderGit2,
  Certification: ShieldCheck,
  Action: ArrowRight,
};

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  entries.push({ label: "Accueil", group: "Section", href: "#accueil", action: "scroll" });
  navLinks.forEach((l) =>
    entries.push({ label: l.label, group: "Section", href: l.href, action: "scroll" })
  );

  skillCategories.forEach((cat) =>
    cat.items.forEach((item) =>
      entries.push({
        label: item,
        group: "Compétence",
        href: "#competences",
        keywords: cat.title,
        action: "scroll",
      })
    )
  );

  projects.forEach((p) =>
    entries.push({
      label: p.title,
      group: "Projet",
      href: "#projets",
      keywords: `${p.context} ${p.tags.join(" ")}`,
      action: "scroll",
    })
  );

  certifications.forEach((c) =>
    entries.push({
      label: c.name,
      group: "Certification",
      href: "#certifications",
      keywords: `${c.issuer} ${c.description}`,
      action: "scroll",
    })
  );

  entries.push({
    label: "Télécharger le CV",
    group: "Action",
    href: profile.cvPath,
    action: "download",
  });
  entries.push({
    label: "Envoyer un email",
    group: "Action",
    href: `mailto:${profile.email}`,
    keywords: "contact recruteur",
    action: "external",
  });
  entries.push({
    label: "Disponibilité / alternance",
    group: "Action",
    href: "#contact",
    keywords: "alternance recrutement disponible embauche",
    action: "scroll",
  });

  return entries;
}

export function SiteSearch({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) {
      // Default view: all sections + actions
      return index.filter((e) => e.group === "Section" || e.group === "Action");
    }
    return index
      .filter((e) => normalize(`${e.label} ${e.keywords ?? ""} ${e.group}`).includes(q))
      .slice(0, 10);
  }, [query, index]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Open with Cmd/Ctrl+K, close with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const navigate = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    if (entry.action === "download") {
      const a = document.createElement("a");
      a.href = entry.href;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
    if (entry.action === "external") {
      window.location.href = entry.href;
      return;
    }
    // scroll to section
    requestAnimationFrame(() => {
      const el = document.getElementById(entry.href.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", entry.href);
    });
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const entry = results[activeIndex];
      if (entry) navigate(entry);
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Rechercher dans le portfolio"
        className={cn(
          "inline-flex h-9 items-center gap-2 rounded-lg border px-2.5 text-sm transition-colors sm:px-3",
          tone === "dark"
            ? "border-white/20 bg-white/5 text-slate-200 hover:bg-white/10"
            : "border-border bg-secondary/50 text-muted-foreground hover:bg-secondary"
        )}
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Rechercher…</span>
        <kbd
          className={cn(
            "ml-1 hidden rounded border px-1.5 py-0.5 font-mono text-[10px] lg:inline",
            tone === "dark" ? "border-white/20 text-slate-300" : "border-border text-muted-foreground"
          )}
        >
          ⌘K
        </kbd>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Recherche"
        >
          <button
            type="button"
            aria-label="Fermer la recherche"
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-2xl">
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Rechercher une compétence, un projet, une section…"
                className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Quick section buttons */}
            <div className="flex flex-wrap gap-1.5 border-b border-border px-4 py-3">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => navigate({ label: l.label, group: "Section", href: l.href, action: "scroll" })}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Results */}
            <ul className="max-h-[45vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                  Aucun résultat pour « {query} »
                </li>
              ) : (
                results.map((entry, i) => {
                  const Icon = groupIcon[entry.group];
                  const ActionIcon =
                    entry.action === "download"
                      ? Download
                      : entry.action === "external"
                      ? Mail
                      : CornerDownLeft;
                  return (
                    <li key={`${entry.group}-${entry.label}-${i}`}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => navigate(entry)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          i === activeIndex ? "bg-accent" : "hover:bg-accent/60"
                        )}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-foreground">
                            {entry.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">{entry.group}</span>
                        </span>
                        <ActionIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </button>
                    </li>
                  );
                })
              )}
            </ul>

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <CornerDownLeft className="h-3 w-3" /> pour ouvrir
              </span>
              <span>↑ ↓ pour naviguer · Esc pour fermer</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
