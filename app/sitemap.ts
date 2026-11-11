import type { MetadataRoute } from "next";
import { projects } from "@/lib/content/projects";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const confirmedProjects = projects.filter((project) => project.typeConfirmed);

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...confirmedProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
