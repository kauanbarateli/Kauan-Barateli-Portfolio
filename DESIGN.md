---
name: "Portfólio de Kauan Barateli"
description: "Sistema visual implementado para um catálogo de interfaces reais."
colors:
  paper: "#f7f7f5"
  white: "#fff"
  ink: "#1c1d20"
  muted: "#65676c"
  line: "#d9dadc"
  dark: "#202226"
  accent: "#405c51"
  focus: "#507d69"
  graphite-stage: "#e4e7e4"
  sand-stage: "#eae6df"
  dark-hover: "#3b3d42"
  tabs-hover: "#e8e9e6"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(48px, 6.1vw, 88px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 58px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  project-title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  case-display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(44px, 5vw, 72px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  text-link:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.65
rounded:
  control: "5px"
  tab: "7px"
  action: "8px"
  browser: "10px"
  portrait: "12px"
  surface: "16px"
  circular: "50%"
spacing:
  gutter: "clamp(24px, 4.5vw, 72px)"
  gap-compact: "12px"
  gap-medium: "24px"
  gap-large: "32px"
  gap-wide: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.dark-hover}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.text-link}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  motion-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circular}"
    padding: "0"
    width: "38px"
    height: "38px"
  device-control-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  gallery-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.tab}"
    padding: "10px 18px"
  gallery-tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.tab}"
  showcase-graphite:
    backgroundColor: "{colors.graphite-stage}"
    rounded: "{rounded.surface}"
  showcase-sand:
    backgroundColor: "{colors.sand-stage}"
    rounded: "{rounded.surface}"
---

# Design System: Portfólio de Kauan Barateli

## Overview

**Creative North Star: "Catálogo de produto digital"**

Um catálogo de produto digital com branco mineral, texto grafite e espaço negativo. A tipografia Manrope concentra a expressão; a interface permanece discreta para que capturas reais dos projetos ocupem o primeiro plano.

A profundidade vem de superfícies claras, sombras difusas e molduras de navegador. A fotografia autoral de material prateado é cenografia decorativa. O retrato aparece em escala de cinza; as capturas preservam as cores das interfaces. O movimento acompanha a exploração e pode ser pausado, sempre respeitando a preferência do sistema.

Este documento registra o sistema existente em `css/portfolio.css`, `js/app.js` e `src/render.mjs`. Os tokens representam a base desktop; as alterações responsivas observadas estão descritas abaixo e no sidecar. A estratégia e o conteúdo da superfície pertencem a `.impeccable/surfaces/portfolio.md` e `PRODUCT.md`.

**Key Characteristics:**

- Paleta neutra com verde discreto em estados e foco.
- Uma família tipográfica, títulos expressivos e texto de apoio contido.
- Superfícies largas, cantos suaves e sombras restritas às prévias.
- Capturas reais com alternativas textuais e exploração por teclado.
- Movimento opcional, sem interceptar a rolagem.

## Colors

A paleta é predominantemente neutra. O papel mineral e o grafite sustentam a composição; as áreas de apresentação têm variações suaves de cinza esverdeado e areia.

### Primary

- **Grafite — ink:** texto principal, títulos, ação preenchida e aba selecionada.
- **Grafite de interação — dark:** texto do controle de dispositivo selecionado.
- **Grafite elevado — dark-hover:** resposta do botão preenchido ao ponteiro.

### Neutral

- **Papel mineral — paper:** fundo geral.
- **Branco — white:** molduras de navegador, controle selecionado e texto sobre grafite.
- **Cinza de leitura — muted:** descrições, metadados e navegação de retorno.
- **Linha mineral — line:** divisores e contorno do controle de movimento.
- **Cinza de exposição — graphite-stage:** palco do Segundo Cérebro.
- **Areia de exposição — sand-stage:** palco de Ração de Canto.
- **Cinza de passagem — tabs-hover:** fundo da aba sob o ponteiro.

O **verde de estado — accent** aparece no status dos projetos; o **verde de foco — focus** torna a navegação por teclado visível. Essas exceções e as cores das capturas fazem parte do resultado implementado. Não há uma paleta secundária de marca.

**The Hierarquia por tom Rule.** Reservar o grafite para títulos e ações; usar o cinza de apoio em descrições e metadados. O verde sinaliza estado e foco, sem se tornar um preenchimento dominante.

## Typography

**Display Font:** Manrope, com Arial e sans-serif como alternativas.
**Body Font:** a mesma família. A fonte variável é servida localmente em `assets/fonts/manrope.woff2`, com intervalo declarado de pesos 400–800 e `font-display: swap`.

A hierarquia usa principalmente pesos regular e semibold. Os títulos têm entreletra negativa e quebra balanceada; os parágrafos têm limite geral de 70ch, com larguras menores nos textos de apoio. Não há escala modular única nem uma segunda família decorativa.

### Hierarchy

- **Display:** título principal da página inicial; usa o token de display até a regra de tela larga. A partir de 1600px, o título da abertura passa a 96px.
- **Headline:** títulos das seções; a área sobre o autor usa uma variação de `clamp(32px, 3.2vw, 46px)`.
- **Project title:** nomes dos projetos no catálogo.
- **Case display:** títulos das páginas de projeto.
- **Title:** base para subtítulos. As linhas de atuação usam 25px, e decisões de projeto usam 20px.
- **Body:** texto corrido. Descrições de catálogo usam 15px; o texto introdutório de projeto usa entrelinha 1.75.
- **Label:** metadados, tecnologias e legendas. Rótulos de controles usam 12–14px com peso 600.
- **Action / text link:** botões e navegação compartilham peso 600; os links textuais preservam seu sublinhado de interação.

Abaixo de 701px, o corpo base passa a 16px. O título da abertura usa `clamp(44px, 10.8vw, 68px)`; títulos de seção usam 36px e nomes de projeto, 31px. O título de estudo de caso usa 44px, ou 37px até 360px. Textos de apoio são geralmente 14–15px; metadados permanecem em 12px.

## Layout

O conteúdo principal ocupa um contêiner central de até 1296px, descontando duas vezes o gutter. O cabeçalho chega a 1392px. A abertura tem um palco mais largo, limitado a 1488px com margem externa de 24px por lado no desktop.

O ritmo combina grandes intervalos entre capítulos com agrupamentos mais próximos de título, descrição e controle. No catálogo, a entrada tem 112px de respiro superior; projetos se separam por 106px. A apresentação dos títulos usa pares em flex, e os blocos de atuação e narrativa usam duas colunas. A área sobre o autor usa proporção 1:1.6.

As mudanças são orientadas pelo conteúdo:

- **Até 1000px:** estreitar intervalos e prévias; os metadados de projeto passam a duas colunas.
- **De 701px a 900px:** empilhar título e descrição dos projetos para preservar sua leitura.
- **Até 700px:** gutter de 24px, grupos principais em uma coluna, texto sobre o autor antes do retrato e navegação horizontal compacta. A abertura perde o parallax; a prévia inicia em celular.
- **Até 360px:** gutter de 20px e ajustes adicionais na assinatura e nos títulos.
- **A partir de 1600px:** abertura mais alta e título maior.

As abas mantêm rolagem horizontal própria com 10px de padding para não cortar o foco. O teclado mantém a aba ativa visível sem deslocar verticalmente a página. No celular, a captura desktop tem altura automática e limite de 385px; o palco ajusta sua altura, com mínimo de 230px. Esse comportamento evita espaço vazio quando a captura é curta.

## Elevation & Depth

O conteúdo editorial é plano, dividido por linhas e espaço. As molduras de navegador recebem sombras difusas; o estado selecionado do seletor de dispositivo tem uma sombra pequena. Os valores completos das cinco sombras observadas estão em `.impeccable/design.json`.

A abertura sobrepõe duas interfaces sobre a fotografia de material prateado. No desktop, uma transformação ligada à rolagem reduz gradualmente a inclinação das molduras, sem bloquear o scroll. O celular conserva uma composição estática inclinada. Pausar movimento remove transformações aplicadas pelo JavaScript e mantém a composição CSS estática.

**The Profundidade da interface Rule.** Aplicar sombras às molduras de interfaces e ao estado selecionado dos controles; separar o restante do conteúdo com espaço e linhas finas.

## Shapes

Cantos suaves distinguem os níveis: superfícies grandes, retrato, molduras e ações usam os raios do frontmatter. As prévias desktop têm apenas os cantos superiores arredondados; a versão de celular usa cantos superiores de 24px na moldura e 17px na área interna. O controle de movimento e os pontos decorativos do navegador são circulares.

Linhas de 1px organizam a informação; não há um contorno elevado em cada seção. As capturas são recortadas por suas molduras e permanecem roláveis. O retrato usa recorte vertical e escala de cinza; a fotografia de material usa cobertura do palco.

## Components

### Buttons and text links

A ação preenchida usa grafite, texto branco, altura mínima de 48px e espaçamento interno do token. O hover muda o fundo; o pressionamento aplica escala 0.98. Nas páginas de projeto, a ação é compactada para 13px e padding de 12px 18px; no celular, o texto passa a 12px.

O link textual é inline-flex com ícone SVG, intervalo de 10px e altura mínima de 44px na base. O hover sublinha o texto e desloca a seta 3px. As variantes contextuais compactas constam no CSS, inclusive a altura mínima de 32px no rodapé do projeto em celular.

### Navigation and motion control

O cabeçalho combina assinatura, três âncoras e um controle circular de movimento. A navegação tem texto semibold, alvos de altura mínima de 44px e sublinhado no hover. No celular, os links continuam visíveis e a marca abreviada decorativa desaparece.

O controle de movimento alterna pausar e ativar, com nome acessível e `aria-pressed`. A preferência local é persistida quando o armazenamento está disponível. Se o sistema pede movimento reduzido, o controle fica desabilitado e a preferência do sistema prevalece.

### Device selector

Um grupo compacto e translúcido reúne Desktop e Celular. Cada botão combina texto e SVG; o selecionado é branco com texto grafite e sombra baixa. O estado usa `aria-pressed`. A troca atualiza a imagem e seu texto alternativo, reinicia a rolagem interna e, quando permitido, aplica uma transição de 240ms à captura.

### Gallery tabs

Abas de fundo transparente ficam grafite quando selecionadas. O estado usa `aria-selected`, foco móvel e associação com o painel. Setas esquerda/direita, Home e End navegam entre telas. O estado selecionado continua distinto no hover. O padding externo acomoda o anel de foco; a aba focada usa posição relativa e z-index 1 para manter o contorno acima dos irmãos.

### Interface showcase

A superfície de apresentação contém barra de ferramentas, seletor de dispositivo, moldura e status. A captura é uma imagem real dentro de uma região rolável com nome acessível e foco por teclado. O status é anunciado com `aria-live="polite"`. A página de projeto também oferece a imagem completa.

O mockup desktop tem largura de até 1000px. O modo de celular usa moldura escura e remove a barra do navegador. As dimensões variam entre catálogo, página de projeto e breakpoints; não são um componente de cartão genérico.

### Focus and fallback behavior

Links, botões e regiões com tabindex usam contorno verde de 3px com afastamento de 5px; links do palco usam afastamento interno de -4px para preservar o foco dentro do recorte. Há link de salto para o conteúdo. Links externos anunciam a abertura em nova aba.

O modo de movimento reduzido desliga animações, transições e rolagem suave. O toggle de pausa aplica a mesma remoção de transições; o JavaScript também cancela animações de troca de captura. Sem JavaScript, controles de dispositivo, movimento e abas ficam ocultos; o conteúdo padrão, os links e os acessos alternativos às capturas permanecem disponíveis.

Não há campo de formulário ou componente de entrada nesta implementação.

## Do's and Don'ts

### Do:

- Do preservar as cores e a proporção das capturas reais; usar a imagem gerada como cenografia decorativa.
- Do usar Manrope auto-hospedada, hierarquia de peso contida e espaço negativo.
- Do manter foco visível, nomes acessíveis e estado semântico nos controles.
- Do respeitar movimento reduzido do sistema e a opção local de pausa.
- Do manter a interface e os links úteis quando o JavaScript não estiver disponível.

### Don't:

- Don't usar sombras de mockup em todos os blocos de conteúdo.
- Don't ocultar conteúdo até uma animação de entrada terminar.
- Don't transformar o cinza predominante em uma regra de dessaturação das interfaces exibidas.
- Don't substituir capturas reais por uma imagem gerada que finja ser a interface navegável.

