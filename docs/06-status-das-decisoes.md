# Status das Decisoes

Objetivo:

- separar o que ja pode guiar implementacao do que ainda depende de definicao
- evitar que IA ou humano tratem hipotese como regra fechada

## Fechado

Esses pontos ja possuem direcao suficientemente clara para orientar modelagem inicial.

- o sistema e web e interno
- o usuario principal e o operador interno
- por enquanto nao existe diferenciacao real de permissao entre usuarios
- cada empresa possui um unico plano na versao atual
- empresa e identificada por CNPJ
- um CNPJ pode ter varias apolices no historico, mas apenas uma ativa por vez
- a hierarquia principal do dominio e `CNPJ -> apolice -> grupos familiares -> vinculos de beneficiarios -> beneficiarios`
- cada plano possui uma unica tabela de custo por faixa etaria na versao atual
- grupo familiar e unidade operacional e financeira do sistema
- titular e o responsavel financeiro do grupo familiar
- beneficiario e entidade unica, enquanto titular e dependente sao papeis exercidos por meio do vinculo no grupo
- beneficiario guarda sua propria taxa percentual comercial
- beneficiario pode transitar entre CNPJs, mas so pode ter um vinculo ativo por vez
- dependente sempre aponta para um titular da mesma empresa e da mesma apolice vigente
- cobranca mensal familiar nasce do titular
- competencia e a unidade mensal de referencia que congela composicao, valores e status financeiros
- custo vem da tabela do plano e nao de um valor base unico do plano
- valor cobrado do beneficiario e derivado de custo mais taxa
- cotacao familiar pode virar snapshot mensal
- cobranca precisa guardar `valor_original` e `valor_atual`
- composicao da cobranca nao pode ficar oculta
- item de cobranca e necessario para auditoria
- entrada de beneficiario gera fatura tecnica
- pagamento da fatura tecnica alimenta o caixa de emergencia
- caixa de emergencia pertence a apolice, nao ao beneficiario nem ao CNPJ como saldo solto
- quando o caixa cobre a obrigacao de um grupo e esse grupo paga depois, o valor recompõe o caixa
- uso e retorno do caixa precisam virar movimento registrado
- eventos criticos do dominio precisam ser auditaveis
- WhatsApp e o canal principal de notificacao
- risco e apoio de decisao, nao bloqueio automatico
- no MVP, risco deve usar o menor conjunto sensato de dados
- derivacao deve ser preferida ao armazenamento de rotulos sensiveis
- mudanca de faixa etaria afeta apenas competencias futuras
- sistema deve avisar o operador antes da proxima cobranca impactada por mudanca de faixa

Notas relacionadas:

- `00-visao-produto.md`
- `01-escopo.md`
- `12-entidade-beneficiario.md`
- `12a-entidade-grupo-familiar.md`
- `14-entidade-tabela-do-plano.md`
- `15-entidade-vinculo-beneficiario.md`
- `17-invariantes.md`
- `24-entidade-cobranca-item.md`
- `30-fatura-tecnica-visao-geral.md`
- `50-notificacoes.md`
- `63-regra-derivacao-de-risco.md`
- `64-regra-mvp-risco.md`

## Provisorio

Esses pontos possuem direcao, mas ainda pedem refinamento antes de consolidar.

- estados de apolice, grupo familiar e beneficiario ainda precisam de regra detalhada de transicao
- estados de cobranca e fatura tecnica ainda estao em nivel sugerido
- risco ja tem categorias sugeridas, mas o recorte final do MVP ainda nao esta fechado
- dados sensiveis devem ter protecao reforcada, mas a politica concreta ainda nao esta toda detalhada
- a documentacao aponta para uma entidade `analise de risco`, mas ela ainda nao foi especificada

Notas relacionadas:

- `18-estados-do-sistema.md`
- `35-risco-visao-geral.md`
- `36-risco-categorias.md`
- `38-risco-dados-sensiveis.md`
- `39-risco-lgpd-governanca.md`
- `44-entidade-analise-risco.md`

## Aberto

Esses pontos ainda nao devem ser tratados como decisao fechada de produto ou modelagem.

- cobranca mensal sera registrada por beneficiario, por grupo familiar, ou dos dois jeitos
- quando a cobranca vira vencida: por data ou por acao manual
- grupo familiar pode ser encerrado ou cancelado com valor de caixa ainda comprometido
- envio de WhatsApp sera imediato, em fila, ou ambos
- quais categorias de risco serao realmente exibidas no MVP
- quais dados sensiveis serao armazenados de forma estruturada
- quais campos sensiveis exigem permissao reforcada

Fonte principal:

- `90-duvidas-abertas.md`

## Regra de uso

Ao criar ou atualizar uma nota:

- se a regra estiver fechada, marcar como `fechado`
- se existir direcao sem decisao final, marcar como `provisorio`
- se depender de validacao de negocio, marcar como `aberto`

Quando um item sair de `aberto` para `fechado`:

- atualizar a nota final do tema
- remover ou ajustar a entrada em `90-duvidas-abertas.md`
- manter este arquivo coerente com a decisao mais recente

## Relaciona com

- `04-arquitetura-da-documentacao.md`
- `05-mapa-do-dominio.md`
- `90-duvidas-abertas.md`

## Status

- `provisorio`
