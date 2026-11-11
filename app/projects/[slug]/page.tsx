import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/projects/case-study-template";
import { projects } from "@/lib/content/projects";
import { absoluteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.typeConfirmed)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Case Study`,
      description: project.summary,
      type: "article",
      url: absoluteUrl(`/projects/${project.slug}`),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex(
    (item) => item.slug === slug && item.typeConfirmed,
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const previous = projects[projectIndex - 1];
  const next = projects[projectIndex + 1];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/#projects") },
      { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl(`/projects/${project.slug}`) },
    ],
  };
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    author: {
      "@type": "Person",
      name: "Maaz Sohail",
    },
    ...(project.industry ? { genre: project.industry } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CaseStudyTemplate project={project} previous={previous} next={next} />
    </>
  );
}
