"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  Check,
  Compass,
  FileText,
  Gauge,
  Ghost,
  KeyRound,
  LayoutTemplate,
  Link2,
  Megaphone,
  MousePointerClick,
  Search,
  ServerCog,
  Settings2,
  Share2,
  ShieldCheck,
  Target,
  Video,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/content/services";
import type { ServiceGroup } from "@/lib/types";

const iconMap = {
  Compass,
  Search,
  Settings2,
  FileText,
  Link2,
  KeyRound,
  BarChart3,
  LayoutTemplate,
  ServerCog,
  Wrench,
  Gauge,
  Share2,
  Megaphone,
  Target,
  MousePointerClick,
  Ghost,
  Video,
  ShieldCheck,
} as const;

const filters: Array<{ label: string; value: ServiceGroup | "all" }> = [
  { label: "All services", value: "all" },
  { label: "Strategy and SEO", value: "strategy-seo" },
  { label: "Web", value: "web" },
  { label: "Social and Paid", value: "social-paid" },
  { label: "Brand", value: "brand" },
];

export function Services() {
  const [activeGroup, setActiveGroup] = useState<ServiceGroup | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredServices = useMemo(
    () => services.filter((service) => activeGroup === "all" || service.group === activeGroup),
    [activeGroup],
  );
  const selectedService = services.find((service) => service.id === selectedId);

  return (
    <section id="services" className="scroll-mt-24 border-t border-white/10 bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32 xl:px-10">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Everything your online presence needs, from one specialist"
            description="From search visibility and website development to paid campaigns and ongoing management, each service is delivered with a clear process and plain-English reporting."
          />
        </Reveal>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Service categories">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={activeGroup === filter.value}
              onClick={() => setActiveGroup(filter.value)}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${
                activeGroup === filter.value
                  ? "border-accent bg-accent text-white"
                  : "border-white/10 bg-white/[0.03] text-text-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isSelected = selectedId === service.id;
            return (
              <Reveal key={service.id}>
                <Card className={`h-full p-6 ${isSelected ? "border-accent/60" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(isSelected ? null : service.id)}
                    className="flex w-full items-start gap-4 text-left"
                    aria-expanded={isSelected}
                    aria-controls={`${service.id}-details`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-semibold text-foreground">{service.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-text-muted">{service.description}</span>
                    </span>
                  </button>
                  {isSelected ? (
                    <div id={`${service.id}-details`} className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-secondary">Key activities</p>
                      <ul className="mt-3 space-y-2">
                        {service.keyActivities.map((activity) => (
                          <li key={activity} className="flex gap-2 text-sm leading-6 text-text-muted">
                            <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm leading-6 text-foreground">
                        <span className="font-semibold">Business benefit: </span>
                        {service.businessBenefits}
                      </p>
                    </div>
                  ) : null}
                </Card>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button href="#contact" variant="secondary">Discuss Your Project</Button>
        </div>
        {selectedService ? <span className="sr-only">Showing details for {selectedService.title}</span> : null}
      </div>
    </section>
  );
}
