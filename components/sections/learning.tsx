import { Cpu, Layers, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningClosingLine, learningJourney } from "@/lib/content/learning";

const icons = [Layers, Rocket, ShieldCheck, Cpu];

export function Learning() {
  return (
    <section id="learning" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading label="My Learning Journey" title="What I am building next" description="Technology moves quickly, so I keep learning in public. Here is where my attention is right now." />
        </Reveal>
        <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-5">
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-accent/40 md:block" aria-hidden="true" />
          {learningJourney.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} className="relative">
                <div className="flex gap-4 md:block">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="md:mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-secondary">0{index + 1}</p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-12 max-w-2xl text-base leading-7 text-text-muted">{learningClosingLine}</p>
      </div>
    </section>
  );
}
