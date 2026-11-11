import { Briefcase, CircleDot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/content/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading label="Professional Experience" title="Hands-on experience across marketing and web" />
        </Reveal>
        <Reveal className="mt-10">
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute bottom-8 left-2 top-8 w-px bg-accent/40 sm:left-4" aria-hidden="true" />
            <CircleDot className="absolute left-0 top-8 z-10 rounded-full bg-background text-accent sm:left-2" size={17} aria-hidden="true" />
            <Card className="relative">
              <div className="flex flex-col justify-between gap-5 md:flex-row">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Briefcase className="text-accent-secondary" size={20} aria-hidden="true" />
                    <Badge variant="success">Present</Badge>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">{experience.designation}</h3>
                  <p className="mt-2 text-sm text-accent-secondary">{experience.employmentType} · {experience.location}</p>
                </div>
                <p className="text-sm font-medium text-text-muted">{experience.duration}</p>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-7 text-text-muted">{experience.summary}</p>
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Responsibilities</h4>
                  <ul className="mt-4 space-y-3">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Tools used</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
