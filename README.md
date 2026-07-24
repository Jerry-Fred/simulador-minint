# Simulador de Admissão — MININT (Fase 1 · MVP)

Simulador de perguntas de escolha múltipla, sem conta e sem base de dados,
para testar a procura antes de avançar para as fases seguintes do plano.

## Ficheiros

- `index.html` — estrutura das 3 telas (capa, quiz, resultado)
- `style.css` — todo o estilo (conceito visual "processo/dossiê oficial")
- `script.js` — lógica do quiz (baralhar perguntas, corrigir, calcular resultado)
- `questions.js` — **banco de perguntas de exemplo** — substitui pelo conteúdo real

## Como testar localmente

Abrir `index.html` diretamente no
browser, ou correr um servidor simples se preferires:

```bash
python -m http.server 8000
# depois abre http://localhost:8000
```


## Cores

A paleta foi ajustada para se aproximar da identidade visual do site oficial
(candidaturas.minint.ao): fundo azul-marinho escuro, dourado como cor de
destaque principal (botões, marcadores, selo final) e um azul de apoio para
alguns números/estatísticas. Os valores exatos foram estimados a partir de
um screenshot — se quiseres afinar com precisão, usa o inspecionar do
browser (`F12` → seletor de elemento → clicar no quadrado de cor →
conta-gotas) para confirmar os HEX exatos, e ajusta as variáveis no topo do
`style.css` (bloco `:root`).

## Categorias das perguntas

As perguntas de exemplo em `questions.js` foram realinhadas às 5 categorias
reais da Prova Escrita indicadas no portal de candidaturas:
1. História de Angola
2. Organização Política e Administrativa da República de Angola
3. Noções gerais de Administração Pública
4. Organização e funcionamento do Ministério do Interior
5. Patriotismo

(A Prova de Aptidão Física, por ser prática e não de escolha múltipla, não
está representada no simulado — só faz sentido nas fases seguintes, se
quiseres simular também critérios físicos.)

## Notas de design

- Sem framework, sem dependências de build — só HTML/CSS/JS puro, como
  pedido na Fase 1.
- Única dependência externa: as fontes do Google Fonts (`Zilla Slab`,
  `Inter`, `IBM Plex Mono`), carregadas por `@import` no `style.css`.
- A classificação final ("APTO" / "LIMIAR" / "REPROVADO") usa limites de
  70% e 50% — ajusta em `finishQuiz()` no `script.js` se quiseres outros
  critérios.
- Nada é guardado (sem `localStorage`, sem cookies, sem backend) — cumpre
  deliberadamente o "sem conta / sem base de dados / sem pagamentos" da Fase 1.

## Próximo passo natural (Fase 2)

Evolução para uma MVP2 e posteriormente um SaaS.
