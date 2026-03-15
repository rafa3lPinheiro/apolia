# Fluxos Textuais

## Entrada de beneficiario

1. operador cadastra beneficiario
2. sistema cria ou atualiza o grupo familiar correspondente
3. sistema define o papel vigente no vinculo: titular ou dependente
4. se for dependente, sistema exige titular valido no mesmo grupo e na mesma apolice
4. sistema gera fatura tecnica
5. apos pagamento, valor alimenta o caixa de emergencia

## Geracao da cobranca mensal

1. sistema localiza grupos familiares ativos da apolice na competencia
2. sistema localiza os vinculos vigentes de cada beneficiario no grupo
3. sistema resolve o vinculo vigente de cada beneficiario na competencia
4. sistema encontra o custo de cada beneficiario na tabela vigente do plano
5. sistema aplica a taxa percentual vigente de cada beneficiario
6. sistema calcula a cotacao do grupo familiar
7. sistema cria cobranca principal
8. sistema cria itens da cobranca

## Registro de atraso

1. cobranca nao e paga no prazo
2. sistema marca ou sugere status vencido
3. operador avalia necessidade de aviso
4. operador avalia uso do caixa de emergencia

## Uso do caixa de emergencia

1. operador identifica atraso com risco para a empresa
2. sistema registra uso do caixa
3. sistema reduz saldo disponivel
4. sistema registra grupo familiar relacionado, competencia e motivo

## Reposicao do caixa

1. beneficiario inadimplente realiza pagamento
2. operador registra pagamento
3. sistema registra retorno ao caixa
4. sistema atualiza saldo da apolice

## Analise de risco

1. operador abre empresa
2. sistema calcula composicao da apolice
3. sistema exibe contadores e indicadores aprovados
4. operador usa a leitura como apoio de decisao

## Mudanca de faixa etaria

1. sistema identifica que beneficiario atingiu nova faixa etaria
2. sistema localiza a nova faixa vigente na tabela do plano
3. sistema recalcula custo e valor cobrado apenas para competencias futuras
4. sistema gera aviso operacional antes da proxima cobranca impactada
5. operador avalia se mantem precificacao, revisa plano ou move o beneficiario para outro CNPJ

## Transicao entre CNPJs

1. operador decide mover beneficiario para outro CNPJ
2. sistema encerra o vinculo atual com vigencia final
3. sistema cria novo vinculo com nova empresa e plano
4. sistema preserva historico das cobrancas anteriores
5. sistema passa a considerar apenas o novo vinculo nas futuras competencias

## Movimentacao entre grupos familiares

1. operador decide mover dependente de um grupo para outro na mesma apolice
2. sistema encerra o vinculo atual sem reescrever o snapshot ja fechado da competencia
3. sistema cria o novo vinculo com efeito financeiro na proxima competencia
4. sistema preserva origem, destino, competencia efetiva e motivo da mudanca

## Relaciona com

- `18-estados-do-sistema.md`
- `20-cobranca-visao-geral.md`
- `30-fatura-tecnica-visao-geral.md`

## Depende de

- `12-entidade-beneficiario.md`
- `15-entidade-vinculo-beneficiario.md`
- `40-entidade-cobranca.md`
- `43-entidade-caixa-emergencia.md`

## Desdobra em

- `32-fatura-tecnica-uso-caixa.md`
- `33-fatura-tecnica-reposicao.md`
- `37-risco-uso-no-cadastro.md`
- `50-notificacoes.md`

## Status

- `provisorio`
