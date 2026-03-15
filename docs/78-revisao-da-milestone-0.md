# Revisao da Milestone 0

Objetivo:

- registrar localmente a revisão do estado da Milestone 0
- preservar a leitura de progresso mesmo com falha temporária no Telos
- alinhar o que já está efetivamente entregue com o que ainda permanece aberto

## Contexto

A Milestone 0 foi criada como fase de fundação do produto e da arquitetura.

Desde a abertura das issues, o projeto avançou significativamente em documentação, modelagem, monorepo e schema.

Durante a revisão, as operações de atualização no Telos falharam com `UndefinedColumnError`.

Por isso, esta nota registra o estado recomendado até que o sistema de issues volte a aceitar atualização normal.

## Leitura recomendada das issues

### Concluídas

#### Issue `#8`

`Definir arquitetura inicial e cortes de modulo do monolito`

Motivo para encerramento:

- arquitetura inicial documentada
- stack analisada
- desenho de monorepo definido
- estrutura inicial de apps e packages preparada

#### Issue `#9`

`Desenhar schema inicial e restricoes de banco`

Motivo para encerramento:

- modelo lógico inicial criado
- schema Prisma inicial escrito
- entidades, enums, relações e restrições principais já existem

#### Issue `#11`

`Planejar Milestone 1 e milestones seguintes`

Motivo para encerramento:

- milestones de implementação foram abertas
- sequência de execução foi definida
- milestone específica de design e design system também foi aberta

### Em progresso

#### Issue `#6`

`Definir MVP de risco e governanca de dados sensiveis`

Motivo para manter em progresso:

- já existe boa fundação documental
- já existe diretriz de risco derivado e cuidado com LGPD
- porém o recorte final do MVP de risco ainda depende de fechamento concreto

#### Issue `#7`

`Definir estados, transicoes e eventos auditaveis do sistema`

Motivo para manter em progresso:

- estados e eventos já foram bastante estruturados
- grupos familiares têm transições sugeridas
- porém ainda faltam fechamentos completos de transições válidas para todas as entidades principais

### Ainda abertas

#### Issue `#2`

`Formalizar ADRs centrais da modelagem de Apolia`

Motivo:

- as decisões existem
- mas ainda não foram convertidas formalmente em um conjunto consolidado de ADRs

#### Issue `#10`

`Definir estrategia de qualidade, testes e readiness para codar`

Motivo:

- ainda falta fechar a estratégia mínima de testes, readiness e critérios de qualidade para implementação

## Leitura geral da milestone

A Milestone 0 cumpriu bem sua função de fundação.

O projeto já possui:

- domínio consolidado
- documentação curta e narrativa
- modelo conceitual
- modelo lógico
- schema Prisma inicial
- análise de stack
- desenho inicial do monorepo
- roadmap inicial de implementação

O que resta da Milestone 0 agora são essencialmente fechamentos de engenharia e formalização:

- ADRs
- estratégia de qualidade
- refinamentos finais de risco
- refinamentos finais de estados e auditoria

## Relaciona com

- `06-status-das-decisoes.md`
- `75-modelo-logico-inicial.md`
- `76-analise-da-stack-e-monorepo.md`
- `77-desenho-inicial-do-monorepo.md`

## Status

- `fechado`
