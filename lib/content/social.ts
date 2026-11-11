import type { SocialLink } from "@/lib/types";
import { siteProfile } from "@/lib/content/site";

export const socialLinks: SocialLink[] = [
  { platform: "Email", label: "Professional Email", href: siteProfile.email },
  { platform: "LinkedIn", label: "LinkedIn", href: siteProfile.linkedin },
  { platform: "GitHub", label: "GitHub", href: siteProfile.github },
  { platform: "Instagram", label: "Instagram", href: siteProfile.instagram },
  { platform: "WhatsApp", label: "WhatsApp", href: siteProfile.whatsapp },
];
