export const person = {
  name: "Kauan Barateli",
  linkedin: "https://www.linkedin.com/in/kauan-barateli/",
  github: "https://github.com/kauanbarateli",
};

// Add a project here and run npm run build. Pages and navigation are generated together.
export const projects = [
  {
    slug: "segundo-cerebro",
    name: "Segundo Cérebro",
    type: "Produto digital",
    status: "Em desenvolvimento",
    tone: "graphite",
    title: "Um lugar para\no que importa.",
    description:
      "Tarefas, hábitos, conhecimento e finanças. Uma experiência integrada para organizar a vida com mais clareza.",
    summary:
      "Um aplicativo de organização pessoal que aproxima as diferentes partes da rotina. Do primeiro hábito ao planejamento de um projeto, cada tela faz parte de um mesmo ambiente.",
    cover: "sc-prototype",
    mobile: "sc-prototype-mobile",
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    repo: "https://github.com/kauanbarateli/Segundo-Cerebro",
    source: "https://github.com/kauanbarateli/Segundo-Cerebro/pull/120",
    sourceLabel: "Acompanhar desenvolvimento",
    challenge: "Organizar sem sobrecarregar.",
    challengeText:
      "Reunir muitas funcionalidades exige escolhas claras: o que aparece primeiro, o que pode esperar e como voltar ao contexto sem perder o foco.",
    decisions: [
      [
        "Uma rotina, vários contextos",
        "Calendário, tarefas e hábitos compartilham a mesma linguagem de navegação.",
      ],
      [
        "Configurar aos poucos",
        "Um onboarding progressivo apresenta os módulos e permite deixar etapas para depois.",
      ],
      [
        "Interface com continuidade",
        "O protótipo orienta a implementação. A galeria distingue a proposta visual das telas já presentes no PR #120.",
      ],
    ],
    frames: [
      {
        name: "Visão do protótipo",
        image: "sc-prototype",
        mobile: "sc-prototype-mobile",
        caption:
          "Protótipo de referência · dados demonstrativos. A implementação continua em evolução.",
      },
      {
        name: "Início",
        image: "sc-home",
        mobile: "sc-home-mobile",
        caption:
          "Interface em desenvolvimento · captura do PR #120. Dados de demonstração.",
      },
      {
        name: "Hábitos",
        image: "sc-habits",
        mobile: "sc-habits-mobile",
        caption:
          "Acompanhamento de hábitos no PR #120 · desktop claro e celular escuro.",
      },
      {
        name: "Financeiro",
        image: "sc-finance",
        mobile: "sc-finance-mobile",
        caption: "Organização financeira no PR #120 · valores demonstrativos.",
      },
      {
        name: "Calendário",
        image: "sc-calendar",
        mobile: "sc-calendar-mobile",
        caption:
          "Calendário no PR #120 · distribuição de atividades e compromissos.",
      },
    ],
  },
  {
    slug: "racao-de-canto",
    name: "Ração de Canto",
    type: "Landing page · projeto social",
    status: "Publicado",
    tone: "sand",
    title: "Uma presença digital.\nUma causa real.",
    description:
      "Uma experiência que aproxima pessoas de uma iniciativa de cuidado e proteção animal em São Luís.",
    summary:
      "O Ração de Canto alimenta, resgata e cuida de animais abandonados. O site apresenta a iniciativa, conta as histórias de Fiel e Pétala e facilita o caminho para ajudar.",
    cover: "racao-desktop",
    mobile: "racao-mobile",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    repo: "https://github.com/kauanbarateli/Racao-de-Canto",
    source: "https://racao-de-canto.vercel.app",
    sourceLabel: "Visitar site",
    challenge: "Dar espaço às histórias.",
    challengeText:
      "As fotografias e a trajetória dos animais conduzem a experiência. O movimento acompanha essa narrativa, mantendo a leitura simples e as formas de ajudar sempre claras.",
    decisions: [
      [
        "Narrativa visual",
        "Fotografias reais, transições suaves e uma sequência que apresenta a iniciativa e seus animais.",
      ],
      [
        "Galeria para explorar",
        "Fotos e vídeos organizados por filtros, com visualização ampliada e navegação por teclado.",
      ],
      [
        "Uma base leve",
        "HTML, CSS e JavaScript sem framework. Imagens otimizadas e respeito à preferência por movimento reduzido.",
      ],
    ],
    frames: [
      {
        name: "Página inicial",
        image: "racao-desktop",
        mobile: "racao-mobile",
        caption:
          "Captura real da landing page. Fotografias do próprio projeto social.",
      },
      {
        name: "Galeria",
        image: "racao-gallery",
        mobile: "racao-gallery-mobile",
        caption:
          "Galeria do projeto com fotografias, vídeos e filtros por história.",
      },
    ],
  },
];
