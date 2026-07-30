// Post-build step for GitHub Pages.
// Runs after `vite build` (static/prerendered mode) and prepares dist/client:
//   - .nojekyll  so files/folders starting with "_" are served
//   - 404.html   fallback so client-side routes still resolve on deep links
//   - CNAME      when CUSTOM_DOMAIN is set (e.g. CUSTOM_DOMAIN=example.com)
import { copyFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const outDir = process.env.PAGES_OUT_DIR ?? "dist/client";

await writeFile(join(outDir, ".nojekyll"), "");

const indexHtml = join(outDir, "index.html");
try {
  await access(indexHtml);
  await copyFile(indexHtml, join(outDir, "404.html"));
} catch {
  console.error(
    `[pages] Missing ${indexHtml} — the build did not prerender any HTML.`,
  );
  process.exit(1);
}

if (process.env.CUSTOM_DOMAIN) {
  await writeFile(join(outDir, "CNAME"), `${process.env.CUSTOM_DOMAIN}\n`);
}

console.log(`[pages] Static site ready in ${outDir}`);
