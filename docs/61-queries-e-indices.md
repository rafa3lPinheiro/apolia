# Queries e Indices

Este documento registra escolhas de modelagem pensando em consulta e performance.

## Beneficiario

Modelo escolhido:

- uma unica entidade de beneficiario
- sem duplicar estrutura entre titular e dependente
- papel de titular ou dependente resolvido pelo vinculo com o grupo familiar

Motivos:

- simplifica o cadastro
- simplifica filtros
- evita duplicar estrutura entre titular e dependente
- facilita geracao de cobranca familiar

Consultas comuns:

- listar titulares por grupo familiar
- listar dependentes de um titular
- montar grupo familiar
- encontrar dependentes sem titular

Indices recomendados:

- `(empresa_id, status)`
- `(documento)`
- `(plano_id, data_nascimento)`

## Vinculo do Beneficiario

Modelo escolhido:

- historico de vinculo entre beneficiario, empresa, apolice e grupo familiar
- apenas um vinculo ativo por beneficiario

Motivos:

- preservar historico quando houver migracao entre CNPJs
- resolver taxa e contexto comercial por competencia
- impedir perda de historico operacional

Consultas comuns:

- localizar vinculo ativo do beneficiario
- listar historico de vinculos
- identificar beneficiarios em transicao
- montar grupo familiar vigente por competencia

Indices recomendados:

- `(beneficiario_id, ativo)`
- `(empresa_id, ativo)`
- `(grupo_familiar_id, ativo)`
- `(titular_beneficiario_id, ativo)`
- `(beneficiario_id, competencia_inicial, competencia_final)`

## Tabela do Plano

Modelo escolhido:

- uma entidade de tabela do plano
- varias linhas por faixa etaria

Motivos:

- custo da operadora muda por faixa etaria
- custo nao deve ficar preso a um valor unico no plano
- taxa comercial nao deve contaminar a tabela base

Consultas comuns:

- localizar faixa etaria de um beneficiario
- listar faixas de um plano
- encontrar custo vigente por idade

Indices recomendados:

- `(plano_id, ativa)`
- `(tabela_plano_id, idade_inicial, idade_final)`

## Cobranca

Modelo escolhido:

- uma entidade principal de cobranca
- uma entidade de item de cobranca

Motivos:

- permite auditar a composicao do valor
- facilita explicar total do titular
- melhora rastreabilidade de ajustes
- permite separar custo, margem e valor final

Consultas comuns:

- listar cobrancas por empresa e competencia
- listar cobrancas pendentes
- listar cobrancas de um titular
- listar cobrancas por grupo familiar
- abrir composicao de uma cobranca
- consolidar lucro por competencia
- consolidar custo por empresa

Indices recomendados:

- `(empresa_id, competencia)`
- `(grupo_familiar_id, competencia)`
- `(titular_responsavel_id, competencia)`
- `(status)`

## Item de Cobranca

Motivo da entidade:

- detalhar quem compoe o valor final
- separar titular, dependentes e ajustes
- explicar custo do plano e taxa aplicada

Consultas comuns:

- listar itens de uma cobranca
- descobrir quais beneficiarios compuseram o total
- identificar participacao de um dependente em cobrancas

Indices recomendados:

- `(cobranca_id)`
- `(beneficiario_id)`

## Regra pratica

Para este sistema:

- relacao titular/dependente deve ser simples de consultar
- cobranca precisa ser auditavel
- valor total nunca deve esconder a composicao interna

## Relaciona com

- `13-relacao-titular-dependente.md`
- `24-entidade-cobranca-item.md`
- `25-regra-geracao-cobranca-familiar.md`

## Depende de

- `40-entidade-cobranca.md`
- `60-principios-tecnicos.md`

## Desdobra em

- futura modelagem de banco e ORM

## Status

- `fechado`
