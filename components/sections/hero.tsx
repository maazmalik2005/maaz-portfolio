import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { siteProfile } from "@/lib/content/site";

export function Hero() {
  const { hero } = siteProfile;

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgb(99_102_241_/_0.16),transparent_32%),radial-gradient(circle_at_15%_65%,rgb(6_182_212_/_0.08),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgb(255_255_255_/_0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-36 xl:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-green-200">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              {hero.availabilityLabel}
            </div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
              {hero.label}
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              {hero.subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">
                Hire Me <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {siteProfile.resumeFile ? (
                <a
                  href={siteProfile.resumeFile}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white"
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              ) : null}
              <a
                href="#about"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-foreground"
              >
                Explore my approach <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {hero.expertise.slice(0, 4).map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative rounded-[2rem] border border-accent/40 bg-surface/80 p-3 shadow-[0_0_80px_rgb(99_102_241_/_0.12)]">
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgb(99_102_241_/_0.26),transparent_32%),linear-gradient(145deg,#172033,#0b0f19)]">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-accent/50 bg-accent/10 font-heading text-4xl font-semibold text-accent">
                  MS
                </div>
                <p className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {siteProfile.name}
                </p>
                <p className="mt-2 text-sm text-text-muted">Digital marketing and web specialist</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-accent-secondary">
                  <Sparkles size={14} aria-hidden="true" />
                  Technical skill meets digital strategy
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-16 rounded-full border border-accent/30 bg-surface px-3 py-2 text-xs font-medium text-indigo-200 shadow-lg">
              SEO
            </div>
            <div className="absolute -right-4 bottom-20 rounded-full border border-accent-secondary/30 bg-surface px-3 py-2 text-xs font-medium text-cyan-200 shadow-lg">
              WordPress
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
