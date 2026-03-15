# Entidade: Grupo Familiar

Representa a unidade operacional e financeira da apolice.

Um grupo familiar pode ser composto por:

- um titular sem dependentes
- um titular com um ou mais dependentes

Cada grupo familiar:

- pertence a uma unica apolice por vez
- possui exatamente um titular vigente
- pode possuir zero ou muitos dependentes vigentes
- e a unidade de cobranca mensal
- e a unidade de acompanhamento de inadimplencia
- pode consumir ou recompor caixa de emergencia

Campos principais:

- apolice_id
- titular_beneficiario_id
- status
- competencia_entrada
- competencia_saida
- observacoes

Leitura operacional:

- o titular e o responsavel financeiro do grupo
- troca de titular dentro do mesmo grupo nao muda a composicao coberta, mas muda a responsabilidade financeira
- movimentacoes que alteram composicao financeira do grupo passam a valer, por padrao, apenas na proxima competencia
- dependentes podem migrar entre grupos familiares da mesma apolice com historico auditavel

Estados sugeridos:

- pre_cadastro
- aguardando_documentacao
- em_implantacao
- ativo
- inadimplente
- em_caixa_de_emergencia
- cancelado
- negado
- encerrado

Transicoes validas sugeridas:

- pre_cadastro -> aguardando_documentacao
- aguardando_documentacao -> em_implantacao
- em_implantacao -> ativo
- em_implantacao -> negado
- ativo -> inadimplente
- inadimplente -> em_caixa_de_emergencia
- em_caixa_de_emergencia -> ativo
- em_caixa_de_emergencia -> cancelado
- ativo -> cancelado
- ativo -> encerrado

## Relaciona com

- `10a-entidade-apolice.md`
- `12-entidade-beneficiario.md`
- `15-entidade-vinculo-beneficiario.md`
- `20-cobranca-visao-geral.md`
- `43-entidade-caixa-emergencia.md`

## Depende de

- `17-invariantes.md`
- `18-estados-do-sistema.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `23-cobranca-composicao-familiar.md`
- `25-regra-geracao-cobranca-familiar.md`

## Status

- `fechado`
