# Entidade: Cobranca

Representa uma cobranca real de uma competencia.

Ela representa a cobranca mensal regular da apolice.

Na mensalidade:

- o titular e o responsavel principal pela cobranca
- os dependentes compoem o valor final
- a cobranca precisa guardar a composicao do total
- a composicao deve viver em itens de cobranca
- a cobranca pode guardar a cotacao do grupo familiar da competencia
- a cobranca deve permitir leitura de custo total e margem total
- a cobranca pode incluir pro-rata identificado separadamente quando houver excecao

Campos principais:

- empresa_id
- apolice_id
- grupo_familiar_id
- beneficiario_id
- titular_responsavel_id
- competencia
- tipo_cobranca
- valor_custo_total
- valor_margem_total
- valor_cotacao
- valor_pro_rata_total
- valor_original
- valor_atual
- data_vencimento
- status
- pago_em
- origem_confirmacao
- observacoes

Status sugeridos:

- pendente
- pago
- vencido
- cancelado
- renegociado

## Nao confundir com

- `cobranca` e o registro financeiro mensal da competencia
- `fatura tecnica` e um evento financeiro de entrada separado
- `cotacao` e a composicao comercial do grupo
- `cobranca` e o registro financeiro emitido para a competencia

## Relaciona com

- `24-entidade-cobranca-item.md`
- `14-entidade-tabela-do-plano.md`
- `41-entidade-fatura-tecnica.md`
- `50-notificacoes.md`

## Depende de

- `20-cobranca-visao-geral.md`
- `25-regra-geracao-cobranca-familiar.md`
- `26-regras-de-calculo-comercial.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `61-queries-e-indices.md`
- `90-duvidas-abertas.md`

## Status

- `fechado`
