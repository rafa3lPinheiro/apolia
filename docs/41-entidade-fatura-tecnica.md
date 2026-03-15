# Entidade: Fatura Tecnica

Fatura tecnica merece entidade propria.

Motivo:

- ela e uma cobranca de adesao ou implementacao
- ela da origem ao valor que entra no caixa de emergencia
- ela precisa registrar a unidade de negocio a que pertence, nao apenas vidas isoladas

Campos principais:

- empresa_id
- apolice_id
- grupo_familiar_id
- titular_responsavel_id
- beneficiario_id
- plano_id
- valor_original
- valor_devolvido
- valor_repassado_corretor
- pago_em
- aprovado_em
- implantado_em
- status
- tipo_referencia
- referencia_id
- observacoes
- criado_em

Status sugeridos:

- pendente
- paga
- implantada
- devolvida
- repassada
- cancelada

## Relaciona com

- `30-fatura-tecnica-visao-geral.md`
- `40-entidade-cobranca.md`
- `42-entidade-movimento-reserva.md`

## Depende de

- `11-entidade-plano.md`
- `12-entidade-beneficiario.md`

## Desdobra em

- `31-fatura-tecnica-formacao-caixa.md`
- `33-fatura-tecnica-reposicao.md`

## Status

- `fechado`
