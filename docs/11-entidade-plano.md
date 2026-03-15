# Entidade: Plano

Plano deve existir como entidade propria.

Motivos:

- deixa o dominio mais limpo
- separa dados da empresa de dados do plano
- facilita evolucao futura
- evita misturar identidade do plano com sua tabela de custo

Na versao atual:

- uma apolice possui um plano
- o plano define a regra de vencimento
- o plano possui uma tabela de custo por faixa etaria

Regra importante:

- `valor_base` unico nao representa bem a operacao
- o custo do plano deve vir da tabela por faixa etaria
- a taxa comercial nao pertence ao plano
- a comissao de corretagem nao pertence ao plano

Campos principais:

- empresa_id
- nome_plano
- nome_operadora
- dia_vencimento
- ativo
- observacoes

## Relaciona com

- `10a-entidade-apolice.md`
- `10-entidade-empresa.md`
- `14-entidade-tabela-do-plano.md`
- `20-cobranca-visao-geral.md`

## Relaciona com

- `10-entidade-empresa.md`
- `20-cobranca-visao-geral.md`
- `30-fatura-tecnica-visao-geral.md`

## Depende de

- `17-invariantes.md`

## Desdobra em

- `21-cobranca-recorrencia.md`
- `41-entidade-fatura-tecnica.md`

## Status

- `fechado`
