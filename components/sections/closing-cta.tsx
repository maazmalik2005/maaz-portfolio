import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ClosingCta() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:py-24 xl:px-10">
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl border border-accent/30 bg-[radial-gradient(circle_at_80%_20%,rgb(99_102_241_/_0.16),transparent_36%),#111827] p-8 sm:p-12 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">Start a conversation</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Have a website or campaign in mind?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted">Tell me about your business and goals. I will reply with clear next steps.</p>
        </div>
        <Button href="#contact">Start a Conversation <ArrowRight size={17} aria-hidden="true" /></Button>
      </Reveal>
    </section>
  );
}
