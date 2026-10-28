import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

// Optional QA dependency. Production and build do not require Playwright.
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
const browser = await chromium.launch({
  headless: true,
  ...(process.env.BROWSER_PATH
    ? { executablePath: process.env.BROWSER_PATH }
    : {}),
});
const base = process.env.BASE_URL || "http://127.0.0.1:41740";
const output = ".impeccable/review";
await mkdir(output, { recursive: true });
const errors = [];
const report = [];
const page = await browser.newPage({ reducedMotion: "reduce" });
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (r) => {
  if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
});
const settle = async () =>
  page.evaluate(async () => {
    document
      .querySelectorAll("img")
      .forEach((image) => (image.loading = "eager"));
    await Promise.all([...document.images].map((image) => image.decode()));
    await document.fonts.ready;
  });

const assertSelectedTabVisible = async () => {
  const geometry = await page
    .locator('[role="tab"][aria-selected="true"]')
    .evaluate((tab) => {
      const rect = tab.getBoundingClientRect();
      const parent = tab.parentElement.getBoundingClientRect();
      return {
        left: rect.left - parent.left,
        right: parent.right - rect.right,
      };
    });
  assert.ok(
    geometry.left >= 8 && geometry.right >= 8,
    `Clipped selected tab: ${JSON.stringify(geometry)}`,
  );
};

try {
  for (const width of [320, 390, 768, 1440]) {
    for (const route of [
      "/",
      "/projetos/segundo-cerebro/",
      "/projetos/racao-de-canto/",
    ]) {
      await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
      await page.goto(base + route, { waitUntil: "networkidle" });
      await settle();
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        width,
        `overflow at ${route} ${width}`,
      );
      assert.ok(await page.locator('nav a[href$="#projetos"]').isVisible());
      for (const preview of await page.locator("[data-preview]").all()) {
        if (width < 701)
          assert.equal(
            await preview
              .locator('[data-device="mobile"]')
              .getAttribute("aria-pressed"),
            "true",
          );
        for (const device of ["mobile", "desktop"]) {
          await preview.locator(`[data-device="${device}"]`).click();
          await preview
            .locator(".screen-image")
            .evaluate((image) => image.decode());
          assert.equal(
            await preview
              .locator(`[data-device="${device}"]`)
              .getAttribute("aria-pressed"),
            "true",
          );
          assert.ok(
            (
              await preview.locator(".screen-image").getAttribute("alt")
            ).includes(device === "mobile" ? "celular" : "desktop"),
          );
        }
        if (width < 701)
          await preview.locator('[data-device="mobile"]').click();
      }
      for (const tab of await page.locator('[role="tab"]').all()) {
        await tab.click();
        await settle();
        await assertSelectedTabVisible();
        const name = await tab.getAttribute(
          width < 701 ? "data-mobile" : "data-frame",
        );
        assert.ok(
          (await page.locator(".screen-image").getAttribute("src")).includes(
            name,
          ),
        );
        assert.equal(
          await page.locator('[role="tab"][aria-selected="true"]').count(),
          1,
        );
      }
      if (route !== "/") {
        const first = page.locator('[role="tab"]').first();
        await first.focus();
        await page.keyboard.press("End");
        await assertSelectedTabVisible();
        assert.equal(
          await page
            .locator('[role="tab"]')
            .last()
            .getAttribute("aria-selected"),
          "true",
        );
        await page.keyboard.press("Home");
        await assertSelectedTabVisible();
        assert.equal(await first.getAttribute("aria-selected"), "true");
        if (width < 701) {
          const gap = await page
            .locator(".capture-note")
            .evaluate(
              (note) =>
                note.children[1].getBoundingClientRect().top -
                note.children[0].getBoundingClientRect().bottom,
            );
          assert.ok(gap >= 8, `Caption/link gap: ${gap}`);
        }
      }
      await settle();
      await page.evaluate(() => scrollTo(0, 0));
      const name =
        route === "/"
          ? width === 1440
            ? "desktop"
            : width === 390
              ? "mobile"
              : `home-${width}`
          : `${route.includes("segundo") ? "case" : "racao"}-${width}`;
      await page.screenshot({ path: `${output}/${name}.png`, fullPage: true });
      report.push({
        route,
        width,
        overflow: false,
        images: true,
        formats: true,
        tabs: true,
        keyboard: true,
      });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/projetos/segundo-cerebro/");
  await page.getByRole("tab", { name: "Financeiro", exact: true }).click();
  await settle();
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `${output}/finance-desktop.png`,
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('[data-device="mobile"]').click();
  await settle();
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `${output}/finance-mobile.png`,
    fullPage: true,
  });

  // Even with motion allowed, the project panels stay static while scrolling.
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.evaluate(() => scrollTo({ top: innerHeight, behavior: "instant" }));
  assert.deepEqual(
    await page.evaluate(() => {
      const sticky = [...document.querySelectorAll("main *")].filter(
        (el) => getComputedStyle(el).position === "sticky",
      ).length;
      const moved = [...document.querySelectorAll(".device-screen img")].filter(
        (img) => getComputedStyle(img).transform !== "none",
      ).length;
      return { sticky, moved, toggle: !!document.querySelector(".motion-toggle") };
    }),
    { sticky: 0, moved: 0, toggle: false },
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.ok(
    await page
      .locator(".skip-link")
      .evaluate((el) => el === document.activeElement),
  );
  await page.keyboard.press("Enter");
  assert.equal(new URL(page.url()).hash, "#conteudo");

  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const fallback = await noJS.newPage();
  await fallback.goto(base + "/projetos/segundo-cerebro/");
  assert.ok(await fallback.locator("h1").isVisible());
  assert.ok(await fallback.locator("noscript").isVisible());
  assert.equal(await fallback.locator(".gallery-tabs").isVisible(), false);
  await noJS.close();

  await page.setViewportSize({ width: 1200, height: 850 });
  await page.goto(base);
  await settle();
  await page.screenshot({
    path: `${output}/social-source.png`,
    clip: { x: 0, y: 100, width: 1200, height: 630 },
  });
  assert.deepEqual(errors, []);
  await writeFile(
    `${output}/browser-results.json`,
    JSON.stringify(
      {
        result: "passed",
        viewports: report,
        consoleErrors: errors,
        motion: "static project panels; no motion toggle",
        noJS: "content and fallback links available",
        keyboard: "skip link, tabs, arrows, Home and End",
      },
      null,
      2,
    ),
  );
  console.log(
    `PASS: ${report.length} route/viewport combinations; formats, tabs, static panels, keyboard and no-JS fallback.`,
  );
} finally {
  await browser.close();
}
