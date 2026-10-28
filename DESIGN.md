---
name: "Portfólio de Kauan Barateli"
description: "Sistema visual implementado para um catálogo de interfaces reais, com voz em primeira pessoa."
colors:
  paper: "#f7f7f5"
  white: "#fff"
  ink: "#1c1d20"
  muted: "#65676c"
  echo: "#7d8085"
  line: "#d9dadc"
  dark: "#202226"
  accent: "#405c51"
  focus: "#507d69"
  night: "#121315"
  night-text: "#f3f3f1"
  night-muted: "#a2a4a9"
  night-dim: "#6b6d72"
  night-line: "#2c2e33"
  graphite-stage: "#e4e7e4"
  sand-stage: "#eae6df"
  dark-hover: "#3b3d42"
  tabs-hover: "#e8e9e6"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(48px, 7vw, 96px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 64px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  project-title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(42px, 6vw, 84px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  case-display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(48px, 6.4vw, 96px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(30px, 4.2vw, 58px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  tagline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(20px, 2.1vw, 30px)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  text-link:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.65
rounded:
  pill: "999px"
  browser: "10px"
  surface: "16px"
  stage: "20px"
  circular: "50%"
spacing:
  gutter: "clamp(24px, 4.5vw, 72px)"
  chapter: "clamp(112px, 13vw, 200px)"
  gap-compact: "12px"
  gap-medium: "24px"
  gap-large: "32px"
  gap-wide: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.dark-hover}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.text-link}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  site-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  motion-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circular}"
    padding: "0"
    width: "36px"
    height: "36px"
  status:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  device-control-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  gallery-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  gallery-tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
  showcase-graphite:
    backgroundColor: "{colors.graphite-stage}"
    rounded: "{rounded.surface}"
  showcase-sand:
    backgroundColor: "{colors.sand-stage}"
    rounded: "{rounded.surface}"
  night-chapter:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-text}"
    typography: "{typography.statement}"
---

# Design System: Portfólio de Kauan Barateli

## Overview

**Creative North Star: "Catálogo de produto digital"**

Um catálogo de produto digital com branco mineral, texto grafite e espaço negativo, contado em primeira pessoa. A tipografia Manrope concentra a expressão em títulos grandes e centralizados; a interface permanece discreta para que as capturas reais dos projetos ocupem o primeiro plano.

A página é organizada em capítulos, como uma página de produto: abertura, projetos, um capítulo escuro sobre como Kauan trabalha e a apresentação pessoal. Cada projeto tem nome, frase de apoio, estado e links antes da tela, nessa ordem. A profundidade vem de superfícies claras, sombras difusas e molduras de navegador. A fotografia autoral de material prateado é cenografia decorativa. O retrato aparece em escala de cinza e ganha cor sob o ponteiro; as capturas preservam as cores das interfaces.

Este documento registra o sistema existente em `css/portfolio.css`, `js/app.js` e `src/render.mjs`. Os textos ficam em `src/content.mjs`. Os tokens representam a base desktop; as alterações responsivas estão descritas abaixo e no sidecar. A estratégia e o conteúdo da superfície pertencem a `.impeccable/surfaces/portfolio.md` e `PRODUCT.md`.

**Key Characteristics:**

- Paleta neutra com um único capítulo escuro e verde discreto em estado e foco.
- Uma família tipográfica, contraste forte entre título, frase de apoio e metadados.
- Composição centralizada nos capítulos da página inicial; grade editorial nas páginas de projeto.
- Capturas reais com alternativas textuais e exploração por teclado.
- Movimento ligado à rolagem, opcional e sem interceptar o scroll.

## Voice

Primeira pessoa, frases curtas, português do dia a dia. Cada texto diz uma coisa só e evita pares de slogans paralelos ("Forma e função", "Do começo ao fim"). Nada de rótulos técnicos voltados ao processo, como "dados demonstrativos" ou números de PR, na interface: a honestidade sobre o estado de cada projeto aparece uma vez, em linguagem natural (o selo "Em desenvolvimento" e a nota da galeria). Afirmações factuais vêm de `PRODUCT.md`; opiniões são poucas e do próprio Kauan.

## Colors

A paleta é predominantemente neutra. O papel mineral e o grafite sustentam a composição; as áreas de apresentação têm variações suaves de cinza esverdeado e areia. O capítulo "Atuação" inverte o fundo para criar um pico de ritmo na rolagem.

### Primary

- **Grafite — ink:** texto principal, títulos, ação preenchida e aba selecionada.
- **Grafite de interação — dark:** texto do controle de dispositivo selecionado.
- **Grafite elevado — dark-hover:** resposta do botão preenchido e dos nomes de projeto ao ponteiro.

### Neutral

- **Papel mineral — paper:** fundo geral e base translúcida do cabeçalho.
- **Branco — white:** molduras de navegador, controle selecionado e texto sobre grafite.
- **Cinza de leitura — muted:** descrições, metadados e navegação de retorno (5.3:1 sobre o papel).
- **Eco — echo:** segunda linha do título da abertura (3.7:1, apenas em texto grande).
- **Linha mineral — line:** divisores e contorno do controle de movimento.
- **Cinza de exposição — graphite-stage:** palco do Segundo Cérebro.
- **Areia de exposição — sand-stage:** palco de Ração de Canto.
- **Cinza de passagem — tabs-hover:** fundo da aba sob o ponteiro.

### Night chapter

- **Noite — night:** fundo do capítulo "Atuação".
- **Texto noturno — night-text:** frase iluminada e títulos dos serviços (16.7:1).
- **Apoio noturno — night-muted:** descrições dos serviços (7.4:1).
- **Palavra apagada — night-dim:** palavras ainda não lidas da frase (3.6:1, apenas em texto grande).
- **Linha noturna — night-line:** divisores da lista de serviços.

O **verde de estado — accent** e o **verde de foco — focus** sinalizam o projeto publicado (ponto preenchido) e tornam a navegação por teclado visível. Não há uma paleta secundária de marca.

**The Hierarquia por tom Rule.** Reservar o grafite para títulos, frases de apoio e ações; usar o cinza de apoio em descrições e metadados. O verde sinaliza estado e foco, sem se tornar um preenchimento dominante.

## Typography

**Display Font:** Manrope, com Arial e sans-serif como alternativas.
**Body Font:** a mesma família. A fonte variável é servida localmente em `assets/fonts/manrope.woff2`, com intervalo declarado de pesos 400–800 e `font-display: swap`.

A hierarquia usa pesos regular, medium (frases de apoio) e semibold (títulos e ações). Títulos têm entreletra negativa e quebra balanceada; parágrafos usam `text-wrap: pretty` e limite geral de 70ch, com larguras menores nos textos de apoio.

### Hierarchy

- **Display:** título da abertura, centralizado, em duas vozes: grafite ("Eu crio sites") e eco ("que dá gosto usar."). Teto de 96px.
- **Headline:** títulos de capítulo.
- **Project title:** nomes dos projetos no catálogo e no link de próximo projeto.
- **Case display:** nome do projeto como h1 da página de projeto.
- **Statement:** frase longa do capítulo escuro, iluminada palavra a palavra.
- **Tagline:** frase de apoio sob o nome do projeto, em grafite e peso 500.
- **Lead:** texto introdutório da abertura, dos capítulos e da apresentação pessoal.
- **Title:** base para subtítulos; serviços usam até 34px e decisões de projeto 22px.
- **Body / label:** texto corrido e metadados; rótulos de controles usam 12–14px com peso 600.
- **Action / text link:** botões e links compartilham peso 600; links externos usam seta diagonal, internos seta horizontal.

Abaixo de 701px, o corpo e o lead passam a 16px. O título da abertura usa `clamp(32px, 10.6vw, 56px)` para que "que dá gosto usar." caiba em uma linha a partir de 320px; títulos de capítulo usam 36px, nomes de projeto 40px (36px até 360px), a frase do capítulo escuro 28px (25px até 360px) e o título de projeto 46px (38px até 360px).

## Layout

O conteúdo principal ocupa um contêiner central de até 1296px, descontando duas vezes o gutter. O cabeçalho fixo chega a 1392px. A abertura tem texto em até 1040px e um palco de largura total, recortado em até 1488px no estado inicial.

O ritmo alterna capítulos separados por `--chapter` (112–200px) com agrupamentos próximos de nome, frase de apoio, estado e links. Na página inicial, cabeçalhos de capítulo e de projeto são centralizados; serviços e apresentação pessoal usam duas colunas. Nas páginas de projeto, título e resumo ficam em grade 1.15:1, e a história usa duas colunas com o desafio fixo enquanto as decisões rolam.

As mudanças são orientadas pelo conteúdo:

- **Até 1000px:** estreitar intervalos e prévias; os metadados de projeto passam a duas colunas, tecnologias ocupam a linha inteira.
- **De 701px a 900px:** a nota da galeria passa para baixo do título.
- **Até 700px:** gutter de 24px, capítulos de 104px, grupos principais em uma coluna, texto sobre o autor antes do retrato e navegação horizontal compacta. A abertura perde o movimento ligado à rolagem; a prévia inicia em celular.
- **Até 360px:** gutter de 20px; o cabeçalho mostra apenas a marca "kb." para manter os três links e o controle de movimento em uma linha.
- **A partir de 1600px:** abertura mais alta.

As abas mantêm rolagem horizontal própria com 10px de padding para não cortar o foco. No celular, a captura desktop tem altura automática e limite de 385px; o palco ajusta sua altura, com mínimo de 230px.

## Elevation & Depth

O conteúdo editorial é plano, dividido por linhas, espaço e pela inversão do capítulo escuro. O cabeçalho é translúcido (papel a 80% com desfoque) porque o trabalho passa por baixo dele durante a rolagem; uma linha de 1px aparece depois do primeiro pixel rolado. As molduras de navegador recebem sombras difusas; o estado selecionado do seletor de dispositivo tem uma sombra pequena. Os valores completos estão em `.impeccable/design.json`.

A abertura sobrepõe duas interfaces sobre a fotografia de material prateado. Em telas a partir de 701px, a rolagem abre o palco até a largura total e endireita as molduras. O celular conserva uma composição estática inclinada.

**The Profundidade da interface Rule.** Aplicar sombras às molduras de interfaces e ao estado selecionado dos controles; separar o restante do conteúdo com espaço, linhas finas e mudança de fundo.

## Shapes

Cantos suaves distinguem os níveis: palco da abertura 20px (14px no celular), superfícies e retrato 16px, molduras 10px. Botões, abas e o seletor de dispositivo são pílulas. As prévias desktop têm apenas os cantos superiores arredondados; a versão de celular usa cantos superiores de 24px na moldura e 17px na área interna. O controle de movimento, o ponto de estado e os pontos decorativos do navegador são circulares.

## Motion

Três momentos ligados à rolagem e uma continuidade entre páginas, todos opcionais:

- **Abertura (foco principal):** o JavaScript escreve `--p` (0–1) no palco ao longo de 55% da altura da janela. O CSS usa `--p` para abrir o recorte (`clip-path: inset`) até a largura total, zerar o raio e endireitar as duas molduras. Sem `--p`, a composição é a estática.
- **Frase do capítulo escuro:** as palavras começam em `night-dim` e passam para `night-text` na ordem de leitura conforme a frase atravessa a janela, com transição de cor de 420ms.
- **Telas dos projetos:** onde o navegador suporta `animation-timeline: view()`, o palco sobe 72px e cresce de 0.94 para 1 ao entrar na janela. Sem suporte, fica estático.
- **Entre páginas:** View Transitions entre documentos; o nome do projeto é o elemento compartilhado entre o catálogo, o h1 da página e o link de próximo projeto. O cabeçalho permanece no lugar.

A troca de captura usa Web Animation de 240ms; controles usam 160–200ms com a curva `cubic-bezier(0.16, 1, 0.3, 1)`.

## Components

### Buttons and text links

A ação preenchida é uma pílula grafite com texto branco, altura mínima de 50px (48px no celular). O hover muda o fundo; o pressionamento aplica escala 0.98. Na abertura, as setas apontam para baixo porque levam a capítulos da mesma página.

O link textual é inline-flex com ícone SVG, intervalo de 8px e altura mínima de 44px. O hover sublinha o texto e desloca a seta: 3px para a direita em links internos e na diagonal em links externos, que também anunciam a abertura em nova aba.

### Header, navigation and motion control

Cabeçalho fixo e translúcido com marca, três âncoras e um controle circular de movimento. Links com alvos de 44px e sublinhado no hover. No celular, a marca abreviada desaparece; até 360px, ela substitui o nome.

O controle de movimento alterna pausar e ativar, com nome acessível e `aria-pressed`. A preferência local é persistida quando o armazenamento está disponível. Se o sistema pede movimento reduzido, o controle fica desabilitado e a preferência do sistema prevalece.

### Project chapter

Nome (link para a página), frase de apoio, linha de estado com o tipo do projeto, links "Conhecer o projeto" e o link externo principal, depois o palco de apresentação e a lista de tecnologias. O estado usa um ponto: anel cinza para "Em desenvolvimento", ponto verde para "No ar".

### Device selector

Grupo em pílula translúcida, centralizado acima da tela, com Desktop e Celular. O selecionado é branco com texto grafite e sombra baixa; o estado usa `aria-pressed`. A troca atualiza imagem, texto alternativo e link de imagem completa, reinicia a rolagem interna e, quando permitido, aplica a transição de 240ms.

### Gallery tabs

Pílulas transparentes que ficam grafite quando selecionadas. O estado usa `aria-selected`, foco móvel e associação com o painel. Setas esquerda/direita, Home e End navegam entre telas.

### Interface showcase

Superfície com seletor de dispositivo, moldura e legenda. A captura é uma imagem real dentro de uma região rolável com nome acessível e foco por teclado. A legenda descreve o que a tela mostra e é anunciada com `aria-live="polite"`. A página de projeto também oferece a imagem em tamanho real.

### Night chapter

Seção de largura total em `night`, com a frase como h2 e a lista de serviços em duas colunas separadas por linhas noturnas. Sem cartões nem ícones.

### Focus and fallback behavior

Links, botões e regiões com tabindex usam contorno verde de 3px com afastamento de 5px; links do palco usam afastamento interno de -4px. Há link de salto para o conteúdo.

O modo de movimento reduzido desliga animações, transições, rolagem suave e transições entre páginas. O toggle de pausa remove `--p`, devolve a frase à cor plena e pula a transição da próxima navegação no evento `pageswap`. Sem JavaScript, controles de dispositivo, movimento e abas ficam ocultos; o conteúdo padrão, a frase em cor plena, os links e os acessos alternativos às capturas permanecem disponíveis.

## Do's and Don'ts

### Do:

- Do escrever em primeira pessoa, com frases curtas e uma ideia por texto.
- Do preservar as cores e a proporção das capturas reais; usar a imagem gerada como cenografia decorativa.
- Do usar Manrope auto-hospedada, hierarquia de peso contida e espaço negativo.
- Do manter foco visível, nomes acessíveis e estado semântico nos controles.
- Do respeitar movimento reduzido do sistema e a opção local de pausa.
- Do manter a interface e os links úteis quando o JavaScript não estiver disponível.

### Don't:

- Don't usar pares de slogans, rótulos de processo ("dados demonstrativos", "captura do PR") ou superlativos sem evidência.
- Don't colocar rótulos ou sobretítulos acima dos títulos.
- Don't usar sombras de mockup em todos os blocos de conteúdo.
- Don't ocultar conteúdo até uma animação de entrada terminar.
- Don't repetir a mesma entrada animada em todas as seções.
- Don't substituir capturas reais por uma imagem gerada que finja ser a interface navegável.
