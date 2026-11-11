"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { currentlyLearning, skillCategories } from "@/lib/content/skills";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = skillCategories[activeCategory];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading
            label="Skills and Technologies"
            title="The toolkit behind the work"
            description="Professional skills I use on client work every day, and technologies I am actively building on."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible">
            {skillCategories.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`min-h-11 shrink-0 rounded-xl border px-4 text-left text-sm font-medium transition-colors lg:block lg:w-full ${
                  activeCategory === index
                    ? "border-accent/50 bg-accent/10 text-foreground"
                    : "border-white/10 text-text-muted hover:border-accent/30 hover:text-foreground"
                }`}
                aria-pressed={activeCategory === index}
              >
                {item.name}
              </button>
            ))}
          </div>
          <Reveal key={category.name}>
            <Card className="min-h-64">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold text-foreground">{category.name}</h3>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-indigo-200">
                  {category.proficiency}
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {category.skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
              </div>
            </Card>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-8 rounded-2xl border border-dashed border-accent/50 bg-accent/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">Currently Learning</p>
            <p className="mt-2 text-sm text-text-muted">Technologies I am actively building skills in.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {currentlyLearning.map((skill) => <Chip key={skill.name} className="border-accent/20 text-foreground">{skill.name}</Chip>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
