# Guia Humano do Produto

Objetivo:

- explicar Apolia como produto para leitura humana
- permitir onboarding sem exigir leitura atomizada de todas as notas
- alinhar contexto de negocio, operacao e linguagem do dominio

## O que e Apolia

Apolia e um sistema interno para operar planos de saude empresariais.

Ela nao nasce como portal de autoatendimento para cliente final nem como sistema da operadora.

Ela nasce como ferramenta de controle para o corretor e para a operacao interna.

O problema que Apolia resolve nao e apenas cadastrar vidas.

Ela precisa permitir que a operacao entenda, com clareza:

- quem esta vinculado a qual CNPJ
- qual e a apolice vigente daquele CNPJ
- como os grupos familiares estao organizados
- quanto cada grupo deveria pagar
- quem esta inadimplente
- como o caixa de emergencia protege a continuidade do plano
- quando uma decisao operacional esta aumentando o risco do contrato

Em outras palavras, Apolia existe para transformar uma operacao que facilmente vira planilha dispersa em uma visao controlada, auditavel e consultavel.

## Quem usa

O usuario principal e o operador interno.

Esse operador precisa navegar bem entre quatro tipos de leitura:

- leitura contratual: CNPJ, apolice, vigencia, plano
- leitura cadastral: grupos familiares, titulares, dependentes, documentacao
- leitura financeira: cobranca, fatura tecnica, caixa de emergencia, inadimplencia
- leitura de risco: impacto da inadimplencia e da composicao da apolice

O stakeholder quer metricas e controle.

Isso significa que Apolia nao pode ser apenas um CRUD.

Ela precisa explicar o estado atual da operacao e permitir entender por que aquele estado existe.

## Como ler o dominio

O melhor modelo mental para entender Apolia hoje e este:

- o `CNPJ` e a raiz contratante
- o CNPJ tem uma `apolice` ativa por vez
- a apolice organiza `grupos familiares`
- cada grupo familiar e composto por `beneficiarios`
- cada beneficiario participa por meio de um `vinculo` com papel e vigencia

Essa ordem importa porque evita confusao comuns.

A principal delas seria modelar a apolice como dona do contrato.

No dominio atual, quem contrata e o CNPJ.

A apolice e a forma contratual vigente daquele CNPJ em um periodo.

## O que torna o produto diferente de um cadastro comum

Existem quatro elementos que tornam Apolia um sistema de operacao, nao apenas de cadastro.

### 1. Competencia

Competencia e a unidade mensal que congela composicao, valores, cobrancas e status financeiros.

Sem esse conceito, qualquer alteracao cadastral reescreveria o passado e destruiria historico.

### 2. Grupo familiar

Grupo familiar nao e apenas uma forma visual de agrupar pessoas.

Ele e a unidade operacional e financeira da cobranca.

E por ele que o sistema enxerga:

- quem paga
- quem esta atrasado
- quem consome caixa de emergencia
- quem altera a composicao financeira da apolice

### 3. Caixa de emergencia

O caixa de emergencia nao e um detalhe contabil.

Ele e uma reserva da apolice formada pelas faturas tecnicas pagas.

Sua funcao e impedir que a inadimplencia pontual de alguns grupos comprometa a cobertura de todos.

### 4. Auditoria

Mudancas importantes precisam ser auditaveis.

O sistema precisa registrar nao so o estado atual, mas tambem os eventos que explicam como a operacao chegou ate ali.

## O que o produto precisa responder rapidamente

Uma boa tela ou relatorio de Apolia deveria responder com facilidade perguntas como:

- qual e a apolice ativa deste CNPJ
- quais grupos familiares estao ativos
- quem e o titular responsavel de cada grupo
- quanto foi cobrado nesta competencia
- quem esta inadimplente
- quanto do caixa de emergencia esta comprometido
- qual e o risco atual da apolice
- que eventos relevantes aconteceram recentemente

Se o produto nao responder isso com clareza, ele ainda nao esta cumprindo sua funcao principal.

## O que o produto nao deve virar

Alguns desvios precisam ser evitados desde cedo.

Apólia nao deve virar:

- um cadastro sem historico
- uma planilha sofisticada sem regras explicitas
- um sistema que mistura cobranca regular com fatura tecnica
- um sistema que usa dados sensiveis sem necessidade clara
- um motor automatico de bloqueio travestido de analise de risco

## Como usar esta documentacao

Se a pessoa quer entender o produto do zero, a ordem mais eficiente e:

1. `70-guia-humano-do-produto.md`
2. `71-guia-humano-do-dominio.md`
3. `72-guia-humano-da-operacao-financeira.md`
4. `73-guia-humano-de-estados-e-eventos.md`
5. depois voltar para as notas curtas e encadeadas

As notas `70+` explicam.

As notas `00-60` definem.

## Relaciona com

- `00-visao-produto.md`
- `05-mapa-do-dominio.md`
- `07-resumo-mestre-do-dominio.md`

## Depende de

- `03-glossario.md`

## Desdobra em

- `71-guia-humano-do-dominio.md`
- `72-guia-humano-da-operacao-financeira.md`
- `73-guia-humano-de-estados-e-eventos.md`

## Status

- `fechado`
