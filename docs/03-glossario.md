# Glossario

## Empresa

CNPJ atendido pela operacao.

No dominio atual, `empresa` e a entidade raiz contratante.

Um mesmo CNPJ pode ter varias apolices no historico, mas apenas uma apolice ativa por vez.

## Plano

Plano de saude vinculado a uma empresa.

Na versao atual, cada empresa possui um unico plano.

## Tabela do Plano

Tabela comercial do plano cadastrada no sistema.

Ela guarda as faixas etarias e o custo base da operadora para cada faixa.

## Faixa Etaria

Intervalo de idade usado para precificacao do plano.

Exemplo:

- 0 a 18
- 19 a 23
- 24 a 28

## Vigencia

Periodo em que uma regra, taxa, tabela ou vinculo vale oficialmente.

Serve para preservar historico e impedir recalcule retroativo indevido.

Na apolice, a vigencia pode ser estendida e nunca deve ser menor que 12 meses.

## Implantacao

Marco operacional que ativa a apolice.

No dominio atual, a implantacao acontece a partir do pagamento do mes 2.

Ela sucede o envio da documentacao dos beneficiarios e a emissao do boleto pela operadora.

## Competencia

Mes de referencia economica e contratual da cobranca regular da apolice.

A competencia mensal regular comeca na implantacao.

Fatura tecnica nao segue a mesma cadencia da competencia mensal.

## Numero da Apolice

Identificador da apolice da empresa.

No sistema atual, pertence a apolice, nao ao cadastro fixo da empresa.

## Apolice

Contrato operacional e comercial vigente de um CNPJ com a operadora.

Funciona como a obrigacao macro do CNPJ com a operadora.

Cada nova apolice cria um novo ciclo contratual e um novo caixa de emergencia.

## Beneficiario

Pessoa vinculada ao plano da empresa.

Pode ser titular ou dependente.

Guarda dados pessoais estaveis da pessoa, como sexo e data de nascimento.

## Titular

Beneficiario principal do grupo familiar.

E o responsavel principal pela cobranca familiar.

## Dependente

Beneficiario ligado a um titular.

Seu valor compoe a cobranca do titular.

Dependente pode mudar de titular, mas essa mudanca so vale a partir da proxima competencia e precisa manter historico auditavel.

## Grupo Familiar

Unidade operacional formada por titular e seus dependentes.

E a estrutura usada para leitura comercial, composicao de cobranca, fatura tecnica de entrada e historico de mudancas familiares.

Tambem e a unidade de acompanhamento de inadimplencia e de uso do caixa de emergencia.

## Cobranca

Registro financeiro de uma competencia mensal regular da apolice.

Ela e diferente da fatura tecnica, embora os valores possam coincidir no fluxo normal.

## Taxa

Percentual comercial aplicado sobre o custo do plano de um beneficiario.

Essa taxa pertence ao beneficiario e representa a margem mensal da operacao.

## Custo

Valor base do plano cobrado pela operadora conforme a faixa etaria.

## Valor Cobrado

Valor final do beneficiario.

E calculado pela soma de:

- custo do plano
- valor da taxa

## Cotacao

Soma do valor cobrado do titular com o valor cobrado dos dependentes.

Serve como leitura comercial do grupo familiar e pode virar snapshot mensal.

## Vinculo do Beneficiario

Historico do contexto do beneficiario dentro de empresa, plano e grupo familiar.

Permite que a mesma pessoa transite entre CNPJs sem perder historico.

Tambem guarda o papel da pessoa no grupo, a relacao de parentesco com o titular e a vigencia desse contexto.

## Margem

Valor monetario da taxa aplicada.

Na leitura atual, margem operacional mensal vem da taxa cobrada sobre cada beneficiario.

## Comissao do Corretor

Valor comercial pago ao corretor apenas no momento da venda.

Sua base de calculo e o custo do plano, nao a cotacao.

Ela fica registrada na apolice e nao e recorrente mensal.

## Mensalidade

Cobranca recorrente do ciclo normal do plano.

## Fatura Tecnica

Lancamento de entrada obrigatorio para novas adesoes e implantacao.

Em regra, tem o mesmo valor da cobranca mensal cotada do grupo familiar ou do dependente adicionado.

Pode ser paga em qualquer dia do mes.

Seu pagamento alimenta o caixa de emergencia.

Nao faz parte da cadencia mensal regular de cobrancas.

## Caixa de Emergencia

Reserva financeira da apolice.

E formada pelos valores pagos nas faturas tecnicas.

Pode ser usada para cobrir atraso de grupo familiar sem interromper a cobertura coletiva.

Quando o caixa cobre uma competencia e o grupo paga depois, esse pagamento recompõe o proprio caixa.

Ao fim da vigencia, o saldo remanescente e direcionado ao corretor.

## Movimento do Caixa

Registro de entrada, saida ou ajuste do caixa de emergencia.

## Evento Auditavel

Registro operacional relevante do dominio.

Deve guardar autor, data, entidade afetada, competencia relacionada quando existir, e motivo nos casos criticos.

## Analise de Risco

Leitura da composicao da apolice a partir dos beneficiarios.

Serve como apoio de decisao.

## Relaciona com

- `05-mapa-do-dominio.md`
- `10-entidade-empresa.md`
- `10a-entidade-apolice.md`
- `12a-entidade-grupo-familiar.md`
- `40-entidade-cobranca.md`

## Desdobra em

- `14-entidade-tabela-do-plano.md`
- `35-risco-visao-geral.md`
- `41-entidade-fatura-tecnica.md`
- `43-entidade-caixa-emergencia.md`
- `18-estados-do-sistema.md`

## Status

- `fechado`
