# Arquitetura da Documentacao

Objetivo:

- manter a documentacao curta, consultavel e encadeada
- reduzir custo de contexto para IA
- facilitar leitura humana por trilhas
- separar definicao, regra, fluxo, decisao e duvida

## Leitura da situacao atual

Pontos fortes:

- arquivos curtos e focados
- linguagem simples e controlada
- boa separacao inicial entre visao, entidades, regras e principios
- ordem numerica previsivel
- a arvore principal ja cobre produto, dominio, cobranca, reserva, risco, tecnico e leitura humana

Pontos a melhorar:

- alguns conceitos aparecem repetidos em mais de um arquivo
- nem sempre fica explicito se a nota define estrutura ou comportamento
- faltam notas de navegacao por contexto
- faltava uma camada de leitura longa orientada a humanos
- faltam marcacoes claras do que esta fechado, provisorio ou aberto
- arquivos vazios reduzem confianca na arvore documental

## Modelo recomendado

A documentacao deve funcionar como uma rede de notas curtas com papeis bem definidos.

Tipos de nota:

- `visao`: explica o porque e o limite do produto
- `mapa`: aponta para outras notas e organiza um contexto
- `entidade`: define estrutura do dominio
- `regra`: define comportamento invariavel
- `fluxo`: define sequencia operacional
- `decisao`: registra escolha tomada e sua motivacao
- `duvida`: registra o que ainda esta aberto
- `tecnico`: registra restricoes de implementacao, consulta e seguranca
- `guia-humano`: explica o produto e o dominio em formato mais narrativo, sem substituir as notas curtas

Cada nota deve responder uma pergunta principal.

Exemplos:

- `entidade-beneficiario`: o que e um beneficiario no sistema
- `regra-geracao-cobranca-familiar`: como a cobranca familiar deve nascer
- `fluxo-uso-caixa-emergencia`: como a operacao usa a reserva

## Regra de encadeamento

Cada nota deve ter links semanticos curtos para notas relacionadas.

Bloco recomendado no fim de cada arquivo:

- `Relaciona com`
- `Depende de`
- `Desdobra em`
- `Status`

Exemplo:

- relaciona com: `11-entidade-plano.md`, `12-entidade-beneficiario.md`
- depende de: `17-invariantes.md`
- desdobra em: `25-regra-geracao-cobranca-familiar.md`
- status: `provisorio`

Isso cria um estilo de notas encadeadas sem exigir textos longos.

Ao mesmo tempo, a camada `70+` pode oferecer leitura mais extensa para onboarding humano, desde que continue apontando para as notas curtas como fonte estrutural.

## Estrutura recomendada

### 00-fundamentos

- `00-visao-produto.md`
- `01-escopo.md`
- `02-usuarios.md`
- `03-glossario.md`
- `04-arquitetura-da-documentacao.md`
- `05-mapa-do-dominio.md`
- `06-status-das-decisoes.md`

Papel:

- explicar produto, linguagem, dominios e maturidade das definicoes

### 10-cadastro-e-apolice

- empresa
- plano
- beneficiario
- relacao titular/dependente
- relacoes do dominio
- invariantes
- estados

Papel:

- definir o nucleo cadastral e estrutural da apolice

### 20-cobranca

- visao geral da cobranca
- recorrencia
- ajustes
- composicao familiar
- entidade cobranca
- entidade item de cobranca
- regra de geracao da cobranca familiar
- fluxo de inadimplencia

Papel:

- concentrar tudo que diz respeito a mensalidade e sua auditoria

### 30-reserva-e-fatura-tecnica

- visao geral da fatura tecnica
- formacao do caixa
- uso do caixa
- reposicao do caixa
- risco operacional do caixa
- entidade fatura tecnica
- entidade caixa de emergencia
- entidade movimento do caixa

Papel:

- concentrar o mecanismo de reserva e protecao financeira da empresa

### 40-risco-e-governanca

- visao geral do risco
- categorias
- uso no cadastro
- dados sensiveis
- lgpd e governanca
- entidade analise de risco
- regra de derivacao
- regra do MVP de risco

Papel:

- separar claramente analise operacional de tratamento de dados sensiveis

### 50-comunicacao

- notificacoes

Papel:

- centralizar canais, historico e gatilhos de comunicacao

### 60-tecnico

- principios tecnicos
- queries e indices
- regra de tratamento de dados sensiveis

Papel:

- registrar restricoes de implementacao e consulta

### 70-guias-humanos

- guia humano do produto
- guia humano do dominio
- guia humano da operacao financeira
- guia humano de estados e eventos

Papel:

- explicar o projeto em linguagem narrativa
- facilitar onboarding e alinhamento de stakeholder
- servir como porta de entrada antes da leitura atomizada

### 90-abertos

- duvidas abertas

Papel:

- concentrar tudo que ainda nao pode ser tratado como decisao fechada

## Convencao de escrita

Toda nota deve comecar com:

- `Titulo`
- `Objetivo`

Depois usar apenas os blocos necessarios:

- `Regras`
- `Campos principais`
- `Estados`
- `Exemplo`
- `Nao confundir com`
- `Relaciona com`
- `Depende de`
- `Desdobra em`
- `Status`

Regras de estilo:

- uma ideia principal por arquivo
- frases curtas
- evitar sinonimos para o mesmo conceito
- evitar repetir regra completa em dois lugares
- quando repetir for inevitavel, manter uma nota como fonte principal e referenciar a outra

## Convencao de status

Toda nota deve ter um status explicito:

- `fechado`: ja pode orientar modelagem e implementacao
- `provisorio`: direcao atual, mas ainda sujeita a ajuste
- `aberto`: ainda depende de decisao

Isso ajuda IA e humano a nao tratarem rascunho como regra final.

## Convencao de navegacao por pergunta

O indice principal deve permitir chegar rapido por intencao.

Exemplos de trilhas:

- para entender o produto: `00-visao-produto.md` -> `01-escopo.md` -> `05-mapa-do-dominio.md`
- para modelar cadastro: `10-entidade-empresa.md` -> `11-entidade-plano.md` -> `12-entidade-beneficiario.md` -> `13-relacao-titular-dependente.md`
- para modelar cobranca: `20-cobranca-visao-geral.md` -> `24-entidade-cobranca-item.md` -> `25-regra-geracao-cobranca-familiar.md` -> `40-entidade-cobranca.md`
- para modelar reserva: `30-fatura-tecnica-visao-geral.md` -> `31-fatura-tecnica-formacao-caixa.md` -> `42-entidade-movimento-reserva.md` -> `43-entidade-caixa-emergencia.md`
- para modelar risco com cuidado juridico: `35-risco-visao-geral.md` -> `38-risco-dados-sensiveis.md` -> `39-risco-lgpd-governanca.md` -> `64-regra-mvp-risco.md`
- para entender o projeto como humana: `70-guia-humano-do-produto.md` -> `71-guia-humano-do-dominio.md` -> `72-guia-humano-da-operacao-financeira.md` -> `73-guia-humano-de-estados-e-eventos.md`

## Proximo passo recomendado

Em vez de reorganizar tudo de uma vez:

1. criar `05-mapa-do-dominio.md`
2. criar `06-status-das-decisoes.md`
3. preencher notas vazias
4. adicionar bloco de encadeamento e status nas notas mais centrais
5. so depois renomear ou mover arquivos se ainda fizer sentido

## Regra de fonte de verdade

As notas numeradas da raiz de `docs` sao a fonte principal de verdade do projeto.

Memorias recuperadas do MCP podem ser consolidadas localmente para auditoria ou migracao de contexto, mas nao devem criar uma estrutura paralela nem substituir as notas numeradas como referencia principal.

Quando uma memoria trouxer regra nova ou detalhe ausente:

- atualizar a nota numerada correta
- registrar a memoria consolidada apenas como inventario historico, se isso ajudar rastreabilidade
- evitar duplicar a mesma regra em duas arvores documentais

Esse caminho preserva a documentacao atual e melhora navegacao sem custo alto.
