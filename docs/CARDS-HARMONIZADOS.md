# Harmonia entre os cards — 30/10/2026

Base: `c8719df`, incluindo a página inicial centrada nos projetos e a remoção dos efeitos de rolagem.

O Segundo Cérebro usava uma fotografia metálica contrastada, enquanto o Ração de Canto tinha um fundo bege liso. Os dois cards agora compartilham uma cenografia de cinza mineral e alumínio acetinado, com luz e textura uniformes. A composição, os textos, as telas reais e a navegação existentes foram preservados.

## Implementação

- `assets/visuals/project-stage.webp`: cenário gerado pela ferramenta integrada `image_gen`, 1536 × 1024, 11.646 bytes. Uma imagem reutilizada pelos dois cards.
- [Prompt completo](project-stage-prompt.txt) e `assets/visuals/project-stage.webp.json`: procedência e instruções para reproduzir a direção visual.
- `src/content.mjs`: ambos os projetos apontam para `project-stage` no campo `backdrop`.
- `css/portfolio.css`: base compartilhada `--project-stage: #e8e9e7`; no desktop, a imagem acompanha o card invertido por espelhamento. Até 900px, ambos usam o mesmo enquadramento, sem espelhamento.
- `DESIGN.md`: registra a regra para futuras alterações. As galerias internas mantêm suas paletas atuais.

## Validação

- Build e cinco testes existentes aprovados.
- Navegador Edge/Chromium: 12 combinações de rota e largura (320, 390, 768 e 1440px), com navegação, abas, formatos, teclado e alternativa sem JavaScript aprovados; sem erros de página ou de carregamento.
- Verificação final dos quatro tamanhos: ambos os fundos carregam o mesmo arquivo; sem transbordamento horizontal; orientação comum até 900px e espelhamento apenas no desktop.
- Revisão visual das capturas desktop, tablet e celular: fundos coerentes, textos legíveis e capturas reais preservadas.
- Aplicadas as orientações de refinamento e polimento da Impeccable. Não foram adicionados efeitos de movimento.

Capturas: [desktop](previews/harmony-desktop.webp) e [celular](previews/harmony-mobile.webp).

Esta verificação usou navegador automatizado; não inclui testes em aparelho físico ou certificação de acessibilidade.
