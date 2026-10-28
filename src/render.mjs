import { person, projects } from "./content.mjs";

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const arrow =
  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const external =
  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const icon = (name) =>
  name === "desktop"
    ? '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>'
    : '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>';
const img = (name, alt, cls = "", lazy = true) =>
  `<img src="/assets/visuals/${name}.webp" alt="${esc(alt)}" class="${cls}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async">`;
const link = (url, text, cls = "text-link") =>
  `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${text}${external}<span class="sr-only"> (abre em nova aba)</span></a>`;
const status = (p) =>
  `<span class="status${p.live ? " is-live" : ""}">${esc(p.status)}</span>`;
const tech = (p) =>
  `<ul class="technologies" aria-label="Tecnologias">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const head = (
  title,
  description,
  path = "/",
) => `<!doctype html><html lang="pt-BR"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#f7f7f5"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:image" content="https://portfolio-one-umber-68.vercel.app/assets/visuals/social-preview.webp">
<link rel="canonical" href="https://portfolio-one-umber-68.vercel.app${path}"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<link rel="preload" href="/assets/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/portfolio.css"><script src="/js/app.js" defer></script></head><body class="no-js">
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>`;
const header = (detail = false) => {
  const base = detail ? "/" : "";
  return `<header class="site-header"><div class="site-header-inner"><a class="brand" href="/" aria-label="Kauan Barateli, início"><span class="brand-mark" aria-hidden="true">kb.</span><span class="brand-name">Kauan Barateli</span></a>
<nav aria-label="Navegação principal"><a href="${base}#projetos">Projetos</a></nav></div></header>`;
};
const footer = () =>
  `<footer class="site-footer"><a class="brand" href="/">Kauan Barateli<span aria-hidden="true">.</span></a><p>${esc(person.role)} · ${esc(person.place)}</p><div>${link(person.linkedin, "LinkedIn")}${link(person.github, "GitHub")}</div><span class="copyright">© 2026</span></footer>`;
const devices = (id) =>
  `<div class="device-controls" role="group" aria-label="Formato da tela de ${esc(id)}"><button type="button" data-device="desktop" aria-pressed="true">${icon("desktop")}<span>Desktop</span></button><button type="button" data-device="mobile" aria-pressed="false">${icon("mobile")}<span>Celular</span></button></div>`;
const browserBar = (p) =>
  `<div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span><i>${esc(p.name)}</i></div>`;
const frame = (p) => `<div class="showcase ${p.tone}" data-preview data-name="${esc(p.name)}" data-desktop="${p.cover}" data-mobile="${p.mobile}">
<div class="showcase-toolbar">${devices(p.name)}</div>
<div class="device-stage"><div class="browser-frame">${browserBar(p)}<div class="screen-scroll" tabindex="0" role="region" aria-label="Tela de ${esc(p.name)}; role para ver a página inteira">${img(p.cover, `Interface de ${p.name} em desktop`, "screen-image")}</div></div></div>
<p class="preview-status" aria-live="polite">${esc(p.frames[0].caption)}</p></div>`;
const projectLinks = (p) =>
  `<div class="project-links"><a class="text-link" href="/projetos/${p.slug}/">Conhecer o projeto ${arrow}</a>${link(p.source, p.sourceLabel)}</div>`;

// A project panel on the home page. The screens are a picture of the project:
// the text links carry the navigation, so the screens link is hidden from assistive tech.
const panel = (p, index) => {
  const first = index === 0;
  const screen = (name) =>
    `<div class="device-screen"><img src="/assets/visuals/${name}.webp" alt="" ${first ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>`;
  return `<article class="project ${p.tone}${index % 2 ? " is-reversed" : ""}" aria-labelledby="projeto-${p.slug}">${p.backdrop ? `<img class="project-backdrop" src="/assets/visuals/${p.backdrop}.webp" alt="" ${first ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">` : ""}
<div class="project-copy"><h2 id="projeto-${p.slug}"><a href="/projetos/${p.slug}/">${esc(p.name)}</a></h2><p class="project-tagline">${esc(p.tagline)}</p><p class="project-meta">${status(p)}<span>${esc(p.type)}</span></p>${projectLinks(p)}${tech(p)}</div>
<a class="project-media" href="/projetos/${p.slug}/" tabindex="-1" aria-hidden="true"><div class="devices"><div class="device-desktop">${browserBar(p)}${screen(p.cover)}</div><div class="device-phone">${screen(p.mobile)}</div></div></a></article>`;
};

export function home() {
  return (
    head(
      "Kauan Barateli — Projetos",
      "Projetos de desenvolvimento web de Kauan Barateli: o aplicativo Segundo Cérebro e o site do Ração de Canto.",
    ) +
    header() +
    `
<main id="conteudo"><h1 class="sr-only">Projetos de Kauan Barateli</h1>
<div id="projetos" class="projects">
${projects.map(panel).join("\n")}
</div></main>${footer()}</body></html>`
  );
}

export function projectPage(p) {
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    head(
      `${p.name} — Kauan Barateli`,
      `${p.tagline} ${p.summary}`,
      `/projetos/${p.slug}/`,
    ) +
    header(true) +
    `
<main id="conteudo" class="case-page"><section class="case-intro section-wrap" aria-labelledby="case-title"><a class="back-link" href="/#projetos">${arrow} Todos os projetos</a><div class="case-title"><div><h1 id="case-title">${esc(p.name)}</h1><p class="case-lead">${esc(p.tagline)}</p></div><div><p>${esc(p.summary)}</p><div class="case-links">${link(p.source, p.sourceLabel, "button button-dark")}${p.repo === p.source ? "" : link(p.repo, "Código no GitHub")}</div></div></div><dl class="project-details"><div><dt>Tipo</dt><dd>${esc(p.type)}</dd></div><div><dt>Status</dt><dd>${status(p)}</dd></div><div><dt>Tecnologias</dt><dd>${p.tech.map(esc).join(" · ")}</dd></div></dl></section>
<section id="demonstracao" class="case-gallery section-wrap" aria-labelledby="gallery-title"><div class="gallery-heading"><h2 id="gallery-title">Navegue pelas telas.</h2><p>${esc(p.galleryNote)}</p></div><div class="gallery-tabs" role="tablist" aria-label="Telas do ${esc(p.name)}">${p.frames.map((f, i) => `<button type="button" role="tab" id="tab-${i}" aria-controls="preview-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}" data-frame="${esc(f.image)}" data-mobile="${esc(f.mobile)}" data-caption="${esc(f.caption)}">${esc(f.name)}</button>`).join("")}</div><div id="preview-panel" role="tabpanel" aria-labelledby="tab-0">${frame(p)}</div><div class="capture-note"><span>Role dentro da tela para ver a página inteira.</span><a class="text-link full-capture" href="/assets/visuals/${p.cover}.webp" target="_blank" rel="noopener">Abrir em tamanho real ${external}<span class="sr-only"> (nova aba)</span></a></div><noscript><p>Outras telas: ${p.frames
      .slice(1)
      .map(
        (f) => `<a href="/assets/visuals/${f.image}.webp">${esc(f.name)}</a>`,
      )
      .join(" · ")}.</p></noscript></section>
<section class="case-story section-wrap" aria-labelledby="story-title"><div class="case-story-lead"><h2 id="story-title">${esc(p.challenge)}</h2><p>${esc(p.challengeText)}</p></div><div class="decision-list">${p.decisions.map(([title, body]) => `<div><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`).join("")}</div></section>
<aside class="next-project section-wrap" aria-label="Próximo projeto"><a href="/projetos/${next.slug}/"><span class="next-copy"><span class="next-name">${esc(next.name)}</span><span class="next-tagline">${esc(next.tagline)}</span></span>${arrow}</a></aside></main>${footer()}</body></html>`
  );
}

export const notFound = () =>
  head(
    "Página não encontrada — Kauan Barateli",
    "Essa página não existe. Volte ao portfólio para ver os projetos.",
  ) +
  header(true) +
  `<main id="conteudo" class="not-found section-wrap"><h1>Essa página<br>não existe.</h1><p>Talvez o link tenha mudado. Os projetos continuam aqui.</p><a class="button button-dark" href="/#projetos">Ver projetos ${arrow}</a></main>` +
  footer() +
  "</body></html>";
