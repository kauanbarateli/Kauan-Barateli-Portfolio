import { person, projects, homeCopy } from "./content.mjs";

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
// Shared name between the catalog and the project page, for the page transition.
const vtName = (p) =>
  `<span class="vt-name" style="view-transition-name: projeto-${p.slug}">${esc(p.name)}</span>`;
const status = (p) =>
  `<span class="status${p.live ? " is-live" : ""}">${esc(p.status)}</span>`;
const tech = (p) =>
  `<ul class="technologies" aria-label="Tecnologias">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const words = (text) =>
  text
    .split(" ")
    .map((w) => `<span class="word">${esc(w)}</span>`)
    .join(" ");
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
<nav aria-label="Navegação principal"><a href="${base}#projetos">Projetos</a><a href="${base}#atuacao">Atuação</a><a href="${base}#sobre">Sobre</a></nav>
<button class="motion-toggle" type="button" aria-label="Pausar movimento" aria-pressed="false" title="Pausar movimento"><svg aria-hidden="true" viewBox="0 0 24 24"><path class="pause-icon" d="M9 6v12m6-12v12"/><path class="play-icon" d="m9 5 10 7-10 7Z"/></svg></button></div></header>`;
};
const footer = () =>
  `<footer class="site-footer"><a class="brand" href="/">Kauan Barateli<span aria-hidden="true">.</span></a><p>${esc(person.role)} · ${esc(person.place)}</p><div>${link(person.linkedin, "LinkedIn")}${link(person.github, "GitHub")}</div><span class="copyright">© 2026</span></footer>`;
const devices = (id) =>
  `<div class="device-controls" role="group" aria-label="Formato da tela de ${esc(id)}"><button type="button" data-device="desktop" aria-pressed="true">${icon("desktop")}<span>Desktop</span></button><button type="button" data-device="mobile" aria-pressed="false">${icon("mobile")}<span>Celular</span></button></div>`;
const frame = (
  p,
  detail = false,
) => `<div class="showcase ${p.tone}" data-preview data-name="${esc(p.name)}" data-desktop="${p.cover}" data-mobile="${p.mobile}">
<div class="showcase-toolbar">${devices(p.name)}</div>
<div class="device-stage"><div class="browser-frame"><div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span><i>${esc(p.name)}</i></div><div class="screen-scroll" tabindex="0" role="region" aria-label="Tela de ${esc(p.name)}; role para ver a página inteira">${img(p.cover, `Interface de ${p.name} em desktop`, "screen-image")}</div></div></div>
<p class="preview-status" aria-live="polite">${esc(detail ? p.frames[0].caption : p.preview)}</p></div>`;
const projectLinks = (p) =>
  `<div class="project-links"><a class="text-link" href="/projetos/${p.slug}/">Conhecer o projeto ${arrow}</a>${link(p.source, p.sourceLabel)}</div>`;

export function home() {
  const c = homeCopy;
  return (
    head(
      "Kauan Barateli — Desenvolvedor web",
      "Sites e aplicativos feitos com cuidado. Conheça os projetos de Kauan Barateli, desenvolvedor web do Maranhão.",
    ) +
    header() +
    `
<main id="conteudo"><section class="hero" aria-labelledby="hero-title"><div class="hero-intro"><h1 id="hero-title">${esc(c.title)} <span>${esc(c.titleEcho)}</span></h1><p class="hero-lead">${esc(c.lead)}</p><div class="hero-actions"><a class="button button-dark" href="#projetos">Ver projetos ${arrow}</a><a class="text-link" href="#sobre">Sobre mim ${arrow}</a></div></div>
<div class="hero-stage"><img class="material-image" src="/assets/visuals/material.webp" alt="" fetchpriority="high" width="1536" height="1024"><div class="hero-scene"><a class="hero-window hero-window-main" href="/projetos/segundo-cerebro/" aria-label="Ver o projeto Segundo Cérebro"><div class="hero-window-chrome" aria-hidden="true"><span></span><span></span><span></span><i>Segundo Cérebro</i></div>${img("sc-prototype", "Protótipo da tela inicial do Segundo Cérebro", "", false)}</a><a class="hero-window hero-window-secondary" href="/projetos/racao-de-canto/" aria-label="Ver o projeto Ração de Canto"><div class="hero-window-chrome" aria-hidden="true"><span></span><span></span><span></span><i>Ração de Canto</i></div>${img("racao-desktop", "Página inicial do site Ração de Canto", "", false)}</a></div></div></section>
<section id="projetos" class="work-section section-wrap" aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title">${esc(c.workTitle)}</h2><p>${esc(c.workLead)}</p></div>
${projects.map((p) => `<article class="project" aria-labelledby="projeto-${p.slug}"><div class="project-heading"><h3 id="projeto-${p.slug}"><a href="/projetos/${p.slug}/">${vtName(p)}</a></h3><p class="project-tagline">${esc(p.tagline)}</p><p class="project-meta">${status(p)}<span>${esc(p.type)}</span></p>${projectLinks(p)}</div>${frame(p)}<div class="project-foot">${tech(p)}</div></article>`).join("")}
</section>
<section id="atuacao" class="practice-section" aria-labelledby="practice-title"><div class="section-wrap"><h2 id="practice-title" class="statement" data-words>${words(c.statement)}</h2><div class="practice-list">${c.services.map(([title, body]) => `<div><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`).join("")}</div></div></section>
<section id="sobre" class="about-section section-wrap" aria-labelledby="about-title"><div class="portrait-wrap">${img("portrait", "Kauan Sousa Barateli", "portrait")}<p>Kauan Sousa Barateli<br><span>${esc(person.role)} · ${esc(person.place)}</span></p></div><div class="about-copy"><h2 id="about-title">${esc(c.aboutTitle)}</h2>${c.about.map((t) => `<p>${esc(t)}</p>`).join("")}<div class="about-links">${link(person.linkedin, "Minha trajetória no LinkedIn")}${link(person.github, "Meu código no GitHub")}</div></div></section></main>${footer()}</body></html>`
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
<main id="conteudo" class="case-page"><section class="case-intro section-wrap" aria-labelledby="case-title"><a class="back-link" href="/#projetos">${arrow} Todos os projetos</a><div class="case-title"><div><h1 id="case-title">${vtName(p)}</h1><p class="case-lead">${esc(p.tagline)}</p></div><div><p>${esc(p.summary)}</p><div class="case-links">${link(p.source, p.sourceLabel, "button button-dark")}${p.repo === p.source ? "" : link(p.repo, "Código no GitHub")}</div></div></div><dl class="project-details"><div><dt>Tipo</dt><dd>${esc(p.type)}</dd></div><div><dt>Status</dt><dd>${status(p)}</dd></div><div><dt>Tecnologias</dt><dd>${p.tech.map(esc).join(" · ")}</dd></div></dl></section>
<section id="demonstracao" class="case-gallery section-wrap" aria-labelledby="gallery-title"><div class="gallery-heading"><h2 id="gallery-title">Navegue pelas telas.</h2><p>${esc(p.galleryNote)}</p></div><div class="gallery-tabs" role="tablist" aria-label="Telas do ${esc(p.name)}">${p.frames.map((f, i) => `<button type="button" role="tab" id="tab-${i}" aria-controls="preview-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}" data-frame="${esc(f.image)}" data-mobile="${esc(f.mobile)}" data-caption="${esc(f.caption)}">${esc(f.name)}</button>`).join("")}</div><div id="preview-panel" role="tabpanel" aria-labelledby="tab-0">${frame(p, true)}</div><div class="capture-note"><span>Role dentro da tela para ver a página inteira.</span><a class="text-link full-capture" href="/assets/visuals/${p.cover}.webp" target="_blank" rel="noopener">Abrir em tamanho real ${external}<span class="sr-only"> (nova aba)</span></a></div><noscript><p>Outras telas: ${p.frames
      .slice(1)
      .map(
        (f) => `<a href="/assets/visuals/${f.image}.webp">${esc(f.name)}</a>`,
      )
      .join(" · ")}.</p></noscript></section>
<section class="case-story section-wrap" aria-labelledby="story-title"><div class="case-story-lead"><h2 id="story-title">${esc(p.challenge)}</h2><p>${esc(p.challengeText)}</p></div><div class="decision-list">${p.decisions.map(([title, body]) => `<div><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`).join("")}</div></section>
<aside class="next-project section-wrap" aria-label="Próximo projeto"><a href="/projetos/${next.slug}/"><span class="next-copy">${vtName(next)}<span class="next-tagline">${esc(next.tagline)}</span></span>${arrow}</a></aside></main>${footer()}</body></html>`
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
