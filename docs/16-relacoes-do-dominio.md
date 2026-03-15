# Relacoes do Dominio

## Hierarquia principal

- empresa
- apolice
- plano
- grupo familiar
- vinculo do beneficiario
- beneficiario
- cobranca
- fatura tecnica
- caixa de emergencia

## Relacoes centrais

- uma empresa possui uma apolice vigente por vez
- uma empresa possui historico de apolices
- uma apolice possui um plano
- uma apolice possui varios grupos familiares
- uma apolice possui um caixa de emergencia
- um plano possui uma tabela de custo por faixa etaria
- uma empresa possui varios beneficiarios ao longo do tempo
- uma apolice possui um numero_apolice
- uma apolice possui percentual de comissao de corretagem
- um grupo familiar possui exatamente um titular vigente
- um grupo familiar pode possuir zero ou mais dependentes vigentes
- um vinculo do beneficiario pertence a uma empresa, apolice e grupo familiar
- um beneficiario pode ser titular ou dependente por meio do vinculo
- um vinculo possui taxa percentual propria
- um beneficiario pode ter historico de vinculo entre empresas e grupos
- um dependente pertence a um titular dentro do mesmo grupo familiar
- uma cobranca mensal pertence ao grupo familiar
- uma cobranca mensal possui itens de cobranca
- cada item de cobranca aponta para um beneficiario
- cada item de cobranca pode guardar custo, taxa, comissao e valor final
- uma fatura tecnica pertence a um beneficiario ou grupo familiar conforme o evento de entrada
- o pagamento da fatura tecnica alimenta o caixa de emergencia da apolice
- o caixa de emergencia pertence a apolice
- o movimento do caixa registra entrada, saida e retorno

## Leitura operacional

- empresa contrata uma apolice
- a apolice vigente define o plano do periodo
- grupos familiares formam a composicao operacional da apolice
- o titular centraliza a responsabilidade financeira do grupo
- o grupo familiar e a unidade de cobranca e inadimplencia
- caixa de emergencia protege a apolice contra atraso individual ou familiar

## Relaciona com

- `05-mapa-do-dominio.md`
- `10-entidade-empresa.md`
- `10a-entidade-apolice.md`
- `12a-entidade-grupo-familiar.md`
- `40-entidade-cobranca.md`

## Depende de

- `11-entidade-plano.md`
- `14-entidade-tabela-do-plano.md`
- `12-entidade-beneficiario.md`
- `15-entidade-vinculo-beneficiario.md`
- `43-entidade-caixa-emergencia.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `61-queries-e-indices.md`

## Status

- `fechado`
