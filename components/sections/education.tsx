import { BookOpen, GraduationCap, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cybersecurityTrack, education, professionalLearning } from "@/lib/content/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-white/10 bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading label="Education and Professional Development" title="Always learning, formally and independently" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <GraduationCap className="text-accent" size={28} aria-hidden="true" />
              <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">{education.degree}</h3>
              <p className="mt-2 text-accent-secondary">{education.institution}</p>
              <div className="mt-6 flex gap-3">
                <BookOpen className="mt-1 shrink-0 text-text-muted" size={18} aria-hidden="true" />
                <p className="text-sm leading-6 text-text-muted">{education.focusAreas.join(", ")}.</p>
              </div>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="h-full">
              <ShieldCheck className="text-accent-secondary" size={28} aria-hidden="true" />
              <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">Cybersecurity learning track</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Completed {cybersecurityTrack.completedCourses} courses in a cybersecurity learning track covering security fundamentals and related technology topics.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {professionalLearning.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-text-muted">{item}</span>)}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
