# Apolia

Apolia é um sistema interno para operação administrativa de planos de saúde empresariais.

O produto organiza a operação contratual, cadastral e financeira de apólices coletivas empresariais, com foco em:

- CNPJ, apólice e vigência contratual
- grupos familiares, titulares e dependentes
- cobrança mensal por competência
- fatura técnica e caixa de emergência
- inadimplência, auditoria e leitura operacional de risco

## Estado atual

O projeto está em fase de fundação técnica e de modelagem.

Hoje o repositório já possui:

- domínio consolidado em documentação curta e narrativa
- modelo conceitual humano e modelo lógico inicial
- schema Prisma inicial do domínio
- análise de stack e desenho inicial de monorepo
- esqueleto de monorepo com `apps/` e `packages/`

Ainda não está tudo executável no ambiente local porque `Bun` e `Wrangler` não estavam instalados na máquina no momento da preparação da estrutura.

## Stack

Direção atual da stack:

- frontend: `React + Next.js`
- backend: `Hono`
- ORM: `Prisma`
- banco recomendado: `PostgreSQL`
- plataforma: `Cloudflare`
- autenticação web: `Auth.js` com Google
- organização do repositório: `monorepo`
- package manager: `Bun`

## Estrutura do repositório

```text
.
├─ apps/
│  ├─ web/        # Next.js
│  └─ api/        # Hono + Cloudflare Workers
├─ packages/
│  ├─ config/     # configurações compartilhadas
│  ├─ db/         # Prisma, schema e acesso a dados
│  ├─ domain/     # tipos, enums e regras puras
│  └─ ui/         # componentes e foundations de UI
├─ docs/          # fonte de verdade do produto, domínio e arquitetura
├─ package.json
├─ bunfig.toml
├─ turbo.json
└─ tsconfig.base.json
```

## Como ler a documentação

`docs/` é a fonte de verdade do produto, do domínio e das regras técnicas.

Leitura humana recomendada:

- [docs/70-guia-humano-do-produto.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/70-guia-humano-do-produto.md)
- [docs/71-guia-humano-do-dominio.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/71-guia-humano-do-dominio.md)
- [docs/72-guia-humano-da-operacao-financeira.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/72-guia-humano-da-operacao-financeira.md)
- [docs/73-guia-humano-de-estados-e-eventos.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/73-guia-humano-de-estados-e-eventos.md)
- [docs/74-modelo-conceitual-humano.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/74-modelo-conceitual-humano.md)
- [docs/75-modelo-logico-inicial.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/75-modelo-logico-inicial.md)
- [docs/76-analise-da-stack-e-monorepo.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/76-analise-da-stack-e-monorepo.md)
- [docs/77-desenho-inicial-do-monorepo.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/77-desenho-inicial-do-monorepo.md)
- [docs/78-revisao-da-milestone-0.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/78-revisao-da-milestone-0.md)

Índice geral:

- [docs/README.md](/C:/Users/Rafa/code/projects/health-plan-admin/docs/README.md)

## Roadmap atual

As milestones abertas hoje seguem esta sequência:

1. Base executável do monorepo
2. Cadastro e estrutura contratual
3. Cobrança e caixa de emergência
4. Autenticação, autorização e auditoria
5. Risco, notificações e readiness
6. Design, UX e design system

## Próximo passo técnico

O próximo passo recomendado é transformar a fundação atual em base executável real:

1. instalar `Bun`
2. instalar dependências do workspace
3. validar `apps/web` e `apps/api`
4. evoluir o schema Prisma para migration inicial
5. configurar autenticação com `Auth.js` e Google

## Observações

- O nome técnico antigo do diretório ainda é `health-plan-admin`, mas o nome do produto é `Apolia`.
- Este repositório foi inicializado em `main`.
- Remote configurado: `origin -> https://github.com/rafa3lPinheiro/apolia.git`
