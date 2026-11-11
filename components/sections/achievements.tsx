import { BarChart3, Briefcase, GraduationCap, Megaphone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteProfile } from "@/lib/content/site";

const icons = [Briefcase, BarChart3, Megaphone, ShieldCheck, GraduationCap];

export function Achievements() {
  return (
    <section className="border-b border-white/10 bg-surface/40">
      <div className="mx-auto grid w-full max-w-7xl gap-px px-6 sm:px-8 md:grid-cols-5 xl:px-10">
        {siteProfile.achievements.map((achievement, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={achievement} className="border-x border-white/10 px-4 py-8 first:border-l-0 last:border-r-0">
              <Icon className="mb-4 text-accent-secondary" size={21} aria-hidden="true" />
              <p className="text-sm leading-6 text-text-muted">{achievement}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
