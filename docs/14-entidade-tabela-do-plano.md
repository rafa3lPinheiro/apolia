# Entidade: Tabela do Plano

Objetivo:

- representar a precificacao base da operadora por faixa etaria
- servir como referencia de custo para cotacao e cobranca

## Direcao atual

- cada plano possui uma unica tabela ativa na versao atual
- a tabela do plano e entidade separada do plano
- a tabela nao guarda a taxa comercial do beneficiario
- a tabela nao guarda o valor final cobrado

## Estrutura recomendada

A modelagem pode ter:

- uma entidade principal de tabela do plano
- varias linhas de faixa etaria vinculadas a essa tabela

Campos principais da tabela:

- plano_id
- nome_tabela
- vigencia_inicial
- vigencia_final
- ativa
- observacoes

Campos principais da faixa da tabela:

- tabela_plano_id
- idade_inicial
- idade_final
- valor_custo
- ordem_faixa

## Regra de uso

- sistema identifica a idade do beneficiario
- sistema encontra a faixa etaria correspondente
- sistema usa o `valor_custo` da faixa como base de calculo
- sistema aplica a taxa percentual do beneficiario fora da tabela

## Nao confundir com

- `tabela do plano` define custo da operadora
- `taxa` pertence ao beneficiario
- `valor cobrado` e derivado e nao deve viver na tabela

## Relaciona com

- `11-entidade-plano.md`
- `12-entidade-beneficiario.md`
- `21-cobranca-recorrencia.md`

## Depende de

- `03-glossario.md`
- `63-regra-derivacao-de-risco.md`

## Desdobra em

- `23-cobranca-composicao-familiar.md`
- `40-entidade-cobranca.md`
- `61-queries-e-indices.md`

## Status

- `fechado`
