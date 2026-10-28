# Validação do portfólio

Executada em 28/10/2026, em navegador Edge/Chromium isolado, sobre a versão local.

## Resultado funcional

- `npm run build`: 4 páginas estáticas geradas (início, dois projetos e 404).
- `npm test`: 5 testes aprovados; rotas, âncoras, arquivos, formatos, procedência e distribuição.
- `scripts/browser-check.mjs`: 12 combinações de rota e largura aprovadas, em **320, 390, 768 e 1440 px**.
- Revisão de linguagem e layout (28/10/2026): textos em primeira pessoa, nome do projeto como h1, capítulo escuro e novos momentos de movimento verificados nas mesmas larguras.
- Alternância desktop/celular em todas as galerias e alternância de todas as telas dos dois projetos.
- Abas via teclado, setas, Home e End. A aba ativa permanece completamente visível, incluindo sua margem de foco.
- Link para pular conteúdo, navegação entre projetos e acesso aos links das imagens completas.
- Movimento habilitado/pausado, persistência da preferência e respeito a `prefers-reduced-motion`. O roteiro confirma que a rolagem escreve `--p` no palco e acende palavras da frase, e que o movimento reduzido remove os dois.
- Transições entre páginas (View Transitions) testadas em Chromium: catálogo → projeto, voltar e próximo projeto, inclusive com movimento pausado, sem erros de página.
- Conteúdo, links e alternativas de galeria disponíveis sem JavaScript; os controles dependentes de JS ficam ocultos.
- Nenhum erro JavaScript, imagem ausente ou overflow horizontal nas rotas testadas.
- Site Ração de Canto verificado com HTTP 200 e título correspondente.

## Polimento Impeccable

O detector foi executado uma vez. Foram ajustados contraste de texto auxiliar e tamanhos móveis. Os avisos de preenchimento nas molduras foram avaliados visualmente: correspondem à mídia e ao chrome de apresentação, não a texto de interface espremido.

A revisão independente solicitou: revelar a aba selecionada e seu foco, separar instrução e link abaixo da galeria no celular e retirar o rótulo acima do próximo projeto. As três correções foram implementadas e recapturadas. O passe final do revisor marcou os itens como resolvidos e retornou `ship` no escopo dessas correções; também confirmou que o hover de uma aba não encobre mais o foco da aba vizinha. O script de navegador inclui regressões para visibilidade da aba e distância entre instrução e link.

As capturas de trabalho ficam em `.impeccable/review/` (ignoradas pelo Git). As prévias para revisão ficam em `docs/previews/`. O roteiro usa capturas reais e dados demonstrativos; não é uma validação funcional do backend do Segundo Cérebro.

## Reproduzir a verificação de navegador

O build e os testes estáticos não exigem dependências. Para o teste de navegador opcional, instale Playwright em seu ambiente de desenvolvimento, com Chromium disponível, e execute:

```sh
npm run build
npm run dev
node scripts/browser-check.mjs
```

O script importa `playwright`. `PLAYWRIGHT_MODULE` permite indicar uma instalação existente; `BROWSER_PATH` permite selecionar um navegador instalado; `BASE_URL` permite trocar a porta da prévia. O padrão é `http://127.0.0.1:41740`.

## Limites da verificação

Teste de navegador feito em Chromium, sem execução em dispositivos físicos ou Safari. Não foi realizado um relatório Lighthouse nem uma certificação WCAG completa. A configuração de hospedagem está preparada para `dist/`; a publicação em produção é uma etapa separada da validação local.
