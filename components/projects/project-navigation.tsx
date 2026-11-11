import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

type ProjectNavigationProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
      aria-label="Project navigation"
    >
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="group rounded-2xl border border-white/10 bg-surface p-5 transition-colors hover:border-accent/50"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            <ArrowLeft size={15} aria-hidden="true" />
            Previous project
          </span>
          <span className="mt-3 block font-heading text-lg font-semibold text-foreground group-hover:text-accent">
            {previous.name}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-2xl border border-white/10 bg-surface p-5 text-left sm:text-right transition-colors hover:border-accent/50"
        >
          <span className="flex items-center justify-start gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted sm:justify-end">
            Next project
            <ArrowRight size={15} aria-hidden="true" />
          </span>
          <span className="mt-3 block font-heading text-lg font-semibold text-foreground group-hover:text-accent">
            {next.name}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
