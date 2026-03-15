# Apolia

Nome oficial do produto.

Este repositorio abriga o sistema e a documentacao central do produto.

`docs/` e a fonte de verdade do produto, do dominio e das regras tecnicas.

Para leitura humana e onboarding rapido, a camada narrativa comeca em:

- `docs/70-guia-humano-do-produto.md`
- `docs/71-guia-humano-do-dominio.md`
- `docs/72-guia-humano-da-operacao-financeira.md`
- `docs/73-guia-humano-de-estados-e-eventos.md`
- `docs/74-modelo-conceitual-humano.md`
- `docs/75-modelo-logico-inicial.md`
- `docs/76-analise-da-stack-e-monorepo.md`
- `docs/77-desenho-inicial-do-monorepo.md`
- `docs/78-revisao-da-milestone-0.md`

## O que e Apolia

Apolia e um sistema interno para operacao administrativa de planos de saude empresariais.

Seu foco esta em:

- organizar empresas e apolices
- manter beneficiarios e seus vinculos historicos
- calcular cotacao, cobranca, custo e margem
- controlar fatura tecnica e caixa de emergencia
- apoiar notificacoes e leitura operacional de risco

## Inspiracao do nome

`Apolia` nasce da palavra `apolice`.

A escolha foi feita porque a apolice esta no centro da operacao:

- cada empresa entra no sistema a partir de seu contexto contratual
- beneficiarios, cobranca, risco e reserva se organizam em torno desse contexto
- o nome remete diretamente ao dominio sem ficar generico demais

Apolia foi escolhido para transmitir:

- proximidade com o negocio
- clareza de dominio
- identidade propria de produto
- sonoridade simples e memoravel

## Processo de naming

O processo de naming buscou um nome:

- relacionado ao dominio real do sistema
- humano o suficiente para soar proximo
- forte o suficiente para uso B2B
- distinto o suficiente para nao parecer um nome generico de categoria

Direcoes consideradas:

- nomes descritivos demais, como administradores de plano, foram descartados por serem fracos como marca
- nomes abstratos demais tambem foram evitados para nao perder ligacao com o dominio
- nomes que transmitissem protecao, operacao, vinculo, apolice e organizacao foram priorizados

Entre os nomes avaliados, `Apolia` se destacou por:

- conectar diretamente com `apolice`
- manter boa pronuncia e memorizacao
- soar como produto e nao como modulo interno
- funcionar bem para o contexto B2B sem ficar frio demais

Outros nomes avaliados durante o processo:

- `Amparo`
- `Lastro`
- `Claria`
- `Nexa`

## Decisao de naming

Nome escolhido:

- `Apolia`

Motivo final da escolha:

- melhor equilibrio entre aderencia ao dominio, personalidade de produto e postura B2B

Observacao:

- o nome do repositorio ainda pode permanecer temporariamente como `health-plan-admin` por questao tecnica, mas o nome do produto passa a ser `Apolia`
