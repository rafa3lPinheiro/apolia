# Regras de Calculo Comercial

Este arquivo consolida as formulas operacionais e os principios de calculo do dominio comercial de Apolia.

Ele serve como base para modelagem de banco, implementacao de regras e validacao com stakeholder.

## Premissas

- o custo vem da tabela vigente da operadora por faixa etaria
- a taxa do beneficiario e individual
- a comissao do corretor e separada da taxa do beneficiario
- a comissao acontece apenas na venda
- a base da comissao e o custo, nao a cotacao
- a cobranca mensal regular e diferente da fatura tecnica

## Variaveis principais

- `custo_beneficiario`: valor da tabela vigente para a faixa etaria do beneficiario
- `taxa_percentual_beneficiario`: percentual comercial aplicado ao custo do beneficiario
- `valor_taxa_beneficiario`: valor monetario da taxa aplicada ao beneficiario
- `valor_cotado_beneficiario`: valor final cotado do beneficiario
- `custo_grupo_familiar`: soma dos custos dos membros do grupo familiar
- `cotacao_grupo_familiar`: soma dos valores cotados dos membros do grupo familiar
- `margem_grupo_familiar`: diferenca entre cotacao e custo do grupo familiar
- `percentual_comissao_apolice`: percentual de comissao registrado na apolice
- `valor_comissao_venda`: valor da comissao devida ao corretor na venda
- `valor_pro_rata`: valor proporcional de uso antecipado calculado por dias corridos

## Formulas base

### Beneficiario

- `valor_taxa_beneficiario = custo_beneficiario * taxa_percentual_beneficiario`
- `valor_cotado_beneficiario = custo_beneficiario + valor_taxa_beneficiario`

### Grupo familiar

- `custo_grupo_familiar = soma dos custos dos membros ativos do grupo`
- `cotacao_grupo_familiar = soma dos valores cotados dos membros ativos do grupo`
- `margem_grupo_familiar = cotacao_grupo_familiar - custo_grupo_familiar`

### Apolice

- `custo_total_apolice = soma dos custos dos grupos familiares ativos na competencia`
- `cotacao_total_apolice = soma das cotacoes dos grupos familiares ativos na competencia`
- `margem_total_apolice = cotacao_total_apolice - custo_total_apolice`

### Comissao de venda

- `valor_comissao_venda = custo_base_da_venda * percentual_comissao_apolice`

Regra:

- o `custo_base_da_venda` deve considerar o custo dos beneficiarios envolvidos na venda
- a comissao nao usa a cotacao como base
- a comissao nao e recorrente mensal

## Fatura tecnica

Regra geral:

- a fatura tecnica de entrada deve, em regra, ter o mesmo valor da cobranca mensal cotada do grupo familiar ou do dependente que esta sendo adicionado

Formulas:

- `fatura_tecnica_grupo = cotacao_grupo_familiar_no_momento_da_entrada`
- `fatura_tecnica_dependente = valor_cotado_beneficiario_do_dependente_adicionado`

## Cobranca mensal regular

Para cada competencia:

1. localizar a apolice implantada e a competencia vigente
2. localizar os grupos familiares ativos na competencia
3. localizar os beneficiarios ativos de cada grupo
4. resolver a faixa etaria de cada beneficiario
5. resolver o custo vigente na tabela
6. resolver a taxa vigente de cada beneficiario
7. calcular custo, taxa e valor cotado por beneficiario
8. somar o grupo familiar
9. consolidar os totais da apolice
10. gerar itens auditaveis da cobranca

## Pro-rata

O pro-rata existe para situacoes excepcionais de uso antes da proxima competencia.

Premissas:

- o calculo usa dias corridos
- o valor pode ser cobrado junto da cobranca mensal seguinte
- o componente pro-rata deve ficar identificado separadamente

Formula geral:

- `valor_pro_rata = valor_cotado_beneficiario / quantidade_de_dias_do_periodo * dias_utilizados`

Observacao:

- a formula acima expressa a regra de proporcionalidade por dias corridos
- a definicao exata do denominador deve seguir o periodo comercial adotado pela operacao na implementacao

## Devolucao e repasse

- se a operadora reprovar uma vida apos a fatura tecnica paga, o valor correspondente deve ser devolvido integralmente
- se um dependente sair depois, a fatura tecnica nao e devolvida
- eventual valor remanescente de saida pode ser repassado imediatamente ao corretor
- ao fim da vigencia, o saldo remanescente do caixa vai integralmente para o corretor

## Exemplo consolidado

Grupo familiar com:

- titular com custo `600`
- dependente com custo `600`
- taxa de `50%` para cada um

Calculo:

- `valor_taxa_titular = 600 * 50% = 300`
- `valor_cotado_titular = 600 + 300 = 900`
- `valor_taxa_dependente = 600 * 50% = 300`
- `valor_cotado_dependente = 600 + 300 = 900`
- `custo_grupo_familiar = 1200`
- `cotacao_grupo_familiar = 1800`
- `margem_grupo_familiar = 600`

Se a apolice tiver `comissao de 200%`:

- `valor_comissao_venda = 1200 * 200% = 2400`

## Relaciona com

- `03-glossario.md`
- `20-cobranca-visao-geral.md`
- `21-cobranca-recorrencia.md`
- `24-entidade-cobranca-item.md`
- `25-regra-geracao-cobranca-familiar.md`

## Status

- `fechado`
