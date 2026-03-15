# Entidade: Empresa

Representa um CNPJ atendido pela operacao.

Cada empresa:

- possui uma apolice vigente por vez
- possui historico de apolices ao longo do tempo
- possui varios grupos familiares e beneficiarios ao longo do tempo
- possui cobrancas recorrentes por meio da apolice vigente

Campos principais:

- razao_social
- nome_fantasia
- cnpj
- nome_contato_principal
- telefone_contato_principal
- email_contato_principal
- status
- observacoes

Leitura importante:

- plano e numero_apolice nao devem ficar como atributos eternos da empresa
- a empresa aponta para a apolice vigente
- plano, numero_apolice e percentual de comissao devem ser lidos pela vigencia da apolice
- caixa de emergencia nao pertence diretamente ao cadastro da empresa; ele pertence a cada apolice

## Relaciona com

- `10a-entidade-apolice.md`
- `12a-entidade-grupo-familiar.md`
- `11-entidade-plano.md`
- `12-entidade-beneficiario.md`
- `43-entidade-caixa-emergencia.md`

## Depende de

- `00-visao-produto.md`
- `17-invariantes.md`

## Desdobra em

- `16-relacoes-do-dominio.md`
- `40-entidade-cobranca.md`
- `50-notificacoes.md`

## Status

- `fechado`
