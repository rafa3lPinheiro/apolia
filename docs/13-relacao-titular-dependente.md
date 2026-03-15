# Relacao: Titular e Dependente

Essa relacao deve ser simples e explicita.

Modelo recomendado:

- todo titular e um beneficiario
- todo dependente tambem e um beneficiario
- o papel de titular ou dependente e exercido no vinculo com o grupo familiar

Campos:

- papel_no_grupo
- titular_beneficiario_id
- parentesco_com_titular

Regras:

- se o papel no grupo for `titular`, `titular_beneficiario_id` deve ser vazio
- se o papel no grupo for `dependente`, `titular_beneficiario_id` deve ser obrigatorio
- parentesco deve ficar no vinculo do dependente com o grupo, nao no cadastro puro da pessoa
- titular e dependente devem pertencer a mesma apolice vigente na competencia
- titular e dependente devem pertencer ao mesmo grupo familiar vigente na competencia

Motivo da escolha:

- e o modelo mais simples de consultar
- evita criar tabela separada para dependente
- facilita cobranca, auditoria e filtro

Leitura pratica:

- titular = raiz do grupo familiar
- dependentes = beneficiarios ligados a essa raiz
- mudancas de dependente entre titulares precisam preservar historico sequencial para auditoria
- a troca so passa a valer na proxima competencia

## Relaciona com

- `12-entidade-beneficiario.md`
- `12a-entidade-grupo-familiar.md`
- `15-entidade-vinculo-beneficiario.md`
- `16-relacoes-do-dominio.md`
- `61-queries-e-indices.md`

## Depende de

- `17-invariantes.md`

## Desdobra em

- `23-cobranca-composicao-familiar.md`
- `25-regra-geracao-cobranca-familiar.md`

## Status

- `fechado`
