# Kauan Barateli — portfólio

Portfólio estático de desenvolvimento web, com dois projetos reais apresentados em painéis, páginas individuais e galerias que alternam telas de desktop e celular. Sem formulário ou CTA de orçamento. A seção "Sobre" está suspensa até haver novas fotos.

## Abrir localmente

Requer Node.js 22 ou superior. Não há dependências para instalar.

```sh
npm run build
npm run dev
```

Abra **http://127.0.0.1:41740**. O arquivo de entrada é `index.html`; use HTTP, pois os caminhos partem da raiz do site. Para outra porta, configure a variável `PORT` antes do comando. O servidor local ouve apenas em `127.0.0.1`.

## Conteúdo e manutenção

- `src/content.mjs`: projetos (incluindo `scene`, as telas do painel da página inicial), tecnologias, links, telas, legendas e o texto do painel Atuação (`homeCopy`).
- `src/render.mjs`: estrutura semântica da página inicial, páginas dos projetos e 404.
- `css/portfolio.css`: tokens, componentes e responsividade.
- `js/app.js`: painéis fixos com rolagem das telas, seleção de telas e formatos, teclado, cabeçalho e movimento opcional.
- `assets/visuals/`: imagens WebP, com origem registrada em arquivos `.json` adjacentes.
- `assets/fonts/`: Manrope variável, hospedada localmente, com licença OFL.
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/`: decisões de produto e sistema visual.

Edite os arquivos em `src/`, depois execute `npm run build`. O build atualiza os HTMLs da raiz e produz `dist/`. Não edite os HTMLs gerados diretamente.

Para adicionar um projeto, inclua um objeto em `projects` (com `tagline`, `galleryNote`, `live` e `scene`), suas capturas em ambos os formatos e seus arquivos de origem. Os textos seguem a voz descrita em `PRODUCT.md`: primeira pessoa, frases curtas e sem rótulos técnicos. O build cria a página e os links de navegação. Ao remover um projeto, remova também a respectiva pasta HTML gerada da raiz; `dist/` é reconstruído a partir do conteúdo atual.

## Projetos apresentados

- **Ração de Canto:** landing page e galeria do projeto social. HTML, CSS, JavaScript e Vercel. Link para o site publicado.
- **Segundo Cérebro:** aplicativo em desenvolvimento. Na página inicial, o protótipo aparece em computador e celular e leva à página do projeto; a galeria segue com telas já implementadas (capturas do PR #120, com dados de exemplo), sem simular autenticação, transações ou alterações de dados. Link para o repositório.

As interfaces possuem seus próprios conteúdos e identidades; a cenografia do portfólio não modifica as capturas. A biografia usa informações fornecidas por Kauan e o LinkedIn indicado no repositório. Não há resultados comerciais, depoimentos ou clientes inventados.

## Verificação

```sh
npm run build
npm test
```

Os testes verificam rotas, âncoras, imagens, origem das capturas, páginas geradas e conteúdo da distribuição. Os cenários de navegador e resultados ficam em `docs/VALIDACAO.md`.

## Publicação

`vercel.json` configura `npm run build` e a pasta `dist/`. O projeto não precisa de backend, variáveis secretas ou serviços externos. A URL canônica atual vem do homepage do repositório; se o domínio mudar, atualize a função `head` em `src/render.mjs`.

Uma publicação requer usar a branch revisada no projeto de hospedagem. Não publique a raiz do repositório: ela contém fontes, documentos e imagens originais; a distribuição pública é somente `dist/`.

## Fontes e imagens

Veja `docs/REFERENCIAS.md` para os commits consultados, a procedência das imagens e o prompt exato da imagem gerada. As fotografias pessoais e dos animais são arquivos dos próprios repositórios, sem geração de identidade ou alteração das histórias.
