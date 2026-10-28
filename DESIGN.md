---
name: "Portfólio de Kauan Barateli"
description: "Sistema visual implementado para um catálogo de interfaces reais, com voz em primeira pessoa."
colors:
  paper: "#f7f7f5"
  white: "#fff"
  ink: "#1c1d20"
  muted: "#65676c"
  line: "#d9dadc"
  dark: "#202226"
  accent: "#405c51"
  focus: "#507d69"
  night: "#121315"
  night-text: "#f3f3f1"
  night-muted: "#a2a4a9"
  night-dim: "#6b6d72"
  night-line: "#2c2e33"
  stage-muted: "#4c4f54"
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
    fontSize: "clamp(44px, 5vw, 80px)"
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
    fontSize: "clamp(20px, 1.9vw, 28px)"
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
  tile-gap: "16px"
  header: "68px"
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
  project-panel-graphite:
    backgroundColor: "{colors.graphite-stage}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stage}"
  project-panel-sand:
    backgroundColor: "{colors.sand-stage}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stage}"
  night-chapter:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-text}"
    typography: "{typography.statement}"
---

# Design System: Portfólio de Kauan Barateli

## Overview

**Creative North Star: "Catálogo de produto digital"**

Um catálogo de produto digital com branco mineral, texto grafite e espaço negativo, contado em primeira pessoa. Os projetos são o conteúdo da página inicial: não há frase de abertura nem apresentação pessoal antes deles. A tipografia Manrope concentra a expressão nos nomes dos projetos; a interface permanece discreta para que as telas reais ocupem o primeiro plano.

A página inicial é uma sequência de painéis, como a vitrine de uma loja de produtos: um painel por projeto, depois um painel escuro sobre como Kauan trabalha e o rodapé. Cada painel de projeto junta nome, frase de apoio, estado, links e tecnologias de um lado e, do outro, as telas do projeto em uma moldura de computador com um celular à frente. Em telas grandes, o painel fica fixo enquanto a rolagem percorre as telas. A fotografia autoral de material prateado é o cenário do primeiro painel; as capturas preservam as cores das interfaces.

Este documento registra o sistema existente em `css/portfolio.css`, `js/app.js` e `src/render.mjs`. Os textos ficam em `src/content.mjs`. Os tokens representam a base desktop; as alterações responsivas estão descritas abaixo e no sidecar. A estratégia e o conteúdo da superfície pertencem a `.impeccable/surfaces/portfolio.md` e `PRODUCT.md`.

**Key Characteristics:**

- Paleta neutra com um único painel escuro e verde discreto em estado e foco.
- Uma família tipográfica, contraste forte entre título, frase de apoio e metadados.
- Painéis de projeto em duas colunas que se alternam; grade editorial nas páginas de projeto.
- Capturas reais com alternativas textuais e exploração por teclado.
- Movimento ligado à rolagem, opcional e sem interceptar o scroll.

## Voice

Primeira pessoa, frases curtas, português do dia a dia. Cada texto diz uma coisa só e evita pares de slogans paralelos ("Forma e função", "Do começo ao fim") e frases de efeito sem projeto por trás. Nada de rótulos técnicos voltados ao processo, como "protótipo", "dados demonstrativos" ou números de PR, junto das telas: o estado de cada projeto aparece no selo ("Em desenvolvimento", "No ar"). Afirmações factuais vêm de `PRODUCT.md`; opiniões são poucas e do próprio Kauan.

## Colors

A paleta é predominantemente neutra. O papel mineral e o grafite sustentam a composição; os painéis de projeto têm variações suaves de cinza e areia. O painel "Atuação" inverte o fundo para fechar a sequência.

### Primary

- **Grafite — ink:** texto principal, títulos, ação preenchida e aba selecionada.
- **Grafite de interação — dark:** texto do controle de dispositivo selecionado.
- **Grafite elevado — dark-hover:** resposta do botão preenchido e dos nomes de projeto ao ponteiro.

### Neutral

- **Papel mineral — paper:** fundo geral e base translúcida do cabeçalho.
- **Branco — white:** molduras de navegador, controle selecionado e texto sobre grafite.
- **Cinza de leitura — muted:** descrições, metadados e navegação de retorno (5.3:1 sobre o papel).
- **Apoio do painel — stage-muted:** metadados e tecnologias sobre os painéis de projeto (≥4.8:1 nos tons e no cenário).
- **Linha mineral — line:** divisores e contorno do controle de movimento.
- **Cinza de exposição — graphite-stage:** palco do Segundo Cérebro na galeria; o painel da página inicial usa um tom próximo, #dfe2e4, sob a fotografia.
- **Areia de exposição — sand-stage:** painel e palco de Ração de Canto.
- **Cinza de passagem — tabs-hover:** fundo da aba sob o ponteiro.

### Night chapter

- **Noite — night:** fundo do painel "Atuação".
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

- **Display:** base de h1. A página inicial tem um h1 apenas para leitores de tela ("Projetos de Kauan Barateli"); o primeiro texto visível é o nome do primeiro projeto.
- **Headline:** base de h2.
- **Project title:** nomes dos projetos nos painéis e no link de próximo projeto.
- **Case display:** nome do projeto como h1 da página de projeto.
- **Statement:** frase longa do painel escuro, iluminada palavra a palavra.
- **Tagline:** frase de apoio sob o nome do projeto, em grafite e peso 500.
- **Lead:** textos de apoio das páginas de projeto e da página 404.
- **Title:** base para subtítulos; serviços usam até 34px e decisões de projeto 22px.
- **Body / label:** texto corrido e metadados; rótulos de controles usam 12–14px com peso 600.
- **Action / text link:** botões e links compartilham peso 600; links externos usam seta diagonal, internos seta horizontal.

Abaixo de 701px, o corpo e o lead passam a 16px. Nomes de projeto usam 40px (36px até 360px), a frase do painel escuro 28px (25px até 360px) e o título da página de projeto 46px (38px até 360px).

## Layout

O cabeçalho fixo chega a 1392px. Os painéis ocupam a largura da janela e são recortados com `clip-path` em até 1488px, com 24px de margem e raio de 20px (12px de margem e 16px de raio no celular). Painéis se separam por 16px (12px no celular). O conteúdo das páginas de projeto ocupa um contêiner central de até 1296px.

Cada painel de projeto tem a altura da janela menos o cabeçalho (mínimo de 560px, máximo de 940px) e duas colunas: texto em `minmax(300px, 0.68fr)` e telas em `1.32fr`. Os painéis alternam o lado: o primeiro tem texto à esquerda, o segundo à direita. A área das telas é um contêiner de tamanho (`container-type: size`): a moldura de computador ocupa `min(90cqw, 80cqh × 1.5)` em proporção 3:2, e o celular fica à frente, no canto inferior direito, com 86% da altura da moldura.

As mudanças são orientadas pelo conteúdo:

- **A partir de 901px de largura e 600px de altura, com movimento ativo:** painéis fixos durante a rolagem (280vh para o Segundo Cérebro, 220vh para Ração de Canto).
- **Até 1000px:** metadados das páginas de projeto em duas colunas, tecnologias na linha inteira.
- **Até 900px:** painéis empilhados e centralizados, texto antes das telas, área das telas com `clamp(320px, 62vw, 520px)`; nada fica fixo.
- **Até 700px:** gutter de 24px, área das telas com `clamp(240px, 66vw, 320px)`, celular maior (108% da altura da moldura) e navegação compacta.
- **Até 360px:** gutter de 20px e marca do cabeçalho em 13px.

As abas da galeria mantêm rolagem horizontal própria com 10px de padding para não cortar o foco. No celular, a captura desktop da galeria tem altura automática e limite de 385px.

## Elevation & Depth

O conteúdo editorial é plano, dividido por linhas, espaço e pela mudança de tom entre painéis. O cabeçalho é translúcido (papel a 80% com desfoque) porque os painéis passam por baixo dele durante a rolagem; uma linha de 1px aparece depois do primeiro pixel rolado. As molduras de computador e celular recebem sombras difusas; o estado selecionado do seletor de dispositivo tem uma sombra pequena. Os valores completos estão em `.impeccable/design.json`.

No painel do Segundo Cérebro, as telas aparecem inclinadas sobre a fotografia de material prateado; com movimento ativo em telas grandes, o painel se abre até a largura total e as telas se endireitam.

**The Profundidade da interface Rule.** Aplicar sombras às molduras de interfaces e ao estado selecionado dos controles; separar o restante do conteúdo com espaço, linhas finas e mudança de fundo.

## Shapes

Cantos suaves distinguem os níveis: painéis 20px (16px no celular), superfícies da galeria 16px, moldura de computador 12px (8px no celular), molduras da galeria 10px. O celular usa raios proporcionais à área das telas (4.6cqh por fora, 3.4cqh na tela). Botões, abas e o seletor de dispositivo são pílulas. As prévias desktop têm apenas os cantos superiores arredondados; a versão de celular usa cantos superiores de 24px na moldura e 17px na área interna. O controle de movimento, o ponto de estado e os pontos decorativos do navegador são circulares.

## Motion

Os painéis de projeto são o momento principal; cada projeto usa um mecanismo diferente, ligado ao tipo de tela que tem:

- **Segundo Cérebro (`scroll`):** o protótipo é alto, então a rolagem o percorre. O JavaScript calcula o progresso do painel fixo (0–1). Nos primeiros 12%, escreve `--open`: o recorte se abre até a largura total, o raio zera e as telas se endireitam. De 10% a 95%, as imagens do computador e do celular sobem juntas, do topo ao fim da tela.
- **Ração de Canto (`wipe`):** as telas são curtas, então a rolagem troca de tela. `--enter` faz as telas subirem e o celular deslizar enquanto o painel chega; de 25% a 75% do progresso, `--w` revela a galeria de baixo para cima (`clip-path: inset`) no computador e no celular.
- **Frase do painel escuro:** as palavras passam de `night-dim` para `night-text` na ordem de leitura, com transição de cor de 420ms.
- **Entre páginas:** View Transitions entre documentos; o nome do projeto é o elemento compartilhado entre o painel, o h1 da página e o link de próximo projeto. O cabeçalho permanece no lugar.

Sem movimento (pausa, preferência do sistema, telas menores que 901 × 600 ou sem JavaScript), os painéis não ficam fixos e mostram o início de cada tela. Ao ligar ou desligar o movimento, a página mantém o painel em leitura no lugar. A troca de captura da galeria usa Web Animation de 240ms; controles usam 160–200ms com a curva `cubic-bezier(0.16, 1, 0.3, 1)`.

## Components

### Buttons and text links

A ação preenchida é uma pílula grafite com texto branco, altura mínima de 50px (48px no celular). O hover muda o fundo; o pressionamento aplica escala 0.98.

O link textual é inline-flex com ícone SVG, intervalo de 8px e altura mínima de 44px. O hover sublinha o texto e desloca a seta: 3px para a direita em links internos e na diagonal em links externos, que também anunciam a abertura em nova aba.

### Header, navigation and motion control

Cabeçalho fixo e translúcido com marca, três âncoras e um controle circular de movimento. Links com alvos de 44px e sublinhado no hover. No celular, a marca abreviada desaparece; até 360px, ela substitui o nome.

O controle de movimento alterna pausar e ativar, com nome acessível e `aria-pressed`. A preferência local é persistida quando o armazenamento está disponível. Se o sistema pede movimento reduzido, o controle fica desabilitado e a preferência do sistema prevalece.

### Project panel

Texto: nome como h2 (link para a página do projeto), frase de apoio, linha de estado com o tipo do projeto, links "Conhecer o projeto" e o link externo principal, e as tecnologias. O estado usa um ponto: anel cinza para "Em desenvolvimento", ponto verde para "No ar".

Telas: moldura de computador com barra de navegador e celular à frente, ambos com capturas reais. A área inteira leva à página do projeto; por repetir o link "Conhecer o projeto", ela fica fora da ordem de tabulação e oculta para tecnologias assistivas. Telas e mecanismo de rolagem vêm de `scene` em `src/content.mjs`.

### Device selector

Grupo em pílula translúcida, centralizado acima da tela, com Desktop e Celular. O selecionado é branco com texto grafite e sombra baixa; o estado usa `aria-pressed`. A troca atualiza imagem, texto alternativo e link de imagem completa, reinicia a rolagem interna e, quando permitido, aplica a transição de 240ms.

### Gallery tabs

Pílulas transparentes que ficam grafite quando selecionadas. O estado usa `aria-selected`, foco móvel e associação com o painel. Setas esquerda/direita, Home e End navegam entre telas.

### Interface showcase

Superfície com seletor de dispositivo, moldura e legenda. A captura é uma imagem real dentro de uma região rolável com nome acessível e foco por teclado. A legenda descreve o que a tela mostra e é anunciada com `aria-live="polite"`. A página de projeto também oferece a imagem em tamanho real.

### Night panel

Painel em `night` com a mesma margem e o mesmo raio dos painéis de projeto, a frase como h2 e a lista de serviços em duas colunas separadas por linhas noturnas. Sem cartões nem ícones.

### Focus and fallback behavior

Links, botões e regiões com tabindex usam contorno verde de 3px com afastamento de 5px; links do palco usam afastamento interno de -4px. Há link de salto para o conteúdo.

O modo de movimento reduzido desliga animações, transições, rolagem suave, transições entre páginas e painéis fixos. O toggle de pausa solta os painéis, remove `--open`, `--enter`, `--w` e as transformações das imagens, devolve a frase à cor plena e pula a transição da próxima navegação no evento `pageswap`. Sem JavaScript, controles de dispositivo, movimento e abas ficam ocultos; os painéis estáticos, a frase em cor plena, os links e os acessos alternativos às capturas permanecem disponíveis.

## Do's and Don'ts

### Do:

- Do deixar os projetos abrirem a página e escrever em primeira pessoa, com frases curtas e uma ideia por texto.
- Do preservar as cores e a proporção das capturas reais; usar a imagem gerada como cenografia decorativa.
- Do usar Manrope auto-hospedada, hierarquia de peso contida e espaço negativo.
- Do manter foco visível, nomes acessíveis e estado semântico nos controles.
- Do respeitar movimento reduzido do sistema e a opção local de pausa.
- Do manter a interface e os links úteis quando o JavaScript não estiver disponível.

### Don't:

- Don't usar frases de efeito antes dos projetos, pares de slogans, rótulos de processo ("protótipo", "dados demonstrativos", "captura do PR") ou superlativos sem evidência.
- Don't colocar rótulos ou sobretítulos acima dos títulos.
- Don't usar sombras de mockup em todos os blocos de conteúdo.
- Don't ocultar conteúdo até uma animação de entrada terminar.
- Don't repetir a mesma entrada animada em todas as seções.
- Don't substituir capturas reais por uma imagem gerada que finja ser a interface navegável.
