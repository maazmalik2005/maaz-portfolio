const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
    : undefined);

export const siteUrl = configuredSiteUrl?.replace(/\/+$/, "");

export function absoluteUrl(path: string) {
  if (!siteUrl) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
