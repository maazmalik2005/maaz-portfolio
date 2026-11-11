import {
  Briefcase,
  Camera,
  Code2,
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/content/services";
import { siteProfile } from "@/lib/content/site";
import { socialLinks } from "@/lib/content/social";

const iconByPlatform = {
  Email: Mail,
  LinkedIn: Briefcase,
  GitHub: Code2,
  Instagram: Camera,
  WhatsApp: MessageCircle,
} as const;

function getSocialHref(platform: string, href?: string) {
  if (!href) {
    return undefined;
  }

  return platform === "Email" ? `mailto:${href}` : href;
}

async function getCurrentYear() {
  "use cache";

  return new Date().getFullYear();
}

export async function Footer() {
  const availableSocialLinks = socialLinks.filter((link) => link.href);
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] xl:px-10">
        <div>
          <Link href="/" className="font-heading text-xl font-semibold text-foreground">
            {siteProfile.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
            {siteProfile.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-text-muted">
            {siteProfile.positioning}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">Quick Links</h2>
          <nav className="mt-4" aria-label="Footer navigation">
            <ul className="space-y-3">
              {[
                ["Home", "/#home"],
                ["About", "/#about"],
                ["Services", "/#services"],
                ["Skills", "/#skills"],
                ["Experience", "/#experience"],
                ["Projects", "/#projects"],
                ["Education", "/#education"],
                ["Learning", "/#learning"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-text-muted transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">Services</h2>
          <ul className="mt-4 space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.id} className="text-sm text-text-muted">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">Connect</h2>
          <p className="mt-4 text-sm leading-6 text-text-muted">
            {siteProfile.location}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {availableSocialLinks.map((link) => {
              const Icon = iconByPlatform[link.platform];
              const href = getSocialHref(link.platform, link.href);

              return href ? (
                <a
                  key={link.platform}
                  href={href}
                  target={link.platform === "Email" ? undefined : "_blank"}
                  rel={link.platform === "Email" ? undefined : "noreferrer"}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-5 text-sm text-text-muted sm:flex-row sm:items-center sm:px-8 xl:px-10">
          <p>&copy; {currentYear} {siteProfile.name}. All rights reserved.</p>
          <Link
            href="/#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
