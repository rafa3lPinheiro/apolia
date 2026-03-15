# Guia Humano do Dominio

Objetivo:

- explicar as entidades do dominio em linguagem humana
- deixar claro o papel de cada conceito principal
- reduzir ambiguidade antes de leitura tecnica de schema ou regras

## O ponto de partida: o CNPJ

No dominio atual, tudo comeca no CNPJ.

O CNPJ e a entidade contratante.

Ele pode ter varias apolices ao longo do historico, mas apenas uma ativa por vez.

Essa decisao organiza o restante do modelo:

- o cadastro principal e do CNPJ
- a apolice e lida como ciclo contratual daquele CNPJ
- grupos familiares, cobrancas e caixa existem dentro desse ciclo

## O que e a apolice

A apolice e o contrato operacional vigente do CNPJ com a operadora.

Ela concentra:

- vigencia
- plano contratado
- numero da apolice
- regras comerciais da fase atual
- dia de vencimento regular
- caixa de emergencia associado

Ela funciona como a conta unica do contrato coletivo.

Por isso, se a apolice falha financeiramente, o risco e coletivo.

## O que e o grupo familiar

Grupo familiar e o conceito que mais precisa ser entendido corretamente.

Ele nao e apenas uma arvore visual de titular e dependentes.

Ele e a unidade operacional e financeira da apolice.

Isso significa que o grupo familiar e a menor unidade relevante para:

- cobranca
- inadimplencia
- uso do caixa
- troca de titular
- movimentacao de dependentes

Um grupo familiar pode ser:

- um titular sozinho
- um titular com dependentes

O titular e sempre o responsavel financeiro do grupo.

## O que e o beneficiario

Beneficiario e a pessoa do dominio.

Ela pode exercer dois papeis:

- titular
- dependente

Mas esses papeis nao deveriam contaminar o cadastro base da pessoa mais do que o necessario.

O cadastro base guarda a identidade da pessoa.

O contexto contratual e operacional da pessoa fica no vinculo.

## O que e o vinculo do beneficiario

Vinculo e o contexto temporal do beneficiario dentro do sistema.

Ele responde perguntas que o cadastro puro nao responde:

- em qual empresa essa pessoa esta
- em qual apolice
- em qual grupo familiar
- com qual papel
- com qual parentesco em relacao ao titular
- com qual taxa comercial
- em quais competencias esse contexto vale

Sem essa separacao, a modelagem ficaria fraca para historico e auditoria.

## Titular e dependente

Titular e dependente nao devem ser tratados como entidades diferentes.

Ambos sao beneficiarios.

O que muda e o papel exercido no grupo familiar.

O titular:

- ancora o grupo
- responde financeiramente pelo grupo
- centraliza a cobranca daquele grupo

O dependente:

- compoe o grupo
- influencia custo, cotacao e cobranca
- pode mudar de grupo com historico preservado

## O que e competencia

Competencia e o eixo temporal mais importante do produto.

Ela e a unidade mensal que congela:

- quem compoe o grupo
- quanto cada pessoa custa
- quanto foi cobrado
- qual era o status financeiro daquela cobranca

Se uma mudanca acontece depois do fechamento da competencia, ela nao reescreve o passado.

Em regra, ela produz efeito na proxima competencia.

## O que e cobranca

Cobranca e o snapshot financeiro regular de uma competencia.

Ela deve permitir responder:

- quanto foi cobrado do grupo
- como esse valor foi composto
- qual parte era custo
- qual parte era margem
- se houve pro-rata
- se houve ajuste

Ela nao deve ser confundida com fatura tecnica.

## O que e fatura tecnica

Fatura tecnica e a cobranca de entrada.

Ela aparece quando:

- um grupo familiar novo entra
- um dependente novo entra

Ela nao segue a mesma cadencia da cobranca mensal.

Seu pagamento alimenta o caixa de emergencia da apolice.

## O que e caixa de emergencia

Caixa de emergencia e a reserva da apolice.

Ele existe porque a apolice e coletiva.

Se alguns grupos deixam de pagar, o contrato como um todo pode entrar em risco.

O caixa serve para absorver esse atraso sem interromper o plano de todo mundo.

Importante:

- ele pertence a apolice
- ele e formado pelas faturas tecnicas
- ele pode ser consumido para cobrir atraso
- ele deve ser recomposto quando o grupo pagar o que devia

## O que e risco no contexto de Apolia

Risco aqui nao e diagnostico clinico.

Risco e leitura operacional.

Ele tenta responder algo como:

- esta apolice esta segura ou fragilizada
- esse caixa suporta novos atrasos
- essa composicao esta mais exposta

Ele deve ajudar o operador e o stakeholder a decidir, nao bloquear automaticamente o sistema.

## Relaciona com

- `03-glossario.md`
- `16-relacoes-do-dominio.md`
- `17-invariantes.md`

## Depende de

- `07-resumo-mestre-do-dominio.md`

## Desdobra em

- `72-guia-humano-da-operacao-financeira.md`
- `73-guia-humano-de-estados-e-eventos.md`

## Status

- `fechado`
