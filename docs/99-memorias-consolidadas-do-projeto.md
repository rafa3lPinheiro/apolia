# Memórias Consolidadas do Projeto

## Objetivo

Este documento materializa, dentro do repositório, as memórias relevantes do projeto `Apolia` que estavam registradas no MCP da Lola. A intenção é reduzir dependência de memória persistente como fonte primária e transformar essas decisões em documentação versionável.

Este arquivo nao substitui a estrutura principal de `docs`. Ele funciona como inventario historico de recuperacao de contexto. A fonte principal de verdade continua sendo a arvore numerada existente na raiz de `docs`.

Data da consolidação: 2026-03-16

## Escopo desta consolidação

- Inclui memórias cross-project ligadas ao nome oficial `Apolia` quando claramente pertencem ao mesmo produto.
- Preserva o ID original da memória para rastreabilidade.
- O texto abaixo prioriza fidelidade semântica. Em alguns casos, a memória original estava truncada nas consultas; nesses casos, o conteúdo foi consolidado sem alterar o sentido da decisão.

## Leitura rápida

- O nome oficial do produto é `Apolia`.
- O projeto ainda estava em fase de planejamento quando essas memórias foram registradas.
- A pasta `docs` foi definida como fonte de verdade para produto, domínio e regras técnicas.
- O domínio gira em torno de CNPJ, apólice, grupos familiares, beneficiários, cobrança recorrente, fatura técnica, caixa de emergência, inadimplência, risco e LGPD.

## Onde isso ja esta encaixado na documentacao principal

- produto e contexto: `00-visao-produto.md`, `01-escopo.md`, `05-mapa-do-dominio.md`
- identidade de produto e nome Apolia: `00-visao-produto.md`, `03-glossario.md`, `06-status-das-decisoes.md`
- estrutura contratual: `10-entidade-empresa.md`, `10a-entidade-apolice.md`, `12a-entidade-grupo-familiar.md`, `15-entidade-vinculo-beneficiario.md`, `16-relacoes-do-dominio.md`, `17-invariantes.md`
- precificacao e cobranca: `20-cobranca-visao-geral.md`, `23-cobranca-composicao-familiar.md`, `25-regra-geracao-cobranca-familiar.md`, `26-regras-de-calculo-comercial.md`, `40-entidade-cobranca.md`
- fatura tecnica e caixa: `30-fatura-tecnica-visao-geral.md`, `31-fatura-tecnica-formacao-caixa.md`, `32-fatura-tecnica-uso-caixa.md`, `33-fatura-tecnica-reposicao.md`, `41-entidade-fatura-tecnica.md`, `42-entidade-movimento-reserva.md`, `43-entidade-caixa-emergencia.md`
- arquitetura e fundacao tecnica: `76-analise-da-stack-e-monorepo.md`, `77-desenho-inicial-do-monorepo.md`, `78-revisao-da-milestone-0.md`
- governanca documental: `04-arquitetura-da-documentacao.md`, `06-status-das-decisoes.md`

## Inventário consolidado de memórias

### [ID 19] Contexto geral do produto

Categoria: `knowledge`

O projeto `Apolia`, ainda em fase inicial de planejamento, usava a pasta `docs` como fonte de verdade do produto, do domínio e das regras técnicas. O sistema foi concebido como um web app interno para operação administrativa de planos de saúde empresariais, com foco em:

- cadastro de empresa e plano;
- beneficiários;
- cobrança recorrente;
- fatura técnica;
- caixa de emergência;
- inadimplência;
- notificações;
- análise de risco;
- cuidado com LGPD.

O domínio foi organizado em cinco blocos principais, cobrindo a base cadastral, precificação, cobrança, operação mensal e risco/compliance.

### [ID 20] Modelo de documentação do projeto

Categoria: `decision`

A documentação do projeto deve seguir o modelo de notas encadeadas leves:

- arquivos curtos;
- uma ideia principal por nota;
- baixo custo de contexto para IA;
- blocos como `Relaciona com`, `Depende de`, `Desdobra em` e `Status`.

Também foi definido o uso de notas-mapa para arquitetura documental, mapa do domínio e status de decisões. Notas de risco e LGPD receberam stubs estruturais iniciais.

### [ID 21] Taxa comercial no beneficiário

Categoria: `knowledge`

A taxa comercial deve ser guardada no beneficiário, não na tabela do plano. Essa taxa:

- é percentual;
- pode variar individualmente por beneficiário;
- incide sobre o custo da faixa etária do beneficiário.

O valor cobrado do beneficiário é derivado do custo da sua faixa etária com a taxa percentual aplicada sobre esse custo.

A cotação familiar é a soma dos valores cobrados do titular e de seus dependentes. Ela pode ser guardada como snapshot mensal, pois representa o valor efetivamente cobrado do grupo familiar. O sistema deve conseguir expor custo, cobrança e margem.

### [ID 22] Separação entre custo, precificação e cobrança

Categoria: `decision`

A documentação e a modelagem devem distinguir explicitamente três camadas:

- custo da operadora, vindo da tabela do plano por faixa etária;
- precificação comercial, via taxa percentual individual por beneficiário;
- cobrança emitida, por meio de snapshot mensal do grupo familiar.

Cotação e cobrança são conceitos próximos, mas não podem ser confundidos automaticamente.

Também foi definido que a taxa percentual do beneficiário deve ter histórico por vigência. Mudanças não sobrescrevem o passado; afetam apenas competências futuras.

### [ID 23] Vínculo de beneficiário com CNPJ

Categoria: `knowledge`

Beneficiários podem transitar entre CNPJs ao longo do tempo, mas só podem pertencer a um CNPJ por vez. O sistema precisa preservar histórico desses vínculos e não tratar a vinculação empresarial como atributo estático.

### [ID 24] Nome oficial do produto

Categoria: `decision`

O nome oficial do produto passou a ser `Apolia`.

Racional consolidado:

- deriva de `apólice`, conceito central do domínio;
- mantém aderência ao negócio;
- é memorável;
- sustenta um posicionamento B2B mais humano.

O nome `Apolia` deve ser usado de forma consistente em produto, domínio e repositório.

### [ID 25] Histórico por vigência para taxa e tabela

Categoria: `decision`

Em `Apolia`, tanto a taxa percentual do beneficiário quanto a tabela do plano devem possuir histórico por vigência. Mudanças de preço e taxa não podem reescrever o passado; devem produzir efeitos apenas nas competências futuras a partir de sua vigência.

Essa decisão complementa a separação entre custo, precificação e cobrança e reforça a necessidade de snapshots mensais auditáveis.

### [ID 26] Milestone 0

Categoria: `decision`

Foi criada a `Milestone 0` de `Apolia` com foco em fundação de produto e arquitetura antes do início da codificação pesada.

O escopo consolidado dessa milestone inclui:

- validação com stakeholder;
- ADRs centrais;
- vigência e histórico;
- cobrança e snapshots;
- regra do caixa de emergência;
- MVP de risco e LGPD;
- estados e eventos auditáveis;
- arquitetura modular inicial;
- schema de dados;
- estratégia de qualidade/TDD;
- planejamento das próximas milestones.

### [ID 29] Incidente no MCP da Lola

Categoria: `decision`

Durante a sessão de 2026-03-11 houve instabilidade intermitente no MCP da Lola para persistência de memória, com erro `Bad Gateway` em chamadas `learn` e `suggest`. Posteriormente a persistência voltou a funcionar.

Essa memória é relevante porque reforça a necessidade de que decisões do projeto sejam registradas também em documentação local, e não apenas na memória do MCP.

### [ID 31] Taxa do beneficiário versus comissão do corretor

Categoria: `decision`

Em `Apolia`, taxa do beneficiário e comissão do corretor são conceitos separados.

- A taxa do beneficiário é aplicada sobre o valor da tabela/plano de cada beneficiário para formar o valor cobrado na fatura técnica.
- A comissão do corretor é um valor recebido pelo corretor, que no contexto atual é também usuário do sistema e stakeholder operacional.
- A base de cálculo da comissão do corretor é o valor do plano contratado somado dos beneficiários vinculados à apólice, e não o valor final com taxa.

Essa separação é necessária para evitar mistura entre margem comercial do produto e remuneração do corretor.

### [ID 32] Implantação como marco principal da apólice

Categoria: `decision`

Em `Apolia`, o marco principal da apólice é a implantação.

- Implantação é a data associada ao pagamento do mês 2.
- É nesse momento que a cobertura passa a valer.

Fluxo operacional consolidado:

- após o envio da documentação dos beneficiários, a operadora leva até 7 dias úteis para gerar o boleto de implantação;
- esse boleto pode ter prazo de até 60 dias para pagamento;
- isso permite alinhar um dia fixo do mês para toda a apólice.

Também foi registrado que a apólice se comporta como uma conta única, com efeitos operacionais e financeiros compartilhados entre os titulares do mesmo CNPJ.

### [ID 33] Fechamento de bordas operacionais

Categoria: `decision`

Foram definidas bordas operacionais do domínio `Apolia`.

- Se a operadora reprovar um beneficiário após o pagamento da fatura técnica, o valor correspondente deve ser devolvido integralmente.
- O cálculo de uso antecipado excepcional é feito por dia corrido.
- O sistema precisa de controle granular de entradas excepcionais e respectivos valores pro-rata.
- Esse controle deve preservar tanto o detalhe por grupo de contratação quanto a visão consolidada da apólice.
- A fatura técnica é tratada como rateio vinculado à apólice.

Essa memória reforça a necessidade de trilha auditável para exceções, prorrateios e devoluções.

### [ID 37] CNPJ como raiz contratante

Categoria: `decision`

No domínio de `Apolia`, o CNPJ é a entidade raiz contratante.

- Um CNPJ pode ter várias apólices no histórico.
- Apenas uma apólice ativa por vez.

Hierarquia conceitual principal:

- `CNPJ -> apólice -> grupos familiares -> vínculos de beneficiários -> beneficiários`

Cada nova apólice inicia um novo ciclo contratual e cria um novo caixa de emergência.

### [ID 38] Grupo familiar como unidade operacional e financeira

Categoria: `decision`

O grupo familiar é a unidade operacional e financeira da cobrança.

- O titular é sempre o responsável financeiro do grupo.
- A apólice é a obrigação macro do CNPJ com a operadora.
- O grupo familiar é a unidade de acompanhamento individual de inadimplência, pagamento e uso do caixa de emergência.

Foi decidido que inadimplência da apólice e inadimplência do grupo familiar são camadas diferentes e não devem ser confundidas.

### [ID 39] Competência como unidade mensal de referência

Categoria: `decision`

No domínio de `Apolia`, competência é a unidade mensal de referência usada para congelar composição, valores e eventos operacionais de cada ciclo. Ela é a base para snapshots, auditoria e leitura histórica do que estava vigente em determinado mês.

### [ID 40] Caixa de emergência

Categoria: `decision`

O caixa de emergência é a reserva financeira vinculada à apólice.

- É formado a partir das faturas técnicas pagas pelos grupos familiares.
- Serve para cobrir inadimplência pontual sem interromper a cobertura coletiva.
- Quando o caixa é utilizado para cobrir a obrigação de um grupo familiar, o próximo pagamento desse grupo recompõe o caixa.
- Encerrada a apólice sem renovação, o saldo remanescente do caixa vai para o corretor.

Também foi registrado que saídas de valores relacionadas a grupos familiares precisam ser rastreáveis.

### [ID 46] Esqueleto inicial do monorepo

Categoria: `decision`

Foi preparado um esqueleto inicial de monorepo com `Bun`, incluindo:

- `package.json` raiz com workspaces;
- `bunfig.toml`;
- `turbo.json`;
- `tsconfig` base;
- `apps/web` para `Next.js`;
- `apps/api` para `Hono` em `Cloudflare Workers`;
- `packages/domain`;
- `packages/db` com schema `Prisma`;
- `packages/ui`;
- `packages/config`;
- documentação do desenho inicial do monorepo.

No momento dessa preparação, `Bun` e `Wrangler` ainda não estavam instalados na máquina, então a estrutura foi criada sem instalação de dependências.

### [ID 48] Revisão local da Milestone 0

Categoria: `decision`

Foi registrada localmente no projeto uma revisão da `Milestone 0` por meio da nota `docs/78-revisao-da-milestone-0.md`.

Leitura recomendada registrada na memória:

- issues `8`, `9` e `11` concluídas;
- issues `6` e `7` em progresso;
- issues `2` e `10` ainda abertas.

A atualização direta no Telos falhou temporariamente com `UndefinedColumnError`, então a revisão ficou preservada na documentação local do projeto.

## Relações importantes entre as memórias

### Produto e identidade

- `19` define o problema e o escopo do sistema.
- `24` define o nome oficial do produto.
- `26` organiza o trabalho inicial em Milestone 0.

### Modelo econômico e de cobrança

- `21`, `22` e `25` definem a separação entre custo, taxa, vigência e cobrança.
- `31` separa taxa do beneficiário de comissão do corretor.
- `38`, `39` e `40` definem grupo familiar, competência e caixa de emergência como pilares operacionais.

### Estrutura do domínio

- `23` define mobilidade histórica do beneficiário entre CNPJs.
- `37` define o CNPJ como raiz contratante.
- `32` e `33` tratam fluxo operacional e exceções.

### Processo e documentação

- `20` define a forma da documentação.
- `29` registra o motivo prático para não depender só de memória MCP.
- `48` registra um caso concreto em que a documentação local preservou contexto quando a atualização sistêmica falhou.

## Decisões práticas derivadas desta consolidação

- A memória do MCP não deve mais ser tratada como fonte primária de verdade para este projeto.
- Toda regra de negócio nova deve ser registrada em `docs`.
- Sempre que uma memória relevante existir apenas no MCP, ela deve ser convertida em nota local.
- O nome `Apolia` deve ser usado como padrão na documentação de produto, domínio e repositório.

## Pendência residual

Esta consolidação cobre as memórias recuperadas nesta sessão. Se existirem memórias antigas não retornadas pelas buscas semânticas ou registros fora do escopo consultado, elas ainda podem não estar representadas aqui. A partir deste ponto, a prática recomendada é manter o repositório como fonte primária e usar memória persistente apenas como apoio de recuperação.
