import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grain-bg flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="container mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
