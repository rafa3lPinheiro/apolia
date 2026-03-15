# Resumo Mestre do Dominio

Este arquivo resume as regras centrais ja fechadas do dominio de Apolia.

Ele existe para acelerar onboarding, revisao de modelagem e alinhamento com stakeholder.

## Estrutura principal

- `empresa` representa o CNPJ atendido pela operacao e e a raiz contratante
- `apolice` representa o contrato comercial vigente daquele CNPJ com a operadora
- `grupo familiar` representa titular e seus dependentes
- `vinculo do beneficiario` representa o contexto temporal da pessoa dentro da apolice e do grupo
- `beneficiario` representa cada pessoa vinculada ao plano

## Apolice

- a apolice funciona como uma conta unica do CNPJ
- um CNPJ pode ter varias apolices no historico, mas apenas uma ativa por vez
- todos os grupos familiares vinculados a uma apolice seguem o mesmo dia de pagamento mensal
- a apolice pode ter mais de 12 meses, mas nunca menos
- na renovacao, a apolice pode ser estendida; se houver troca real de contratacao ou plano, cria-se nova apolice
- a apolice guarda o percentual de comissao do corretor

## Implantacao e vigencia

- o marco operacional principal e a `implantacao`
- a implantacao acontece a partir do pagamento do mes 2
- antes disso, ocorre envio de documentacao e emissao do boleto de implantacao pela operadora
- a operadora pode levar ate 7 dias uteis para emitir esse boleto
- o boleto de implantacao pode ter prazo de ate 60 dias para pagamento
- a partir da implantacao comeca a competencia 1 da apolice ativa

## Fatura tecnica

- a fatura tecnica e obrigatoria para entrada
- sem fatura tecnica nao existe contratacao
- ela nao segue a mesma cadencia da cobranca mensal
- pode ser paga em qualquer dia do mes
- em regra, tem o mesmo valor da cobranca mensal cotada do grupo familiar ou do dependente adicionado
- o valor pago entra no caixa de emergencia
- se a operadora reprovar uma vida, o valor correspondente da fatura tecnica deve ser devolvido integralmente
- se um dependente sair depois, a fatura tecnica nao e devolvida
- eventual sobra vinculada a saida de dependente pode ser repassada imediatamente ao corretor
- ao fim da vigencia, o saldo remanescente do caixa vai integralmente para o corretor

## Cobranca mensal

- cobranca e fatura tecnica sao conceitos diferentes, embora possam ter o mesmo valor no fluxo normal
- a cobranca mensal regular so existe apos a implantacao
- as cobrancas mensais sao fixas
- cada cobranca precisa preservar snapshot da competencia
- alteracoes de tabela, taxa, faixa etaria e composicao nao podem reescrever o passado

## Competencia

- competencia e o mes de referencia economica e contratual da cobranca regular
- competencia e a unidade mensal que congela composicao, valores, cobrancas e status financeiros da apolice e dos grupos familiares
- a competencia mensal comeca na implantacao
- a fatura tecnica fica fora da cadencia mensal regular

## Grupo familiar

- grupo familiar e a unidade oficial formada por titular e dependentes
- titular e a raiz do grupo familiar
- titular e o responsavel financeiro do grupo
- dependentes podem mudar de titular
- a mudanca de dependente entre titulares so vale a partir da proxima competencia
- essa mudanca precisa manter historico sequencial por auditoria
- a entrada e saida pode acontecer no nivel do dependente individual
- troca de titular dentro do mesmo grupo muda a responsabilidade financeira, mas nao reescreve a competencia ja fechada

## Entrada de novos grupos e dependentes

- quando um novo grupo familiar entra, segue o fluxo de fatura tecnica e implantacao
- quando um dependente e adicionado, deve pagar fatura tecnica apenas no valor dele
- se um beneficiario ou grupo familiar entrar apos o pagamento mensal da apolice, paga fatura tecnica e ativa apenas na competencia seguinte
- em situacoes excepcionais, pode haver uso antes da proxima competencia
- nesses casos, no vencimento seguinte, deve ser cobrado o valor da competencia mais o valor proporcional de uso
- esse proporcional e calculado por `pro-rata` com base em dias corridos
- o pro-rata pode vir junto da cobranca, mas precisa ficar identificado

## Custo, taxa, cotacao e margem

- `custo` e o valor da tabela da operadora por faixa etaria
- `taxa do beneficiario` e um percentual aplicado sobre o custo
- a taxa pertence ao beneficiario e pode variar individualmente
- `valor cotado` e o custo com a taxa aplicada
- `cotacao` e a soma dos valores cotados do grupo familiar
- `margem` e a diferenca entre cotacao e custo

## Comissao do corretor

- a comissao do corretor e separada da taxa do beneficiario
- a comissao nao e mensal
- ela acontece apenas na venda
- a base de calculo da comissao e o `custo`, nao a `cotacao`
- a comissao fica registrada na apolice

## Caixa de emergencia

- o caixa de emergencia e formado pelas faturas tecnicas
- ele pertence a apolice
- ele existe para proteger a apolice contra inadimplencia dentro do contrato coletivo
- se alguem nao pagar, o valor total da apolice pode ficar descoberto
- o caixa pode ser usado para cobrir esse tipo de atraso
- quando o grupo paga a competencia que havia sido coberta pelo caixa, o valor volta para o proprio caixa
- se a apolice terminar sem renovacao, o saldo remanescente vai para o corretor
- saida de saldo relacionada a grupo familiar pode ir para o corretor apenas se nao puser a apolice em risco

## Planilha operacional

A leitura operacional atual do stakeholder e:

- coluna da operadora = custo
- coluna individual = valor cotado por beneficiario
- coluna cotacao = soma dos valores cotados
- custo total = soma dos custos
- margem = cotacao total menos custo total

## Regras de historico

- beneficiarios podem transitar entre CNPJs ao longo do tempo
- tabela do plano, taxa do beneficiario, composicao do grupo familiar e regras da apolice devem respeitar vigencia
- snapshots mensais devem preservar o que estava valido na competencia

## Relaciona com

- `03-glossario.md`
- `10a-entidade-apolice.md`
- `12a-entidade-grupo-familiar.md`
- `20-cobranca-visao-geral.md`
- `30-fatura-tecnica-visao-geral.md`

## Status

- `fechado`
