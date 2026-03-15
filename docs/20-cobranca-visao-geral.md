# Cobranca: Visao Geral

A cobranca mensal nao deve nascer totalmente manual.

O sistema deve trabalhar com:

- regra padrao de cobranca
- cobranca mensal gerada
- composicao da cobranca por titular e dependentes
- ajustes manuais quando houver excecao
- calculo de custo por faixa etaria
- aplicacao da taxa percentual por beneficiario
- identificacao separada de pro-rata quando houver entrada excepcional

Isso evita dois problemas:

- retrabalho mensal
- perda de historico

Ideia central:

- a apolice vigente define plano, vencimento e regra comercial
- a competencia congela composicao e valores da cobranca
- a tabela do plano define custo por faixa etaria
- o beneficiario define a taxa percentual comercial
- o sistema gera a cobranca do mes
- o sistema soma os beneficiarios vigentes de cada grupo familiar
- o sistema apura margem a partir da taxa aplicada por beneficiario
- o sistema nao trata a comissao do corretor como evento mensal de cobranca
- o operador ajusta apenas o que sair do normal

Leituras que a cobranca precisa sustentar:

- custo
- margem
- valor cotado
- cotacao do grupo familiar
- identificacao de itens excepcionais pro-rata

Regra temporal:

- tabela do plano, taxa do beneficiario e percentual de comissao da apolice devem respeitar vigencia
- cobranca de cada competencia precisa preservar o snapshot usado no calculo
- a cobranca mensal regular so existe apos a implantacao
- fatura tecnica e cobranca mensal devem ser modeladas como eventos diferentes

## Relaciona com

- `14-entidade-tabela-do-plano.md`
- `12a-entidade-grupo-familiar.md`
- `21-cobranca-recorrencia.md`
- `23-cobranca-composicao-familiar.md`
- `40-entidade-cobranca.md`

## Depende de

- `11-entidade-plano.md`
- `13-relacao-titular-dependente.md`

## Desdobra em

- `22-cobranca-ajustes.md`
- `24-entidade-cobranca-item.md`
- `25-regra-geracao-cobranca-familiar.md`

## Status

- `fechado`
