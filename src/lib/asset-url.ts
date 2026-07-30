/**
 * Prefixes an app-absolute asset path with the deployment base path.
 * Needed when the site is served from a subpath (e.g. GitHub Pages
 * project sites: /nordi-biotech-shine/). BASE_URL is "/" by default.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  if (!path.startsWith("/")) return path;
  return base.replace(/\/$/, "") + path;
}
