export const person = {
  name: "Kauan Barateli",
  role: "Desenvolvedor web",
  place: "Maranhão, Brasil",
  linkedin: "https://www.linkedin.com/in/kauan-barateli/",
  github: "https://github.com/kauanbarateli",
};

// Add a project here and run npm run build. Pages and navigation are generated together.
// live: true marks a published project; false marks work in progress.
// cover and mobile are the screens on the home panel; backdrop is an optional scenery image behind them.
export const projects = [
  {
    slug: "segundo-cerebro",
    name: "Segundo Cérebro",
    type: "Aplicativo web",
    status: "Em desenvolvimento",
    live: false,
    tone: "graphite",
    tagline: "Tarefas, hábitos e finanças no mesmo lugar.",
    summary:
      "Estou construindo o Segundo Cérebro para juntar o que costuma ficar espalhado em vários apps: tarefas, agenda, hábitos, anotações e finanças. A ideia é abrir um lugar só e saber o que fazer agora.",
    cover: "sc-prototype",
    mobile: "sc-prototype-mobile",
    backdrop: "material",
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    repo: "https://github.com/kauanbarateli/Segundo-Cerebro",
    source: "https://github.com/kauanbarateli/Segundo-Cerebro",
    sourceLabel: "Acompanhar no GitHub",
    galleryNote: "Telas do app em desktop e celular.",
    challenge: "Muita coisa para organizar sem virar bagunça.",
    challengeText:
      "Juntar tantos módulos em um app pede escolhas claras: o que aparece primeiro, o que pode esperar e como voltar ao que você estava fazendo sem perder o foco.",
    decisions: [
      [
        "Uma navegação para tudo",
        "Calendário, tarefas e hábitos seguem a mesma estrutura. Quem aprende uma parte já entende as outras.",
      ],
      [
        "Configuração no seu ritmo",
        "O onboarding apresenta os módulos aos poucos. Dá para pular etapas e voltar depois.",
      ],
      [
        "Protótipo antes do código",
        "O protótipo define a linguagem visual, e as telas implementadas seguem essa mesma base.",
      ],
    ],
    frames: [
      {
        name: "Visão geral",
        image: "sc-prototype",
        mobile: "sc-prototype-mobile",
        caption: "A tela inicial reúne tarefas, projetos, agenda, hábitos e finanças do dia.",
      },
      {
        name: "Início",
        image: "sc-home",
        mobile: "sc-home-mobile",
        caption: "Tarefas, agenda, hábitos e um resumo financeiro do dia em uma tela.",
      },
      {
        name: "Hábitos",
        image: "sc-habits",
        mobile: "sc-habits-mobile",
        caption: "Hábitos do dia com sequência e progresso da semana. No celular, em tema escuro.",
      },
      {
        name: "Financeiro",
        image: "sc-finance",
        mobile: "sc-finance-mobile",
        caption: "Patrimônio, faturas e o resultado do mês, com gastos por categoria.",
      },
      {
        name: "Calendário",
        image: "sc-calendar",
        mobile: "sc-calendar-mobile",
        caption: "Compromissos em visão de dia, semana ou mês.",
      },
    ],
  },
  {
    slug: "racao-de-canto",
    name: "Ração de Canto",
    type: "Landing page para projeto social",
    status: "No ar",
    live: true,
    tone: "sand",
    tagline: "Um site para ajudar quem cuida dos animais de rua.",
    summary:
      "O Ração de Canto é um projeto independente de São Luís que alimenta, resgata e cuida de animais abandonados. Desenvolvi o site para apresentar a iniciativa, contar as histórias do Fiel e da Pétala e deixar claro como ajudar.",
    cover: "racao-desktop",
    mobile: "racao-mobile",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    repo: "https://github.com/kauanbarateli/Racao-de-Canto",
    source: "https://racao-de-canto.vercel.app",
    sourceLabel: "Visitar o site",
    galleryNote: "Telas do site publicado, em desktop e celular.",
    challenge: "Deixar as histórias falarem primeiro.",
    challengeText:
      "As fotos e a trajetória dos animais conduzem a página. O movimento acompanha a narrativa sem atrapalhar a leitura, e as formas de ajudar ficam sempre à vista.",
    decisions: [
      [
        "Fotos reais em primeiro plano",
        "Imagens dos próprios animais e uma sequência que apresenta o projeto, o Fiel e a Pétala.",
      ],
      [
        "Galeria com filtros",
        "Fotos e vídeos separados por história, com visualização ampliada e navegação pelo teclado.",
      ],
      [
        "Leve de propósito",
        "HTML, CSS e JavaScript, sem framework. Imagens otimizadas e respeito a quem prefere menos movimento.",
      ],
    ],
    frames: [
      {
        name: "Página inicial",
        image: "racao-desktop",
        mobile: "racao-mobile",
        caption: "A abertura do site, com a chamada principal e a doação via PIX logo no início.",
      },
      {
        name: "Galeria",
        image: "racao-gallery",
        mobile: "racao-gallery-mobile",
        caption: "Fotos e vídeos dos animais, com filtros por história.",
      },
    ],
  },
];
