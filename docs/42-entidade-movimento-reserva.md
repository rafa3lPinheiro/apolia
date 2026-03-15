# Entidade: Movimento do Caixa de Emergencia

Movimento do caixa de emergencia e a trilha da reserva financeira da apolice.

Sem essa entidade, o historico fica fraco.

Tipos sugeridos:

- aporte_inicial
- uso_por_inadimplencia
- retorno_por_pagamento
- ajuste_manual

Campos principais:

- apolice_id
- grupo_familiar_id
- beneficiario_id
- fatura_tecnica_id
- cobranca_id
- competencia
- tipo_movimento
- valor
- criado_em
- motivo
- criado_por_usuario_id

## Relaciona com

- `32-fatura-tecnica-uso-caixa.md`
- `33-fatura-tecnica-reposicao.md`
- `43-entidade-caixa-emergencia.md`

## Depende de

- `41-entidade-fatura-tecnica.md`
- `17-invariantes.md`

## Desdobra em

- `34-fatura-tecnica-risco.md`

## Status

- `fechado`
