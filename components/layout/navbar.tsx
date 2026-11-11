"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteProfile } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { MobileMenu, type NavigationLink } from "./mobile-menu";

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const resolvedNavigationLinks = navigationLinks.map((link) => ({
    ...link,
    href: pathname === "/" ? link.href : `/${link.href}`,
  }));
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navigationLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.1, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 xl:px-10">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-foreground"
            aria-label={`${siteProfile.name} home`}
          >
            <span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm text-white">
              MS
            </span>
            <span className="hidden sm:inline">{siteProfile.name}</span>
          </Link>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-6">
              {resolvedNavigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={
                      activeSection === link.href.replace("/#", "")
                        ? "location"
                        : undefined
                    }
                    className="text-sm font-medium text-text-muted transition-colors hover:text-foreground focus-visible:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {siteProfile.resumeFile ? (
              <a
                href={siteProfile.resumeFile}
                className="text-sm font-medium text-text-muted transition-colors hover:text-foreground"
              >
                Resume
              </a>
            ) : null}
            <Button href={contactHref}>Hire Me</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-accent/50 hover:text-foreground lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        links={resolvedNavigationLinks}
        activeSection={activeSection}
        contactHref={contactHref}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
