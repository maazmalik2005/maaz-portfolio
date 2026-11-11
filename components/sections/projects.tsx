import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading
            label="Featured Projects"
            title="Selected work"
            description="A selection of websites and digital projects across services, e-commerce and technology."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.filter((project) => project.typeConfirmed).map((project) => (
            <Reveal key={project.slug}>
              <Card className="group h-full overflow-hidden p-0">
                <div className="relative flex aspect-[16/8] items-center justify-center border-b border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgb(99_102_241_/_0.2),transparent_42%),#172033]">
                  <Eye className="text-accent/70 transition-transform duration-300 group-hover:scale-110" size={38} aria-hidden="true" />
                  {project.typeConfirmed ? (
                    <Badge variant={project.type === "Client Project" || project.type === "Paid Client Project" ? "accent" : project.type === "Practice Project" || project.type === "Personal Partnership Project" || project.type === "Personal Brand Project" ? "cyan" : "muted"} className="absolute left-5 top-5">
                      {project.type}
                    </Badge>
                  ) : null}
                </div>
                <div className="p-6 sm:p-8">
                  {project.industry ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-secondary">{project.industry}</p> : null}
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white">
                      View Case Study <Eye size={16} aria-hidden="true" />
                    </Link>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white">
                        Visit Website <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
