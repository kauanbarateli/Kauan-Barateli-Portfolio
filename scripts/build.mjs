import { mkdir, writeFile, cp, readdir, rm, lstat } from "node:fs/promises";
import { resolve, dirname, basename } from "node:path";
import { home, projectPage, notFound } from "../src/render.mjs";
import { projects } from "../src/content.mjs";

const root = resolve(import.meta.dirname, "..");
const distribution = resolve(root, "dist");
if (dirname(distribution) !== root || basename(distribution) !== "dist") {
  throw new Error(
    "Refusing to clean an output directory outside this project.",
  );
}
const existing = await lstat(distribution).catch((error) => {
  if (error.code === "ENOENT") return null;
  throw error;
});
if (existing?.isSymbolicLink())
  throw new Error("dist must not be a symbolic link.");
await rm(distribution, { recursive: true, force: true });
const pages = [
  ["index.html", home()],
  ["404.html", notFound()],
  ...projects.map((project) => [
    `projetos/${project.slug}/index.html`,
    projectPage(project),
  ]),
];
for (const [path, html] of pages) {
  for (const base of [root, resolve(root, "dist")]) {
    const output = resolve(base, path);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
}
for (const path of [
  "css/portfolio.css",
  "js/app.js",
  "assets/favicon.svg",
  "assets/fonts",
]) {
  await mkdir(dirname(resolve(root, "dist", path)), { recursive: true });
  await cp(resolve(root, path), resolve(root, "dist", path), {
    recursive: true,
  });
}
await mkdir(resolve(root, "dist/assets/visuals"), { recursive: true });
for (const name of await readdir(resolve(root, "assets/visuals"))) {
  if (name.endsWith(".webp"))
    await cp(
      resolve(root, "assets/visuals", name),
      resolve(root, "dist/assets/visuals", name),
    );
}
console.log(`Built ${pages.length} pages. Static output: dist/`);
