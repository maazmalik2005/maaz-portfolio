import { BriefcaseBusiness, GraduationCap, MapPin, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteProfile } from "@/lib/content/site";

export function About() {
  const facts = [
    { label: "Location", value: siteProfile.location, icon: MapPin },
    { label: "Work mode", value: "Freelance / Remote", icon: Wifi },
    { label: "Education", value: siteProfile.education, icon: GraduationCap },
    { label: "Experience", value: siteProfile.experience, icon: BriefcaseBusiness },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-32 xl:px-10">
        <Reveal>
          <div className="sticky top-28">
            <div className="flex aspect-square max-w-md items-center justify-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgb(6_182_212_/_0.14),transparent_35%),#111827]">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-accent/50 bg-accent/10 font-heading text-3xl font-semibold text-accent">
                  MS
                </div>
                <p className="mt-5 font-heading text-lg font-semibold text-foreground">A technical eye for growth</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-3 rounded-xl border border-white/10 bg-surface/70 p-4">
                  <Icon className="mt-0.5 shrink-0 text-accent-secondary" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
                    <p className="mt-1 text-sm leading-5 text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading label={siteProfile.about.sectionLabel} title={siteProfile.about.heading} />
          <div className="mt-7 space-y-5 text-base leading-7 text-text-muted">
            {siteProfile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {siteProfile.about.howIWork.map((item, index) => (
              <Card key={item.title} className="p-5">
                <span className="font-display text-sm font-semibold text-accent">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
