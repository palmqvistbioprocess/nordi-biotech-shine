// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export (GitHub Pages): set BASE_PATH when serving from a repo subpath,
// e.g. BASE_PATH=/my-repo/ . Defaults to "/" (custom domain / user site).
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route to static HTML so the build output contains real
    // index.html files (required by GitHub Pages).
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/cv", prerender: { enabled: true } },
      { path: "/contact", prerender: { enabled: true } },
      { path: "/publications", prerender: { enabled: true } },
    ],
  },
  // Outside the Lovable sandbox (e.g. GitHub Actions) emit a purely static site.
  nitro: { preset: "static" },
  vite: { base },
});
