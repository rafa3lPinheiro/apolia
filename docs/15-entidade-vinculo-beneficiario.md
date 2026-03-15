# Entidade: Vinculo do Beneficiario

Objetivo:

- representar o historico temporal de pertencimento do beneficiario a empresa, apolice e grupo familiar
- permitir transicao entre CNPJs sem perder historico

## Direcao atual

- beneficiario pode transitar entre CNPJs ao longo do tempo
- beneficiario so pode pertencer a um CNPJ por vez
- mudanca de empresa deve encerrar um vinculo e iniciar outro
- taxa percentual e contexto comercial devem acompanhar o vinculo vigente
- papel no grupo e parentesco devem acompanhar o vinculo vigente

## Campos principais

- beneficiario_id
- empresa_id
- apolice_id
- grupo_familiar_id
- plano_id
- titular_beneficiario_id
- papel_no_grupo
- parentesco_com_titular
- taxa_percentual
- competencia_inicial
- competencia_final
- motivo_transicao
- ativo

## Regras

- um beneficiario nunca pode ter dois vinculos ativos ao mesmo tempo
- dependente deve apontar para titular valido dentro da mesma apolice e do mesmo grupo na competencia
- historico de vinculo nao deve apagar empresa ou plano anteriores
- cobrancas passadas devem continuar apontando para o contexto vigente na competencia
- mudanca de composicao que altere impacto financeiro so produz efeito, por padrao, na proxima competencia

## Nao confundir com

- `beneficiario` e a pessoa do dominio
- `vinculo do beneficiario` e o contexto temporal dessa pessoa dentro de empresa e plano

## Relaciona com

- `12-entidade-beneficiario.md`
- `12a-entidade-grupo-familiar.md`
- `13-relacao-titular-dependente.md`
- `40-entidade-cobranca.md`

## Depende de

- `10-entidade-empresa.md`
- `10a-entidade-apolice.md`
- `11-entidade-plano.md`

## Desdobra em

- `19-fluxos-textuais.md`
- `18-estados-do-sistema.md`
- `61-queries-e-indices.md`

## Status

- `fechado`
