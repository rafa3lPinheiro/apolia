# Desenho Inicial do Monorepo

Objetivo:

- definir a estrutura inicial do monorepo de Apolia
- deixar claro o papel de cada app e package
- alinhar a stack escolhida com Bun, Next.js, Hono, Prisma e Cloudflare

## Direcao escolhida

- gerenciador: Bun
- monorepo: Bun workspaces + Turborepo
- frontend: Next.js em `apps/web`
- backend: Hono em `apps/api`
- ORM: Prisma em `packages/db`
- regras compartilhadas: `packages/domain`
- UI compartilhada: `packages/ui`
- configuracoes compartilhadas: `packages/config`

## Estrutura

- `apps/web`
- `apps/api`
- `packages/domain`
- `packages/db`
- `packages/ui`
- `packages/config`
- `docs`

## Responsabilidades

### `apps/web`

- interface administrativa
- navegação
- formulários
- dashboards
- consumo da API

### `apps/api`

- rotas HTTP
- autenticação
- regras de aplicação
- orquestração de persistência
- integração com Cloudflare Workers

### `packages/domain`

- tipos do domínio
- enums
- regras puras
- contratos compartilhados

### `packages/db`

- schema Prisma
- geração do client
- migrações
- seeds

### `packages/ui`

- componentes compartilháveis
- primitives visuais
- padrões de layout

### `packages/config`

- tsconfig compartilhado
- futuras configs de lint, format e env typing

## Observacoes importantes

- Bun ainda não está instalado nesta máquina
- Wrangler também não está instalado nesta máquina
- a estrutura foi preparada, mas as dependências ainda não foram instaladas

## Proximo passo recomendado

1. instalar Bun
2. instalar dependências do workspace
3. gerar o app Next.js real
4. fechar o schema inicial do Prisma
5. ligar a API Hono ao banco

## Relaciona com

- `76-analise-da-stack-e-monorepo.md`
- `75-modelo-logico-inicial.md`

## Status

- `fechado`
