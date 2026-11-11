import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import type { Project } from "@/lib/types";

type CaseStudyTemplateProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

export function CaseStudyTemplate({ project, previous, next }: CaseStudyTemplateProps) {
  const { caseStudy } = project;

  return (
    <main className="min-h-screen">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_15%,rgb(99_102_241_/_0.16),transparent_35%)]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:pb-24 xl:px-10">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>
          <Reveal className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              {project.typeConfirmed ? <Badge variant={project.type === "Client Project" || project.type === "Paid Client Project" ? "accent" : project.type === "Practice Project" || project.type === "Personal Partnership Project" || project.type === "Personal Brand Project" ? "cyan" : "muted"}>{project.type}</Badge> : null}
              {project.industry ? <span className="text-sm text-accent-secondary">{project.industry}</span> : null}
            </div>
            <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
              {project.location ? <span>{project.location}</span> : null}
              {caseStudy.roleConfirmed ? <span>Role: {caseStudy.role}</span> : null}
            </div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Visit Website
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ) : null}
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_0.34fr] lg:py-24 xl:px-10">
        <div className="space-y-12">
          <Reveal>
            <Card>
              <h2 className="font-heading text-2xl font-semibold text-foreground">Project overview</h2>
              <p className="mt-4 text-base leading-7 text-text-muted">{caseStudy.overview}</p>
            </Card>
          </Reveal>
          <Reveal>
            <section aria-labelledby="objective-heading">
              <h2 id="objective-heading" className="font-heading text-2xl font-semibold text-foreground">Objective</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted">{caseStudy.objective}</p>
            </section>
          </Reveal>
          {caseStudy.roleConfirmed ? (
            <Reveal>
              <section aria-labelledby="role-heading">
                <h2 id="role-heading" className="font-heading text-2xl font-semibold text-foreground">My role and responsibilities</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted">{caseStudy.role}</p>
              </section>
            </Reveal>
          ) : null}
          {caseStudy.servicesProvided?.length ? (
            <Reveal>
              <section aria-labelledby="services-heading">
                <h2 id="services-heading" className="font-heading text-2xl font-semibold text-foreground">Services provided</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {caseStudy.servicesProvided.map((service) => <li key={service} className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-text-muted">{service}</li>)}
                </ul>
              </section>
            </Reveal>
          ) : null}
          <Reveal>
            <section aria-labelledby="work-heading">
              <h2 id="work-heading" className="font-heading text-2xl font-semibold text-foreground">Work completed</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {caseStudy.workCompleted.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-text-muted">{item}</li>)}
              </ul>
            </section>
          </Reveal>
          {caseStudy.challengesAndSolutions?.length ? (
            <Reveal>
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="font-heading text-2xl font-semibold text-foreground">Challenges and solutions</h2>
                <div className="mt-5 space-y-4">
                  {caseStudy.challengesAndSolutions.map((item) => (
                    <Card key={item.challenge} className="p-5">
                      <h3 className="font-semibold text-foreground">{item.challenge}</h3>
                      <p className="mt-2 text-sm leading-6 text-text-muted">{item.solution}</p>
                    </Card>
                  ))}
                </div>
              </section>
            </Reveal>
          ) : null}
          <ProjectGallery images={caseStudy.images} />
          {caseStudy.results?.length ? (
            <Reveal>
              <section aria-labelledby="results-heading">
                <h2 id="results-heading" className="font-heading text-2xl font-semibold text-foreground">Results</h2>
                <ul className="mt-4 space-y-3 text-base leading-7 text-text-muted">
                  {caseStudy.results.map((result) => <li key={result}>{result}</li>)}
                </ul>
              </section>
            </Reveal>
          ) : null}
          {caseStudy.clientFeedback ? (
            <Reveal>
              <section aria-labelledby="feedback-heading">
                <h2 id="feedback-heading" className="font-heading text-2xl font-semibold text-foreground">Client feedback</h2>
                <blockquote className="mt-4 border-l-2 border-accent pl-5 text-base italic leading-7 text-text-muted">{caseStudy.clientFeedback}</blockquote>
              </section>
            </Reveal>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          {caseStudy.technologiesConfirmed ? (
            <Card>
              <h2 className="font-heading text-lg font-semibold text-foreground">Technologies and tools</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.technologies.map((technology) => <li key={technology} className="text-sm leading-6 text-text-muted">{technology}</li>)}
              </ul>
            </Card>
          ) : null}
        </aside>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 xl:px-10">
        <ProjectNavigation previous={previous} next={next} />
      </div>
    </main>
  );
}
