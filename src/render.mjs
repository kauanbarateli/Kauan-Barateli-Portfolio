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
  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12"/></svg>';
const icon = (name) =>
  name === "desktop"
    ? '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>'
    : '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>';
const img = (name, alt, cls = "", lazy = true) =>
  `<img src="/assets/visuals/${name}.webp" alt="${esc(alt)}" class="${cls}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async">`;
const link = (url, text, cls = "text-link") =>
  `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${text}${external}<span class="sr-only"> (abre em nova aba)</span></a>`;
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
const header = (
  detail = false,
) => `<header class="site-header"><a class="brand" href="/" aria-label="Kauan Barateli — início"><span class="brand-mark" aria-hidden="true">kb.</span><span>Kauan Barateli</span></a>
<nav aria-label="Navegação principal"><a href="${detail ? "/" : ""}#projetos">Projetos</a><a href="${detail ? "/" : ""}#atuacao">Atuação</a><a href="${detail ? "/" : ""}#sobre">Sobre</a></nav>
<button class="motion-toggle" type="button" aria-label="Pausar movimento" aria-pressed="false" title="Pausar movimento"><svg aria-hidden="true" viewBox="0 0 24 24"><path class="pause-icon" d="M9 6v12m6-12v12"/><path class="play-icon" d="m9 5 10 7-10 7Z"/></svg></button></header>`;
const footer = () =>
  `<footer class="site-footer"><a class="brand" href="/">Kauan Barateli<span aria-hidden="true">.</span></a><p>Desenvolvimento com intenção.</p><div>${link(person.linkedin, "LinkedIn")}${link(person.github, "GitHub")}</div><span class="copyright">© 2026</span></footer>`;
const devices = (id) =>
  `<div class="device-controls" role="group" aria-label="Formato da captura de ${esc(id)}"><button type="button" data-device="desktop" aria-pressed="true">${icon("desktop")}<span>Desktop</span></button><button type="button" data-device="mobile" aria-pressed="false">${icon("mobile")}<span>Celular</span></button></div>`;
const frame = (
  p,
  id,
  detail = false,
) => `<div class="showcase ${p.tone}" data-preview data-name="${esc(p.name)}" data-desktop="${p.cover}" data-mobile="${p.mobile}">
<div class="showcase-toolbar"><span class="showcase-label">${esc(p.name)}</span>${devices(p.name)}</div>
<div class="device-stage"><div class="browser-frame"><div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span><i>${p.slug === "racao-de-canto" ? "racaodecanto" : "segundocerebro"}</i></div><div class="screen-scroll" tabindex="0" role="region" aria-label="Captura de ${esc(p.name)}; role para explorar a imagem">${img(p.cover, `Interface de ${p.name} em desktop`, "screen-image")}</div></div></div>
<p class="preview-status" aria-live="polite">${detail ? esc(p.frames[0].caption) : p.slug === "segundo-cerebro" ? "Protótipo · dados demonstrativos" : "Interface real · projeto publicado"}</p></div>`;

export function home() {
  return (
    head(
      "Kauan Barateli — Desenvolvimento web",
      "Sites, landing pages e produtos digitais. Conheça os projetos e a trajetória de Kauan Barateli.",
    ) +
    header() +
    `
<main id="conteudo"><section class="hero" aria-labelledby="hero-title"><div class="hero-intro"><h1 id="hero-title">Da ideia à<br><span>experiência.</span></h1><div class="hero-description"><p>Sou Kauan Barateli. Desenvolvo sites e produtos digitais com cuidado em cada detalhe.</p><a class="text-link" href="#projetos">Explore os projetos ${arrow}</a></div></div>
<div class="hero-stage"><img class="material-image" src="/assets/visuals/material.webp" alt="" fetchpriority="high" width="1536" height="1024"><a class="hero-window hero-window-main" href="/projetos/segundo-cerebro/" aria-label="Explorar Segundo Cérebro"><div class="hero-window-chrome" aria-hidden="true"><span></span><span></span><span></span><i>Segundo Cérebro</i></div>${img("sc-prototype", "Visão geral do protótipo Segundo Cérebro", "", false)}</a><a class="hero-window hero-window-secondary" href="/projetos/racao-de-canto/" aria-label="Explorar Ração de Canto"><div class="hero-window-chrome" aria-hidden="true"><span></span><span></span><span></span><i>Ração de Canto</i></div>${img("racao-desktop", "Landing page do Ração de Canto", "", false)}</a></div>
<div class="hero-foot"><span>Interfaces, desenvolvimento e movimento.</span><a href="#projetos" aria-label="Rolar para os projetos">Conheça meu trabalho ${arrow}</a></div></section>
<section id="projetos" class="work-section section-wrap" aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title">Trabalho em foco.</h2><p>Da causa social à organização pessoal.<br>Cada projeto começa com uma necessidade.</p></div>
${projects.map((p) => `<article class="project"><div class="project-heading"><div><h3><a href="/projetos/${p.slug}/">${esc(p.name)} ${external}</a></h3><p class="project-type">${esc(p.type)}<span>${esc(p.status)}</span></p></div><p>${esc(p.description)}</p></div>${frame(p, p.slug)}<div class="project-foot">${tech(p)}<a class="text-link" href="/projetos/${p.slug}/">Explorar projeto ${arrow}</a></div></article>`).join("")}
</section>
<section id="atuacao" class="practice-section section-wrap" aria-labelledby="practice-title"><div class="section-heading"><h2 id="practice-title">Forma e função.<br>Do começo ao fim.</h2><p>Interfaces que expressam uma ideia.<br>Desenvolvimento que a coloca em prática.</p></div><div class="practice-list"><div><h3>Landing pages</h3><p>Uma mensagem clara, uma narrativa visual e um caminho simples para agir.</p></div><div><h3>Sites institucionais</h3><p>Uma presença digital que apresenta a identidade, o trabalho e o valor de uma marca.</p></div><div><h3>Experiências digitais</h3><p>Interfaces e aplicações personalizadas para resolver necessidades do dia a dia.</p></div></div></section>
<section id="sobre" class="about-section section-wrap" aria-labelledby="about-title"><div class="portrait-wrap">${img("portrait", "Kauan Sousa Barateli", "portrait")}<p>Kauan Sousa Barateli<br><span>Desenvolvedor web · Maranhão, Brasil</span></p></div><div class="about-copy"><h2 id="about-title">Curiosidade para criar.<br>Cuidado para construir.</h2><p>Tenho 22 anos e há mais de cinco trabalho com tecnologia. Nesse caminho, construí interfaces para e-commerces e atuei na liderança de equipes.</p><p>Hoje, curso Engenharia de Software na UNDB e desenvolvo o Segundo Cérebro: um aplicativo para ajudar pessoas a organizar diferentes áreas da vida.</p><div class="about-links">${link(person.linkedin, "Minha trajetória no LinkedIn")}${link(person.github, "Meus projetos no GitHub")}</div></div></section></main>${footer()}</body></html>`
  );
}

export function projectPage(p) {
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    head(`${p.name} — Kauan Barateli`, p.description, `/projetos/${p.slug}/`) +
    header(true) +
    `
<main id="conteudo" class="case-page"><section class="case-intro section-wrap"><a class="back-link" href="/#projetos">${arrow} Todos os projetos</a><div class="case-title"><h1>${p.title.split("\n").map(esc).join("<br>")}</h1><div><p>${esc(p.summary)}</p><div class="case-links">${link(p.source, p.sourceLabel, "button button-dark")}${link(p.repo, "Código no GitHub")}</div></div></div><dl class="project-details"><div><dt>Projeto</dt><dd>${esc(p.name)}</dd></div><div><dt>Formato</dt><dd>${esc(p.type)}</dd></div><div><dt>Status</dt><dd>${esc(p.status)}</dd></div><div><dt>Tecnologias</dt><dd>${p.tech.map(esc).join(" · ")}</dd></div></dl></section>
<section id="demonstracao" class="case-gallery section-wrap" aria-labelledby="gallery-title"><div class="gallery-heading"><h2 id="gallery-title">Explore a interface.</h2><p>Alterne as telas e veja os detalhes de cada formato.</p></div><div class="gallery-tabs" role="tablist" aria-label="Telas do ${esc(p.name)}">${p.frames.map((f, i) => `<button type="button" role="tab" id="tab-${i}" aria-controls="preview-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}" data-frame="${esc(f.image)}" data-mobile="${esc(f.mobile)}" data-caption="${esc(f.caption)}">${esc(f.name)}</button>`).join("")}</div><div id="preview-panel" role="tabpanel" aria-labelledby="tab-0">${frame(p, p.slug, true)}</div><div class="capture-note"><span>Galeria de capturas. Use a rolagem dentro da tela para ver mais.</span><a class="text-link full-capture" href="/assets/visuals/${p.cover}.webp" target="_blank" rel="noopener">Abrir imagem completa ${external}<span class="sr-only"> (nova aba)</span></a></div><noscript><p>As outras telas também estão disponíveis: ${p.frames
      .slice(1)
      .map(
        (f) => `<a href="/assets/visuals/${f.image}.webp">${esc(f.name)}</a>`,
      )
      .join(" · ")}.</p></noscript></section>
<section class="case-story section-wrap"><div><h2>${esc(p.challenge)}</h2><p>${esc(p.challengeText)}</p></div><div class="decision-list">${p.decisions.map(([title, body]) => `<div><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`).join("")}</div></section>
<aside class="next-project section-wrap"><a href="/projetos/${next.slug}/" aria-label="Próximo projeto: ${esc(next.name)}">${esc(next.name)} ${arrow}</a></aside></main>${footer()}</body></html>`
  );
}

export const notFound = () =>
  head(
    "Página não encontrada — Kauan Barateli",
    "Volte ao portfólio para explorar os projetos.",
  ) +
  header(true) +
  `<main id="conteudo" class="not-found section-wrap"><h1>Essa página<br>ficou pelo caminho.</h1><p>Você pode continuar pelos projetos do portfólio.</p><a class="button button-dark" href="/#projetos">Ver projetos ${arrow}</a></main>` +
  footer() +
  "</body></html>";
