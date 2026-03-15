# Entidade: Caixa de Emergencia

Caixa de emergencia e a reserva financeira da apolice.

Ele e formado pelos valores pagos nas faturas tecnicas.

Ele protege a apolice quando um grupo familiar atrasa.

Campos principais:

- apolice_id
- valor_total
- valor_disponivel
- valor_utilizado
- valor_comprometido
- nivel_risco
- atualizado_em

O sistema deve permitir saber:

- quanto a apolice acumulou
- quanto ainda pode usar
- quanto ja foi comprometido
- quanto precisa ser recomposto por cobrancas cobertas pelo caixa

Regras principais:

- o caixa pertence a uma unica apolice
- uso do caixa para cobrir competencia de grupo familiar deve registrar grupo, competencia e motivo
- quando o grupo paga a competencia que havia sido coberta pelo caixa, o pagamento recompõe o proprio caixa
- retirada de saldo para corretor so pode acontecer se nao puser a apolice em risco
- encerrada a apolice sem renovacao, o saldo remanescente vai para o corretor

## Relaciona com

- `31-fatura-tecnica-formacao-caixa.md`
- `34-fatura-tecnica-risco.md`
- `42-entidade-movimento-reserva.md`
- `10a-entidade-apolice.md`
- `12a-entidade-grupo-familiar.md`

## Depende de

- `30-fatura-tecnica-visao-geral.md`

## Desdobra em

- `19-fluxos-textuais.md`

## Status

- `fechado`
