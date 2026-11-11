import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: siteProfile.title,
    description: siteProfile.positioning,
    url: absoluteUrl("/"),
    email: siteProfile.email ? `mailto:${siteProfile.email}` : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Sindh",
      addressCountry: "Pakistan",
    },
    knowsAbout: siteProfile.focusAreas,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="top">
        <Hero />
        <Achievements />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Learning />
        <Contact />
        <ClosingCta />
      </main>
    </>
  );
}
import { siteProfile } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/site-url";
