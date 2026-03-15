# Mapa do Dominio

Objetivo:

- mostrar os blocos centrais do sistema
- indicar como as notas se conectam
- ajudar humano e IA a navegar pelo dominio sem abrir tudo

## Visao geral

O sistema pode ser lido em cinco blocos principais:

- cadastro e apolice
- cobranca
- reserva e fatura tecnica
- risco e governanca
- notificacoes

Leitura principal:

- empresa contrata um plano
- beneficiarios entram na apolice
- titulares centralizam cobrancas familiares
- novos beneficiarios geram fatura tecnica
- pagamento da fatura tecnica forma a reserva
- atraso pode consumir reserva
- pagamento posterior recompõe a reserva
- risco apoia decisao operacional
- notificacoes comunicam vencimento, atraso e regularizacao

## Bloco: cadastro e apolice

Pergunta que responde:

- quem esta vinculado a qual empresa e em que estrutura familiar

Notas centrais:

- `10-entidade-empresa.md`
- `10a-entidade-apolice.md`
- `11-entidade-plano.md`
- `12a-entidade-grupo-familiar.md`
- `14-entidade-tabela-do-plano.md`
- `12-entidade-beneficiario.md`
- `15-entidade-vinculo-beneficiario.md`
- `13-relacao-titular-dependente.md`
- `16-relacoes-do-dominio.md`
- `17-invariantes.md`
- `18-estados-do-sistema.md`

Saidas que alimentam outros blocos:

- empresa identificada por CNPJ
- apolice vigente por empresa
- grupo familiar como unidade de cobranca e inadimplencia
- plano ativo derivado da apolice vigente
- custo por faixa etaria
- titular e dependentes organizados
- estado de cada beneficiario
- contexto vigente do beneficiario em empresa e plano

## Bloco: cobranca

Pergunta que responde:

- como a mensalidade nasce, e como seu valor pode ser explicado e ajustado

Notas centrais:

- `20-cobranca-visao-geral.md`
- `21-cobranca-recorrencia.md`
- `22-cobranca-ajustes.md`
- `23-cobranca-composicao-familiar.md`
- `24-entidade-cobranca-item.md`
- `25-regra-geracao-cobranca-familiar.md`
- `40-entidade-cobranca.md`

Depende de:

- empresa
- plano
- titular
- dependentes ativos

Entrega:

- cobranca mensal por titular
- itens auditaveis da cobranca
- historico de valor original e valor atual
- leitura de custo, lucro e cotacao

## Bloco: reserva e fatura tecnica

Pergunta que responde:

- como a taxa de entrada forma a reserva e como essa reserva protege a empresa

Notas centrais:

- `30-fatura-tecnica-visao-geral.md`
- `31-fatura-tecnica-formacao-caixa.md`
- `32-fatura-tecnica-uso-caixa.md`
- `33-fatura-tecnica-reposicao.md`
- `34-fatura-tecnica-risco.md`
- `41-entidade-fatura-tecnica.md`
- `42-entidade-movimento-reserva.md`
- `43-entidade-caixa-emergencia.md`

Depende de:

- entrada de beneficiario
- pagamento de fatura tecnica
- registro de inadimplencia

Entrega:

- saldo total da reserva
- saldo disponivel
- saldo comprometido
- trilha de movimentos

## Bloco: risco e governanca

Pergunta que responde:

- como o sistema gera leitura operacional sem ultrapassar limites de dados sensiveis

Notas centrais:

- `35-risco-visao-geral.md`
- `36-risco-categorias.md`
- `37-risco-uso-no-cadastro.md`
- `38-risco-dados-sensiveis.md`
- `39-risco-lgpd-governanca.md`
- `44-entidade-analise-risco.md`
- `62-regra-tratamento-dados-sensiveis.md`
- `63-regra-derivacao-de-risco.md`
- `64-regra-mvp-risco.md`

Depende de:

- beneficiarios
- composicao da apolice
- governanca sobre dados sensiveis

Entrega:

- indicadores de apoio a decisao
- limites claros para coleta e persistencia de dados

## Bloco: notificacoes

Pergunta que responde:

- como o sistema comunica eventos relevantes da operacao

Notas centrais:

- `50-notificacoes.md`

Depende de:

- cobranca
- beneficiario
- empresa

Entrega:

- historico de avisos enviados
- uso preferencial de WhatsApp
- suporte opcional a e-mail

## Encadeamentos principais

Trilha de cadastro para cobranca:

- `10-entidade-empresa.md` -> `10a-entidade-apolice.md` -> `11-entidade-plano.md` -> `14-entidade-tabela-do-plano.md` -> `12-entidade-beneficiario.md` -> `15-entidade-vinculo-beneficiario.md` -> `13-relacao-titular-dependente.md` -> `25-regra-geracao-cobranca-familiar.md` -> `40-entidade-cobranca.md`
- `10-entidade-empresa.md` -> `10a-entidade-apolice.md` -> `12a-entidade-grupo-familiar.md` -> `12-entidade-beneficiario.md` -> `15-entidade-vinculo-beneficiario.md` -> `25-regra-geracao-cobranca-familiar.md` -> `40-entidade-cobranca.md`

Trilha de entrada para reserva:

- `12-entidade-beneficiario.md` -> `19-fluxos-textuais.md` -> `30-fatura-tecnica-visao-geral.md` -> `41-entidade-fatura-tecnica.md` -> `42-entidade-movimento-reserva.md` -> `43-entidade-caixa-emergencia.md`

Trilha de cadastro para risco:

- `12-entidade-beneficiario.md` -> `35-risco-visao-geral.md` -> `38-risco-dados-sensiveis.md` -> `63-regra-derivacao-de-risco.md` -> `64-regra-mvp-risco.md`

Trilha de atraso para protecao da empresa:

- `40-entidade-cobranca.md` -> `19-fluxos-textuais.md` -> `32-fatura-tecnica-uso-caixa.md` -> `42-entidade-movimento-reserva.md` -> `33-fatura-tecnica-reposicao.md`

## Nao confundir com

- `cobranca mensal` nao e `fatura tecnica`
- `fatura tecnica` nao e `caixa de emergencia`
- `empresa/CNPJ` e a raiz contratante, nao a apolice
- `analise de risco` nao e motor de bloqueio automatico
- `beneficiario` e pessoa do dominio, mas sua leitura muda conforme o bloco

## Relaciona com

- `04-arquitetura-da-documentacao.md`
- `06-status-das-decisoes.md`
- `90-duvidas-abertas.md`

## Status

- `provisorio`
