# Modelo Logico Inicial

Objetivo:

- traduzir o modelo conceitual para uma proposta inicial de persistencia
- definir tabelas, chaves, relacionamentos e colunas de maior impacto
- servir como base para schema relacional futuro sem travar implementacao cedo demais

## Escopo deste documento

Este documento propoe um modelo logico inicial.

Ele ainda nao e o schema definitivo do banco.

A ideia aqui e fechar:

- quais tabelas provavelmente existem
- quais colunas sao essenciais
- quais chaves e unicidades sustentam o dominio
- onde existem pontos ainda provisórios

## Convencoes iniciais

- todas as tabelas possuem `id` como chave primaria
- todas as tabelas devem ter `criado_em` e `atualizado_em`
- quando fizer sentido, usar soft delete por `encerrado_em` ou `cancelado_em`, em vez de apagar historico
- competencias devem ser tratadas como referencia mensal explicita, preferencialmente `YYYY-MM`

## 1. Tabela `empresas`

Representa o CNPJ contratante.

Colunas principais:

- `id`
- `cnpj`
- `razao_social`
- `nome_fantasia`
- `nome_contato_principal`
- `telefone_contato_principal`
- `email_contato_principal`
- `status`
- `observacoes`
- `criado_em`
- `atualizado_em`

Regras:

- `cnpj` deve ser unico

## 2. Tabela `planos`

Representa o produto contratado.

Colunas principais:

- `id`
- `nome`
- `operadora`
- `tipo`
- `status`
- `observacoes`
- `criado_em`
- `atualizado_em`

## 3. Tabela `apolices`

Representa o ciclo contratual vigente ou historico do CNPJ.

Colunas principais:

- `id`
- `empresa_id`
- `plano_id`
- `numero_apolice`
- `operadora`
- `vigencia_inicio`
- `vigencia_fim`
- `implantacao_em`
- `dia_vencimento_padrao`
- `status`
- `percentual_comissao_corretor`
- `observacoes`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FK `empresa_id -> empresas.id`
- FK `plano_id -> planos.id`
- unicidade recomendada em `numero_apolice`

Regra de dominio a refletir:

- um CNPJ pode ter varias apolices
- apenas uma apolice ativa por vez por empresa

Implementacao sugerida:

- constraint parcial ou validacao aplicacional para impedir mais de uma apolice com `status = ativa` por `empresa_id`

## 4. Tabela `tabelas_plano`

Representa a versao da tabela de custo do plano.

Colunas principais:

- `id`
- `plano_id`
- `vigencia_inicio`
- `vigencia_fim`
- `ativa`
- `observacoes`
- `criado_em`
- `atualizado_em`

## 5. Tabela `tabela_plano_faixas`

Representa as linhas de custo por faixa etaria.

Colunas principais:

- `id`
- `tabela_plano_id`
- `idade_inicial`
- `idade_final`
- `valor_custo`
- `criado_em`
- `atualizado_em`

Restricoes:

- FK `tabela_plano_id -> tabelas_plano.id`
- nao deve haver sobreposicao de faixas dentro da mesma tabela

## 6. Tabela `beneficiarios`

Representa a pessoa do dominio.

Colunas principais:

- `id`
- `nome_completo`
- `documento`
- `sexo`
- `telefone`
- `email`
- `data_nascimento`
- `status`
- `observacoes`
- `criado_em`
- `atualizado_em`

Restricoes sugeridas:

- indice em `documento`
- possivel unicidade em `documento`, caso o negocio confirme que um mesmo documento nunca deve duplicar pessoa

## 7. Tabela `grupos_familiares`

Representa a unidade operacional e financeira da apolice.

Colunas principais:

- `id`
- `apolice_id`
- `titular_beneficiario_id`
- `status`
- `competencia_entrada`
- `competencia_saida`
- `observacoes`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FK `apolice_id -> apolices.id`
- FK `titular_beneficiario_id -> beneficiarios.id`

Observacao importante:

- a coluna `titular_beneficiario_id` facilita consulta operacional
- a verdade historica completa continua no vinculo do beneficiario

## 8. Tabela `vinculos_beneficiario`

Representa o contexto temporal da pessoa no contrato.

Colunas principais:

- `id`
- `beneficiario_id`
- `empresa_id`
- `apolice_id`
- `grupo_familiar_id`
- `plano_id`
- `titular_beneficiario_id`
- `papel_no_grupo`
- `parentesco_com_titular`
- `taxa_percentual`
- `competencia_inicial`
- `competencia_final`
- `motivo_transicao`
- `ativo`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FK `beneficiario_id -> beneficiarios.id`
- FK `empresa_id -> empresas.id`
- FK `apolice_id -> apolices.id`
- FK `grupo_familiar_id -> grupos_familiares.id`
- FK `plano_id -> planos.id`
- FK `titular_beneficiario_id -> beneficiarios.id`

Regras fortes:

- apenas um vinculo ativo por beneficiario
- se `papel_no_grupo = dependente`, `titular_beneficiario_id` e obrigatorio
- se `papel_no_grupo = titular`, `titular_beneficiario_id` deve ser nulo

## 9. Tabela `cobrancas`

Representa a cobranca mensal emitida por competencia.

Colunas principais:

- `id`
- `empresa_id`
- `apolice_id`
- `grupo_familiar_id`
- `titular_responsavel_id`
- `competencia`
- `tipo_cobranca`
- `valor_custo_total`
- `valor_margem_total`
- `valor_cotacao`
- `valor_pro_rata_total`
- `valor_original`
- `valor_atual`
- `data_vencimento`
- `status`
- `pago_em`
- `origem_confirmacao`
- `observacoes`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FK `empresa_id -> empresas.id`
- FK `apolice_id -> apolices.id`
- FK `grupo_familiar_id -> grupos_familiares.id`
- FK `titular_responsavel_id -> beneficiarios.id`

Unicidade sugerida:

- uma cobranca regular por `grupo_familiar_id + competencia + tipo_cobranca`, salvo regra futura de segunda via ou renegociacao separada

## 10. Tabela `itens_cobranca`

Representa a composicao da cobranca.

Colunas principais:

- `id`
- `cobranca_id`
- `beneficiario_id`
- `tipo_item`
- `descricao`
- `valor_custo`
- `valor_taxa`
- `valor_final`
- `ordem_exibicao`
- `observacoes`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FK `cobranca_id -> cobrancas.id`
- FK `beneficiario_id -> beneficiarios.id`

## 11. Tabela `faturas_tecnicas`

Representa a cobranca de entrada.

Colunas principais:

- `id`
- `empresa_id`
- `apolice_id`
- `grupo_familiar_id`
- `titular_responsavel_id`
- `beneficiario_id`
- `plano_id`
- `tipo_referencia`
- `referencia_id`
- `valor_original`
- `valor_devolvido`
- `valor_repassado_corretor`
- `status`
- `pago_em`
- `aprovado_em`
- `implantado_em`
- `observacoes`
- `criado_em`
- `atualizado_em`

Chaves e restricoes:

- FKs para empresa, apolice, grupo, titular, beneficiario e plano

Observacao:

- `tipo_referencia` e `referencia_id` ajudam a modelar se a fatura nasceu da entrada de grupo, entrada de dependente ou outro evento controlado

## 12. Tabela `caixas_emergencia`

Representa o caixa da apolice.

Colunas principais:

- `id`
- `apolice_id`
- `valor_total`
- `valor_disponivel`
- `valor_utilizado`
- `valor_comprometido`
- `nivel_risco`
- `atualizado_em`
- `criado_em`

Chaves e restricoes:

- FK `apolice_id -> apolices.id`
- unicidade em `apolice_id`

## 13. Tabela `movimentos_caixa`

Representa a trilha de entradas e saidas do caixa.

Colunas principais:

- `id`
- `apolice_id`
- `grupo_familiar_id`
- `beneficiario_id`
- `fatura_tecnica_id`
- `cobranca_id`
- `competencia`
- `tipo_movimento`
- `valor`
- `motivo`
- `criado_por_usuario_id`
- `criado_em`

Chaves e restricoes:

- FK `apolice_id -> apolices.id`
- FK `grupo_familiar_id -> grupos_familiares.id`
- FK `beneficiario_id -> beneficiarios.id`
- FK `fatura_tecnica_id -> faturas_tecnicas.id`
- FK `cobranca_id -> cobrancas.id`

Tipos esperados:

- `aporte_inicial`
- `uso_por_inadimplencia`
- `retorno_por_pagamento`
- `ajuste_manual`
- `repasse_ao_corretor`

## 14. Tabela `eventos_auditaveis`

Representa a trilha operacional do sistema.

Colunas principais:

- `id`
- `tipo_entidade`
- `entidade_id`
- `tipo_evento`
- `competencia`
- `antes_json`
- `depois_json`
- `motivo`
- `criado_por_usuario_id`
- `criado_em`

Motivo de existir:

- registrar eventos criticos sem depender apenas de logs tecnicos
- sustentar auditoria, metricas e explicabilidade

## 15. Tabela ou view `analises_risco`

Direcao inicial:

- preferir `view`, consulta derivada ou materializacao controlada
- evitar persistir cedo demais se a leitura puder ser calculada

Indicadores candidatos:

- total_grupos_familiares
- grupos_inadimplentes
- grupos_em_caixa
- saldo_caixa
- saldo_comprometido
- nivel_risco
- calculado_em

## Principais relacionamentos

- `empresas 1:N apolices`
- `planos 1:N tabelas_plano`
- `tabelas_plano 1:N tabela_plano_faixas`
- `apolices 1:N grupos_familiares`
- `apolices 1:1 caixas_emergencia`
- `beneficiarios 1:N vinculos_beneficiario`
- `grupos_familiares 1:N vinculos_beneficiario`
- `grupos_familiares 1:N cobrancas`
- `cobrancas 1:N itens_cobranca`
- `grupos_familiares 1:N faturas_tecnicas`
- `caixas_emergencia/apolices 1:N movimentos_caixa`

## Restricoes importantes

### Unicidades

- `empresas.cnpj`
- `caixas_emergencia.apolice_id`

### Regras aplicacionais ou constraints parciais

- apenas uma apolice ativa por empresa
- apenas um vinculo ativo por beneficiario
- apenas um titular vigente por grupo familiar
- dependente nao pode existir sem titular valido

### Temporalidade

- `competencia_inicial <= competencia_final` quando houver `competencia_final`
- cobranca de competencia passada nao pode ser reprocessada sem trilha explicita
- mudancas de composicao devem produzir novo efeito financeiro apenas em competencias futuras, salvo excecao controlada

## Pontos ainda provisórios

- se `analises_risco` sera tabela, view ou cache
- se `cobrancas` suportara mais de um registro operacional por grupo e competencia em renegociacoes
- se `beneficiarios.documento` sera unico no banco ou apenas altamente indexado
- como modelar usuarios internos e autoria, ainda nao descrito no dominio atual

## O que vem depois

Depois deste documento, os proximos passos naturais sao:

1. proposta de schema SQL inicial
2. cortes de modulo do monolito
3. definicao dos fluxos aplicacionais principais
4. estrategia de testes e dados de exemplo

## Relaciona com

- `74-modelo-conceitual-humano.md`
- `61-queries-e-indices.md`
- `17-invariantes.md`

## Depende de

- `16-relacoes-do-dominio.md`
- `18-estados-do-sistema.md`

## Desdobra em

- futura proposta de schema relacional
- futura definicao de migracoes

## Status

- `provisorio`
