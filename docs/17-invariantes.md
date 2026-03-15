# Invariantes

As regras abaixo devem permanecer verdadeiras no sistema.

## Empresa

- empresa deve possuir um CNPJ
- empresa deve possuir no maximo uma apolice vigente por vez
- empresa deve possuir historico de apolices sem sobrescrever vigencias passadas

## Plano e tabela

- plano deve possuir uma tabela de custo por faixa etaria
- custo do plano deve vir da faixa correspondente da tabela
- valor final cobrado nao deve ser persistido na tabela
- plano vigente de uma empresa deve ser derivado da apolice vigente

## Apolice

- apolice deve possuir numero_apolice
- apolice deve possuir vigencia explicita
- apolice pode ser renovada ou substituida sem apagar a anterior
- comissao de corretagem deve pertencer a apolice vigente, nao ao plano
- caixa de emergencia deve pertencer a apolice

## Grupo familiar

- grupo familiar deve pertencer a uma unica apolice por vez
- grupo familiar deve possuir exatamente um titular vigente
- grupo familiar pode possuir zero ou muitos dependentes vigentes
- titular deve ser o responsavel financeiro do grupo
- movimentacoes com impacto financeiro devem respeitar a proxima competencia por padrao

## Beneficiario

- beneficiario e a pessoa do dominio e nao deve carregar sozinho todo o contexto contratual
- beneficiario pode ter apenas um vinculo ativo por vez
- vinculo vigente deve apontar empresa, apolice, grupo familiar e plano validos para a competencia
- beneficiario deve possuir taxa percentual explicita quando participar da cobranca mensal
- dependente nao pode existir sem titular valido no mesmo grupo e na mesma apolice vigente
- parentesco do dependente deve ser guardado no vinculo

## Cobranca

- cobranca mensal familiar nasce do grupo familiar e identifica o titular responsavel
- dependentes compoem a cobranca do titular
- comissao do corretor deve ser apurada por titular
- cobranca deve guardar valor_original e valor_atual
- cobranca deve ter status explicito
- valor total nao deve esconder a composicao da cobranca
- composicao da cobranca deve permitir explicar custo, taxa, comissao e valor final por beneficiario ou por titular
- cotacao do grupo familiar deve ser rastreavel por competencia
- mudanca de faixa etaria, taxa, apolice ou comissao nao deve alterar competencias passadas

## Fatura tecnica e caixa

- entrada de beneficiario gera fatura tecnica
- fatura tecnica e taxa de adesao ou implementacao
- pagamento da fatura tecnica alimenta o caixa de emergencia
- uso do caixa deve gerar movimento
- retorno ao caixa deve gerar movimento
- uso do caixa para cobrir uma competencia deve gerar obrigacao de recomposicao quando o grupo pagar

## Dados sensiveis

- dado sensivel so entra se for necessario
- sempre que possivel, risco deve ser derivado

## Relaciona com

- `16-relacoes-do-dominio.md`
- `18-estados-do-sistema.md`
- `62-regra-tratamento-dados-sensiveis.md`

## Desdobra em

- `25-regra-geracao-cobranca-familiar.md`
- `42-entidade-movimento-reserva.md`
- `63-regra-derivacao-de-risco.md`

## Status

- `fechado`
