# Regra: Geracao da Cobranca Familiar

Para mensalidade por grupo familiar, o sistema deve gerar a cobranca a partir do titular.

Passos:

1. localizar o titular ativo
2. localizar dependentes ativos daquele titular
3. resolver o vinculo vigente de cada beneficiario na competencia
4. localizar a faixa etaria de cada beneficiario na tabela vigente do plano
5. calcular o custo de cada beneficiario
6. aplicar a taxa percentual vigente de cada beneficiario
7. calcular o valor final de cada beneficiario
8. somar tudo para formar a cotacao do grupo
9. criar a cobranca principal
10. criar os itens da cobranca

Resultado:

- uma cobranca principal por titular
- varios itens de cobranca compondo o total
- uma cotacao rastreavel por competencia

Exemplo:

- titular: custo 1000, taxa 10%, valor final 1100
- dependente A: custo 500, taxa 15%, valor final 575
- dependente B: custo 1000, taxa 20%, valor final 1200

Total:

- cotacao do grupo = 2875
- cobranca principal = 2875

## Relaciona com

- `23-cobranca-composicao-familiar.md`
- `24-entidade-cobranca-item.md`
- `40-entidade-cobranca.md`

## Depende de

- `12-entidade-beneficiario.md`
- `13-relacao-titular-dependente.md`
- `15-entidade-vinculo-beneficiario.md`
- `17-invariantes.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `61-queries-e-indices.md`

## Status

- `fechado`
