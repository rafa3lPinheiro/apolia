# Modelo Conceitual Humano do Dominio

Objetivo:

- consolidar o dominio em formato proximo de modelagem
- servir como ponte entre documentacao de negocio e futuro schema de banco
- deixar claro o que cada entidade representa, quais campos sao essenciais e como elas se relacionam

## Como ler este documento

Este arquivo nao tenta substituir as notas curtas do dominio.

Ele existe para juntar, em um unico lugar, a visao conceitual mais importante para modelagem:

- quais entidades existem
- o que cada uma guarda
- quais relacionamentos importam
- quais regras nao podem ser quebradas

Se a documentacao curta responde em partes, este documento responde de forma consolidada.

## Visao geral do modelo

A hierarquia principal do dominio e:

- `empresa/CNPJ`
- `apolice`
- `plano`
- `grupo familiar`
- `vinculo do beneficiario`
- `beneficiario`
- `cobranca`
- `item de cobranca`
- `fatura tecnica`
- `caixa de emergencia`
- `movimento do caixa`
- `analise de risco`

Regra estrutural central:

- um CNPJ pode ter varias apolices no historico
- um CNPJ pode ter apenas uma apolice ativa por vez
- cada apolice possui seu proprio caixa de emergencia

## 1. Empresa / CNPJ

### O que representa

A entidade contratante.

Ela e a raiz do dominio contratual.

### Campos essenciais

- cnpj
- razao_social
- nome_fantasia
- contato_principal
- telefone_contato_principal
- email_contato_principal
- status
- observacoes

### Responsabilidades

- identificar quem contrata
- concentrar historico de apolices
- servir de raiz de navegacao operacional

### Nao deve guardar como atributo eterno

- plano vigente
- numero da apolice vigente
- percentual de comissao vigente
- caixa de emergencia

Esses dados pertencem a apolice vigente do periodo.

## 2. Apolice

### O que representa

O ciclo contratual vigente do CNPJ com a operadora.

### Campos essenciais

- empresa_id
- numero_apolice
- plano_id
- operadora
- vigencia_inicio
- vigencia_fim
- implantacao_em
- dia_vencimento_padrao
- status
- percentual_comissao_corretor
- observacoes

### Responsabilidades

- definir plano e regras comerciais do periodo
- agrupar grupos familiares vinculados
- concentrar o risco sistêmico do contrato
- possuir o caixa de emergencia

### Regras fortes

- apenas uma apolice ativa por CNPJ por vez
- troca de apolice nao pode sobrescrever historico
- nova apolice implica novo ciclo contratual
- nova apolice implica novo caixa de emergencia

## 3. Plano

### O que representa

O plano de saude contratado na apolice.

### Campos essenciais

- nome
- operadora
- tipo
- status

### Responsabilidades

- definir o produto contratado
- apontar para a tabela de custo por faixa etaria

### Regras fortes

- o custo nao vive diretamente no plano
- o custo depende da tabela vigente do plano

## 4. Tabela do plano

### O que representa

A estrutura de custo da operadora por faixa etaria.

### Campos essenciais

- plano_id
- vigencia_inicio
- vigencia_fim
- ativa

### Linhas da tabela

Cada linha deve permitir:

- idade_inicial
- idade_final
- valor_custo

### Responsabilidades

- informar o custo base real da operadora
- permitir recomputo apenas para competencias futuras

## 5. Beneficiario

### O que representa

A pessoa do dominio.

### Campos essenciais

- nome_completo
- documento
- sexo
- telefone
- email
- data_nascimento
- status
- observacoes

### Responsabilidades

- representar a identidade estavel da pessoa
- existir independentemente de um unico contexto contratual

### Regras fortes

- beneficiario nao deve carregar sozinho todo o contexto de empresa, grupo e papel
- esse contexto pertence ao vinculo

## 6. Grupo familiar

### O que representa

A unidade operacional e financeira da apolice.

### Campos essenciais

- apolice_id
- titular_beneficiario_id
- status
- competencia_entrada
- competencia_saida
- observacoes

### Responsabilidades

- centralizar a composicao familiar
- centralizar a cobranca mensal
- centralizar a inadimplencia
- centralizar o uso e a recomposicao do caixa

### Regras fortes

- pertence a uma unica apolice por vez
- possui exatamente um titular vigente
- pode possuir zero ou muitos dependentes vigentes
- o titular e sempre o responsavel financeiro

## 7. Vinculo do beneficiario

### O que representa

O contexto temporal do beneficiario dentro do sistema.

### Campos essenciais

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

### Responsabilidades

- dizer em que empresa a pessoa esta
- dizer em que apolice
- dizer em que grupo familiar
- dizer se ela e titular ou dependente naquele contexto
- guardar parentesco e taxa comercial
- preservar historico

### Regras fortes

- um beneficiario nao pode ter dois vinculos ativos ao mesmo tempo
- dependente precisa apontar para titular valido
- mudancas com impacto financeiro passam, por padrao, a valer so na proxima competencia

## 8. Cobranca

### O que representa

O snapshot financeiro da competencia mensal regular.

### Campos essenciais

- empresa_id
- apolice_id
- grupo_familiar_id
- titular_responsavel_id
- competencia
- tipo_cobranca
- valor_custo_total
- valor_margem_total
- valor_cotacao
- valor_pro_rata_total
- valor_original
- valor_atual
- data_vencimento
- status
- pago_em
- origem_confirmacao
- observacoes

### Responsabilidades

- registrar o que foi efetivamente cobrado naquela competencia
- sustentar leitura de custo, margem e cotacao
- manter snapshot historico

### Regras fortes

- nao deve esconder composicao do valor
- precisa apontar para itens de cobranca
- nao deve ser reescrita por mudancas futuras de tabela, taxa ou composicao

## 9. Item de cobranca

### O que representa

A explicacao atomica da cobranca.

### Campos essenciais

- cobranca_id
- beneficiario_id
- tipo_item
- valor_custo
- valor_taxa
- valor_final
- observacoes

### Responsabilidades

- explicar quem compoe o valor total
- mostrar custo e margem por beneficiario
- isolar ajustes e pro-rata quando existirem

## 10. Fatura tecnica

### O que representa

A cobranca de entrada para adesao ou implantacao.

### Campos essenciais

- empresa_id
- apolice_id
- grupo_familiar_id
- titular_responsavel_id
- beneficiario_id
- plano_id
- valor_original
- valor_devolvido
- valor_repassado_corretor
- pago_em
- aprovado_em
- implantado_em
- status
- tipo_referencia
- referencia_id
- observacoes
- criado_em

### Responsabilidades

- viabilizar entrada de grupo ou dependente
- alimentar o caixa de emergencia
- preservar historico de devolucao ou repasse

## 11. Caixa de emergencia

### O que representa

A reserva financeira da apolice.

### Campos essenciais

- apolice_id
- valor_total
- valor_disponivel
- valor_utilizado
- valor_comprometido
- nivel_risco
- atualizado_em

### Responsabilidades

- proteger a apolice contra inadimplencia pontual
- sustentar continuidade da cobertura coletiva
- dar base para leitura de risco operacional

### Regras fortes

- pertence a uma unica apolice
- uso precisa ser auditavel
- pagamento tardio do grupo recompõe o proprio caixa
- saldo so pode ser retirado para corretor sem comprometer seguranca da apolice

## 12. Movimento do caixa

### O que representa

A trilha financeira do caixa de emergencia.

### Campos essenciais

- apolice_id
- grupo_familiar_id
- beneficiario_id
- fatura_tecnica_id
- cobranca_id
- competencia
- tipo_movimento
- valor
- motivo
- criado_em
- criado_por_usuario_id

### Tipos esperados

- aporte_inicial
- uso_por_inadimplencia
- retorno_por_pagamento
- ajuste_manual
- repasse_ao_corretor

### Responsabilidades

- explicar entradas e saidas do caixa
- permitir auditoria financeira
- ligar cobertura e recomposicao a eventos concretos

## 13. Analise de risco

### O que representa

A leitura operacional da saude da apolice.

### Campos ou indicadores candidatos

- total de grupos familiares
- total de titulares
- total de dependentes
- grupos inadimplentes
- grupos cobertos pelo caixa
- saldo atual do caixa
- saldo comprometido
- nivel de risco

### Responsabilidades

- apoiar decisao
- mostrar fragilidade ou estabilidade da apolice
- nao bloquear automaticamente o sistema

### Regra forte

- sempre que possivel, risco deve ser derivado e nao persistido como rotulo fixo

## Relacionamentos essenciais

- empresa `1:N` apolice
- apolice `1:1` caixa de emergencia
- apolice `1:N` grupo familiar
- apolice `1:1` plano vigente no periodo
- grupo familiar `1:N` vinculo do beneficiario
- beneficiario `1:N` vinculo do beneficiario
- grupo familiar `1:N` cobranca
- cobranca `1:N` item de cobranca
- grupo familiar `1:N` fatura tecnica
- caixa de emergencia `1:N` movimento do caixa

## Invariantes mais importantes

- um CNPJ tem no maximo uma apolice ativa por vez
- um grupo familiar tem exatamente um titular vigente
- dependente nao existe sem titular valido no mesmo grupo e mesma apolice
- competencia passada nao pode ser reescrita por mudanca futura
- caixa pertence a apolice, nao a empresa como saldo solto
- uso do caixa gera obrigacao de recomposicao

## O que este documento prepara

Depois deste ponto, o proximo passo natural e criar:

1. modelo logico inicial
2. proposta de schema relacional
3. cortes de modulo do monolito
4. fluxos aplicacionais principais

## Relaciona com

- `16-relacoes-do-dominio.md`
- `17-invariantes.md`
- `71-guia-humano-do-dominio.md`

## Depende de

- `07-resumo-mestre-do-dominio.md`

## Desdobra em

- futura modelagem de banco
- futura arquitetura de modulos

## Status

- `fechado`
