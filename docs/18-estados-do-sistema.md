# Estados do Sistema

## Apolice

Estados sugeridos:

- em_implantacao
- ativa
- com_pendencia
- inadimplente
- suspensa
- encerrada
- cancelada

Observacao:

- regras detalhadas de transicao ainda precisam ser fechadas

## Grupo Familiar

Estados sugeridos:

- pre_cadastro
- aguardando_documentacao
- em_implantacao
- ativo
- inadimplente
- em_caixa_de_emergencia
- cancelado
- negado
- encerrado

Transicoes validas ja sugeridas:

- pre_cadastro -> aguardando_documentacao
- aguardando_documentacao -> em_implantacao
- em_implantacao -> ativo
- em_implantacao -> negado
- ativo -> inadimplente
- inadimplente -> em_caixa_de_emergencia
- em_caixa_de_emergencia -> ativo
- em_caixa_de_emergencia -> cancelado
- ativo -> cancelado
- ativo -> encerrado

## Beneficiario

Estados sugeridos:

- pre_cadastrado
- aguardando_implantacao
- ativo
- pendente_documental
- excluido
- negado

Observacao:

- regras detalhadas de transicao ainda precisam ser fechadas
- mudanca de CNPJ ou plano pode exigir estado de transicao operacional

## Cobranca

Estados sugeridos:

- pendente
- pago
- vencido
- cancelado
- renegociado

## Fatura Tecnica

Estados sugeridos:

- pendente
- paga
- cancelada

## Caixa de Emergencia

Nao precisa de status proprio no inicio.

O mais importante e mostrar:

- valor_total
- valor_disponivel
- valor_utilizado
- valor_comprometido

## Evento operacional relevante

Mudanca de faixa etaria deve ser tratada como evento relevante.

O sistema deve:

- detectar a entrada em nova faixa
- considerar impacto apenas em competencias futuras
- avisar o operador antes da proxima cobranca impactada

Outros eventos criticos que devem ser auditaveis:

- implantacao iniciada ou concluida
- troca de titular
- movimentacao de dependente entre grupos
- cobranca emitida
- pagamento registrado
- caixa utilizado
- caixa recomposto
- cancelamento
- negacao
- ajuste manual relevante

## Relaciona com

- `12-entidade-beneficiario.md`
- `12a-entidade-grupo-familiar.md`
- `40-entidade-cobranca.md`
- `41-entidade-fatura-tecnica.md`

## Depende de

- `17-invariantes.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `06-status-das-decisoes.md`

## Status

- `provisorio`
