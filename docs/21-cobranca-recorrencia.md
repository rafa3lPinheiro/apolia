# Cobranca: Recorrencia

Toda apolice implantada possui uma cobranca mensal esperada.

Exemplo simples:

- plano da empresa: 1000
- vencimento: dia 10

Entao o sistema pode gerar:

- competencia 03/2026
- valor original 1000
- vencimento 10/03/2026

No mes seguinte:

- competencia 04/2026
- valor original 1000
- vencimento 10/04/2026

Cada cobranca mensal precisa virar um registro proprio.

Motivo:

- mudancas futuras no plano nao podem alterar o passado
- o historico mensal precisa continuar confiavel

Regra de implantacao:

- a fatura tecnica pode ser paga em qualquer dia do mes e nao define a cadencia mensal
- a implantacao inaugura a competencia 1 da apolice ativa
- a partir da implantacao a apolice passa a cobrar todos no mesmo dia mensal
- se um novo grupo familiar entrar apos o pagamento do mes, ele paga fatura tecnica e so ativa na competencia seguinte
- em caso excepcional, pode haver uso antecipado com cobranca de pro-rata no vencimento seguinte

## Composicao por titular

A cobranca mensal pode ser formada por um titular e seus dependentes.

Exemplo:

- titular: custo 1000 + taxa 10%
- dependente 1: custo 500 + taxa 15%
- dependente 2: custo 1000 + taxa 20%

Total da cobranca do titular:

- soma do valor cobrado de todos os membros do grupo

Entao o sistema precisa saber:

- quem e o titular responsavel pela cobranca
- quais dependentes compoem o valor
- qual e o custo de cada pessoa
- qual e a taxa percentual de cada pessoa
- quanto a taxa adiciona ao total
- quanto cada pessoa adiciona ao valor cobrado

Regra importante:

- cotacao e a soma comercial do grupo familiar
- cobranca mensal pode guardar essa cotacao como snapshot da competencia
- tabela vigente e taxa vigente devem ser resolvidas na data da competencia
- o pro-rata pode ser cobrado junto da competencia, mas precisa ficar identificado separadamente

## Relaciona com

- `20-cobranca-visao-geral.md`
- `14-entidade-tabela-do-plano.md`
- `23-cobranca-composicao-familiar.md`
- `40-entidade-cobranca.md`

## Depende de

- `11-entidade-plano.md`
- `12-entidade-beneficiario.md`

## Desdobra em

- `24-entidade-cobranca-item.md`
- `25-regra-geracao-cobranca-familiar.md`

## Status

- `fechado`
