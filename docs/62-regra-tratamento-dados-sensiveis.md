# Regra: Tratamento de Dados Sensiveis

O sistema deve seguir uma regra simples:

- dado sensivel so entra se for realmente necessario

Ordem de decisao:

1. verificar se o dado e necessario para a operacao
2. verificar se o dado pode ser derivado de outro campo menos sensivel
3. se ainda for necessario armazenar, aplicar protecao reforcada

Protecao reforcada significa:

- criptografia
- controle de acesso
- auditoria
- exposicao minima em tela

Regra de produto:

- dado sensivel nao entra no MVP so por conveniencia
- dado sensivel nao deve virar campo apenas porque pode ser util um dia

## Relaciona com

- `38-risco-dados-sensiveis.md`
- `39-risco-lgpd-governanca.md`
- `60-principios-tecnicos.md`

## Depende de

- `01-escopo.md`

## Desdobra em

- `64-regra-mvp-risco.md`

## Status

- `fechado`
