# Entidade: Apolice

Representa o contrato comercial vigente de um CNPJ com uma operadora em um periodo.

A apolice deve existir como entidade propria para separar:

- identidade contratual
- vigencia contratual
- plano contratado naquela vigencia
- regras comerciais daquela vigencia

Cada apolice:

- pertence a uma empresa
- possui um numero_apolice proprio
- possui vigencia_inicio e vigencia_fim
- pode ser renovada ou substituida ao fim do ciclo
- pode implicar mudanca de plano entre uma vigencia e outra
- possui percentual de comissao de corretagem proprio
- possui data de implantacao propria
- funciona como conta unica para todos os grupos familiares vinculados ao CNPJ
- possui um dia mensal unificado para cobrancas regulares
- possui um caixa de emergencia proprio

Leitura operacional:

- um CNPJ nao deve apontar apenas para um plano fixo
- um CNPJ possui historico de apolices ao longo do tempo
- a apolice vigente define o plano e as regras comerciais da competencia
- troca de apolice nao pode sobrescrever o passado
- um CNPJ pode ter apenas uma apolice ativa por vez
- a apolice pode ter mais de 12 meses, mas nunca menos
- na renovacao a apolice pode ser estendida; se houver nova contratacao ou troca material de plano, cria-se nova apolice
- a comissao do corretor e evento de venda e sua base de calculo e o custo, nao a cotacao

Campos principais:

- empresa_id
- numero_apolice
- plano_id
- operadora
- vigencia_inicio
- vigencia_fim
- implantacao_em
- dia_vencimento_padrao
- status
- tipo_transicao
- percentual_comissao_corretor
- observacoes

## Relaciona com

- `10-entidade-empresa.md`
- `11-entidade-plano.md`
- `12a-entidade-grupo-familiar.md`
- `43-entidade-caixa-emergencia.md`
- `20-cobranca-visao-geral.md`

## Depende de

- `16-relacoes-do-dominio.md`
- `17-invariantes.md`

## Desdobra em

- `21-cobranca-recorrencia.md`
- `40-entidade-cobranca.md`

## Status

- `fechado`
