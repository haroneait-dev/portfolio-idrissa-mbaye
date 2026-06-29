"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SiteSearch } from "@/components/layout/site-search";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-bold tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            IM
          </span>
          <span className="hidden sm:inline">Idrissa MBAYE</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:bg-accent hover:text-foreground"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <SiteSearch tone={scrolled ? "light" : "dark"} />
          <Button
            render={<a href={profile.cvPath} download />}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            CV
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menu" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 text-left text-base">Navigation</SheetTitle>
              <ul className="mt-2 flex flex-col gap-1 px-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      render={
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-4 px-4">
                <SheetClose
                  render={
                    <a
                      href={profile.cvPath}
                      download
                      className={cn(buttonVariants(), "w-full")}
                    />
                  }
                >
                  <Download className="h-4 w-4" />
                  Télécharger le CV
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
