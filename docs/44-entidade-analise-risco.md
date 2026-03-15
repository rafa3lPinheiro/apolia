# Entidade: Analise de Risco

Objetivo:

- descrever como o sistema representa a leitura de risco sem transformar isso em bloqueio automatico

## Direcao inicial

- a analise de risco pode nascer como leitura derivada, nao necessariamente como tabela persistida
- o sistema pode calcular indicadores a partir da composicao atual da apolice
- se houver persistencia, ela deve guardar somente o necessario para auditoria ou performance validada

## Indicadores candidatos

- total de titulares
- total de dependentes
- quantidade de criancas
- quantidade de idosos
- quantidade de casos com doenca pre-existente, se esse dado entrar no sistema
- indicadores aprovados pela governanca

## Nao confundir com

- `analise de risco` nao e decisao automatica
- `analise de risco` nao e rotulo permanente do beneficiario

## Relaciona com

- `35-risco-visao-geral.md`
- `37-risco-uso-no-cadastro.md`
- `63-regra-derivacao-de-risco.md`

## Depende de

- `39-risco-lgpd-governanca.md`
- `64-regra-mvp-risco.md`

## Desdobra em

- futura definicao de consulta, cache ou persistencia

## Status

- `aberto`
