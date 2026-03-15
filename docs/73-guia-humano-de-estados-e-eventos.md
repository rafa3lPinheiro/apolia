# Guia Humano de Estados e Eventos

Objetivo:

- explicar por que estados e eventos importam no produto
- mostrar como eles ajudam controle, auditoria e metricas
- evitar que status virem apenas etiquetas visuais

## Por que estados importam

Em Apolia, estado nao e enfeite.

Estado define em que momento operacional uma entidade esta.

Quando um estado muda, algo relevante aconteceu:

- uma implantacao andou
- uma cobranca venceu
- um grupo entrou em caixa de emergencia
- uma entrada foi negada

Se os estados forem mal definidos, o sistema fica bonito por fora e confuso por dentro.

## Estados de apolice

Os estados da apolice ajudam a explicar a saude do contrato como um todo.

Eles permitem distinguir, por exemplo:

- uma apolice em implantacao
- uma apolice ativa
- uma apolice com pendencias
- uma apolice inadimplente
- uma apolice suspensa
- uma apolice encerrada

Isso e importante porque o stakeholder nao quer apenas ver pessoas cadastradas.

Ele quer entender em que situacao contratual o negocio esta.

## Estados de grupo familiar

Os estados de grupo familiar sao ainda mais operacionais.

Eles mostram onde cada unidade de cobranca esta no fluxo.

Exemplos importantes:

- pre-cadastro
- aguardando documentacao
- em implantacao
- ativo
- inadimplente
- em caixa de emergencia
- cancelado
- negado
- encerrado

Esses estados ajudam a separar:

- quem esta entrando
- quem esta vigente
- quem esta atrasado
- quem precisou de cobertura da reserva
- quem saiu do contrato

## Estados de beneficiario

Os estados do beneficiario devem ajudar a entender a situacao da pessoa, nao da apolice inteira.

Exemplos:

- pre-cadastrado
- aguardando implantacao
- ativo
- pendente documental
- excluido
- negado

Esse nivel e util porque uma pessoa pode estar regular ou irregular mesmo quando a apolice e o grupo estao em outra situacao.

## O que sao transicoes validas

Transicao valida e um caminho que o sistema aceita entre um estado e outro.

Exemplo simples:

- `em implantacao -> ativo` faz sentido
- `negado -> ativo` sem novo processo nao faz sentido

Quando as transicoes sao definidas, o sistema deixa de depender apenas de “bom senso do operador”.

Ele passa a carregar regras.

## Por que eventos auditaveis importam

Eventos auditaveis explicam a historia do sistema.

O estado diz onde a entidade esta.

O evento diz o que aconteceu para ela chegar ali.

Exemplos de eventos criticos:

- implantacao iniciada
- implantacao concluida
- troca de titular
- dependente movido entre grupos
- cobranca emitida
- pagamento registrado
- caixa utilizado
- caixa recomposto
- cancelamento
- negacao
- ajuste manual relevante

## O que um evento deveria guardar

Um bom evento auditavel deveria guardar:

- entidade afetada
- tipo de evento
- data e hora
- autor
- competencia relacionada, quando existir
- motivo, quando o evento for critico
- antes e depois, quando houver mudanca relevante

Isso nao e excesso.

Isso e o que torna o sistema confiavel para operacao e metrico para o stakeholder.

## Como estados e eventos trabalham juntos

O modelo mais forte e este:

- estado mostra situacao atual
- evento mostra historico de transicoes

Sem estados, a interface fica sem semantica.

Sem eventos, o historico vira caixa-preta.

Sem os dois, o produto nao sustenta controle.

## Relaciona com

- `18-estados-do-sistema.md`
- `19-fluxos-textuais.md`
- `43-entidade-caixa-emergencia.md`

## Depende de

- `17-invariantes.md`

## Desdobra em

- futura documentacao de eventos auditaveis
- futura modelagem de trilha operacional

## Status

- `fechado`
