# Entidade: Beneficiario

Representa a pessoa vinculada ao plano da empresa.

Todo beneficiario:

- pode estar vinculado a uma empresa e a uma apolice por meio de um vinculo historico
- entra com obrigacao de fatura tecnica
- pode gerar risco de inadimplencia
- pode compor a analise de risco da apolice
- possui taxa percentual propria para precificacao comercial
- pode mudar de empresa ao longo do tempo, mantendo historico
- guarda dados pessoais estaveis da pessoa

Regra de vinculo:

- titular e dependente sao papeis do beneficiario
- o papel vigente e definido no vinculo da pessoa com o grupo familiar
- contexto de empresa, apolice, grupo e parentesco e historico por vinculo

Campos principais:

- nome_completo
- documento
- sexo
- telefone
- email
- data_nascimento
- status
- observacoes

Regra de precificacao:

- custo do beneficiario vem da faixa etaria da tabela do plano
- taxa percentual e individual do beneficiario
- valor cobrado e derivado de custo mais taxa
- mudanca de faixa etaria afeta apenas competencias futuras
- sistema deve avisar operador antes da proxima cobranca impactada

## Nao confundir com

- `beneficiario` e a pessoa do dominio
- `titular` e `dependente` sao papeis do beneficiario, nao entidades separadas

## Relaciona com

- `14-entidade-tabela-do-plano.md`
- `12a-entidade-grupo-familiar.md`
- `15-entidade-vinculo-beneficiario.md`
- `13-relacao-titular-dependente.md`
- `25-regra-geracao-cobranca-familiar.md`
- `35-risco-visao-geral.md`

## Depende de

- `10-entidade-empresa.md`
- `10a-entidade-apolice.md`
- `17-invariantes.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `41-entidade-fatura-tecnica.md`
- `50-notificacoes.md`

## Status

- `fechado`
