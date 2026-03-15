# Entidade: Item de Cobranca

Item de cobranca detalha a composicao do valor total.

Sem essa entidade, a cobranca fica opaca.

Ela e importante quando o valor final depende de:

- titular
- dependentes
- ajustes

Campos principais:

- cobranca_id
- beneficiario_id
- tipo_item
- descricao
- valor_custo
- taxa_percentual
- valor_taxa
- valor_final

Tipos de item sugeridos:

- titular
- dependente
- pro_rata
- juros
- multa
- desconto
- acrescimo

Regra importante:

- itens de beneficiario devem permitir explicar custo, margem e valor final
- itens de ajuste podem alterar o total da cobranca sem apagar a composicao original dos beneficiarios

## Nao confundir com

- `cobranca` e o registro principal
- `item de cobranca` e a composicao auditavel do total

## Relaciona com

- `22-cobranca-ajustes.md`
- `23-cobranca-composicao-familiar.md`
- `40-entidade-cobranca.md`

## Depende de

- `20-cobranca-visao-geral.md`
- `25-regra-geracao-cobranca-familiar.md`

## Desdobra em

- `61-queries-e-indices.md`

## Status

- `fechado`
