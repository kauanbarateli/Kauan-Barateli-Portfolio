import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { projects } from "../src/content.mjs";

const root = resolve(import.meta.dirname, "../dist");
const routes = [
  "index.html",
  "404.html",
  ...projects.map((p) => `projetos/${p.slug}/index.html`),
];

test("every generated page has valid local links, assets, and fragment targets", async () => {
  for (const route of routes) {
    const html = await readFile(resolve(root, route), "utf8");
    assert.match(html, /<html lang="pt-BR">/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
    for (const [, url] of html.matchAll(
      /(?:href|src)="([^"#][^"]*|#[^"]+)"/g,
    )) {
      if (/^(https?:|data:)/.test(url)) continue;
      const [pathname, fragment] = url.split("#");
      let target = pathname
        ? resolve(root, "." + pathname)
        : resolve(root, route);
      if (pathname.endsWith("/")) target = resolve(target, "index.html");
      await access(target);
      if (fragment)
        assert.ok(
          (await readFile(target, "utf8")).includes(`id="${fragment}"`),
          `${route}: missing ${url}`,
        );
    }
  }
});

test("every project screen has both formats and documented provenance", async () => {
  assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length);
  for (const project of projects) {
    for (const frame of project.frames) {
      for (const name of [frame.image, frame.mobile]) {
        const bytes = await readFile(
          resolve(root, `assets/visuals/${name}.webp`),
        );
        assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
        const provenance = JSON.parse(
          await readFile(
            resolve(root, `../assets/visuals/${name}.webp.json`),
            "utf8",
          ),
        );
        assert.ok(provenance.origin || provenance.prompt, name);
      }
    }
  }
});

test("portfolio presents two real projects with honest status and no budget form", async () => {
  const html = await readFile(resolve(root, "index.html"), "utf8");
  assert.equal(projects.length, 2);
  assert.match(html, /Em desenvolvimento/);
  for (const project of projects)
    assert.match(html, new RegExp(`href="/projetos/${project.slug}/"`));
  assert.doesNotMatch(html, /<form|Solicitar orçamento|Peça um orçamento/);
  assert.match(html, /https:\/\/www.linkedin.com\/in\/kauan-barateli\//);
});

test("gallery tabs point to a labeled panel and full capture has a fallback", async () => {
  for (const project of projects) {
    const html = await readFile(
      resolve(root, `projetos/${project.slug}/index.html`),
      "utf8",
    );
    assert.equal(
      (html.match(/role="tab"/g) || []).length,
      project.frames.length,
    );
    assert.match(html, /role="tabpanel" aria-labelledby="tab-0"/);
    assert.match(html, /class="text-link full-capture"/);
    assert.match(html, /<noscript>/);
  }
});

test("distribution excludes source, original photos, and developer documents", async () => {
  const files = await readdir(root, { recursive: true });
  assert.ok(
    !files.some((file) =>
      /\.impeccable|\.git|\.env|\.enc|PRODUCT\.md|^src[\\/]/.test(file),
    ),
  );
  await access(resolve(root, "assets/fonts/OFL.txt"));
  await access(resolve(root, "assets/visuals/social-preview.webp"));
});
