## Infra Dados

### Entrada Mercado -> Evolução
Constistirá em quatro etapas.

**1. Entrada (commodity controlada)**
    
  - Conectores ERP
  - Padronização
  - APIs
  - Consentimento

**2. Diferenciação**
    
  - Indicadores operacionais
  - Relatórios inteligentes
  - Alertas
  - Dashboards para credores


**3. Produto estratégico**
  
  - Motores de timing
  - Recomendação de produtos
  - Simulações
  - Benchmarking setorial


**4. Infra crítica**

  - Layer obrigatório para crédito PJ
  - Embedded decisioning
  - APIs de recomendação  



**Extrações:**
- Inteligência operacional
- Timing financeiro
- Orquestração de produtos
- Perfis de empresas
- Benchmarking setorial
- Previsão de eventos financeiros
- Redução de CAC bancário
- Aumento de conversão
- Redução de inadimplência



## Método
### Hipótese central

“Se eu tiver dados financeiros operacionais padronizados de empresas, posso simular milhares de futuros financeiros plausíveis e medir risco, retorno e probabilidade de eventos.”
 - *método Monte Carlo*

 ### Comparação
 Atual (s/ método) bancos e credores fazem:

- análise pontual (foto do passado)

- regras fixas (thresholds)

- muito over-reject (nega crédito bom)

- spreads altos para compensar incerteza

*modelos machine learning aprendendo com o que aconteceu apenas.*


Aplicado (c/ método) evolui:

- análise distribucional (cenários futuros)

- precificação baseada em probabilidade

- concessão de crédito mais fina

- redução de risco sistêmico

*modelos de machine learning melhorados e aprimorados com mais parâmetros de decisão e váriaveis aplicadas, com possível evolução baseada em "ocasiões futuras".*


## Arquitetura (camadas)

```mermaid
ERP / Sistemas da Empresa
   ↓
Infra de Dados 
   ↓
Normalização + Séries Temporais
   ↓
Modelos Estatísticos
   ↓
SIMULAÇÃO MONTE CARLO *
   ↓
Métricas de Risco / Crédito / Preço
   ↓
Decisão do Credor
```

```mermaid
[ ERPs / Sistemas Operacionais ]
                ↓
      Camada de Integração
                ↓
      Camada de Dados Padronizados
                ↓
      Camada de Inteligência
                ↓
      Camada de Decisão
                ↓
      Camada de Orquestração de Capital
```

## Fluxo 
```mermaid
ERP A  ─┐
ERP B  ─┼─▶ Conectores ─▶ Data Lake ─▶ API Padronizada
ERP C  ─┘
```

```mermaid
API de Dados → Motor de Métricas → API de Indicadores
```

```mermaid
Dados históricos
      ↓
Feature engineering
      ↓
Clustering / classificação
      ↓
Company Profile API
```

```mermaid
Perfis + Séries Temporais
           ↓
Modelos (ML / estatísticos)
           ↓
API de Insights & Triggers
```
*sugestão com contexto*

```mermaid
Empresa X:
• Crescimento ↑
• Caixa ↓
• Produção estável

→ Recomendar:
Capital de giro + prazo flexível
```
```mermaid
Tempo →
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ Infra  │→│ Dados  │→│ Perfis │→│ Timing │→│ Orques │
│ APIs   │ │ Métr.  │ │ Empresa│ │ Decisão│ │ Capital│
└────────┘ └────────┘ └────────┘ └────────┘ └────────┘
 Commodity        ↑            ↑            ↑
                  Diferencial     Moat        Infra crítica

```

## Como se conecta
```mermaid
Dados das Empresas
(financeiros + operacionais)
        ↓
Modelos de Risco
        ↓
Cálculo de Capital (Basileia)
        ↓
ICAAP (capital adequado)
        ↓
ILAAP (liquidez adequada)
        ↓
Stress Tests e Cenários
        ↓
Relatórios ao Banco Central
```

## Váriaveis Monte Carlo
**Financeiras**

- Receita mensal

- Margem operacional

- EBITDA

- Fluxo de caixa livre

- Endividamento

- Juros pagos


**Operacionais**

- Ciclo financeiro

- Inadimplência de clientes

- Sazonalidade

- Concentração de receita


**Exógenas**

- Taxa Selic

- Preço de commodities

- Inflação

- Câmbio


## Exemplo
**Antes (modelo clássico)**

- Empresa tem score 650 → risco médio 
- Juros: 3,2% a.m. 
- Crédito negado se score < corte


**Depois (M.C)**

- Prob(Default 12m) = 2,8%
- P95 de caixa = positivo
- Stress test suportado

      ➡️ Crédito aprovado
      ➡️ Juros ajustados para 2,1% a.m.
      ➡️ Menor inadimplência
      ➡️ Maior conversão


## Métricas M.T
| Métrica                 | O que mede                     |
| ----------------------- | ------------------------------ |
| **PD forward-looking**  | Default futuro, não passado    |
| **Value at Risk (VaR)** | Perda máxima esperada          |
| **Expected Loss (EL)**  | PD × LGD × EAD                 |
| **Stress resilience**   | Resposta a choques             |
| **Capital econômico**   | Quanto capital o banco precisa |


## Mercado
### Empresas (IBGE / Sebrae)

Empresas ativas no Brasil: ~21 milhões

PMEs (até médio porte): ~6,5 milhões

PMEs formalizadas com CNPJ ativo: ~4,5 milhões


### Adoção de ERP (estudos Sebrae + mercado)
| Segmento                | % usa ERP                      |
| ----------------------- | ------------------------------ |
| **Indústria**           | 65–75%                         |
| **Agroindústria**       | 55–65%                         |
| **Serviços**            | 35–45%                         |
| **Comércio**            | 30–40%                         |
| **Capital econômico**   | Quanto capital o banco precisa |

*Média ponderada PMEs: ~42%*

Base potencial com dados estruturáveis hoje:
```mermaid
4,5M × 42% ≈ 1,89 milhão de empresas
```

## Vertical Inicial
**Infra Pura -> Banco First**

```mermaid
EV = TAM × Adoção × Ticket × Conversão
```

Indústria:
- Empresas: ~450 mil
- ERP: 70%
- Base: 315 mil
- Ticket potencial (dados + insights): R$ 400/mês
- Conversão inicial: 0,2%

```mermaid
EV ≈ 315.000 × 0,002 × 400 × 12
EV ≈ R$ 302 milhões / ano (TAM ajustado)
```

```mermaid
Fase 1: Banco-first + Indústria
Fase 2: Expandir perfis e timing
Fase 3: Abrir produtos empresa-first
```


## P&L FINAL — ANO 1
|                         |                  |
| ----------------------- | -----------------|
| **Receita**             | R$ 2.160.000     |
| **(-) Pessoas**         | R$ 936.000       |
| **(-) Infra**           | R$ 264.000       |
| **(-) Comercial/Jurídico**| R$ 180.000     |
| **EBITIDA**             | R$ 780.000       |
|**Margem EBITIDA**       | ~36%             |


## Tese 
O crédito PJ no Brasil sofre de assimetria de informação operacional.
Quem resolver isso captura valor antes da inadimplência, não depois.

**Levantamento:**
- Inadimplência PJ média: 5–8%
- Over-reject estimado: 20–30%
- Spread alto para compensar risco mal precificado

**Infraestrutura neutra:**
- estrutura dados operacionais + financeiros
- permite análise probabilística futura
- melhora decisão sem competir com o banco

**Mercado**
- Crédito PJ Brasil: ~R$ 3,5 trilhões
- Receita capturável (0,2%): R$ 7 bilhões
- Mercado ainda fragmentado e não padronizado

**Moat**
- Lock-in técnico
- Dados históricos acumulados
- Modelos proprietários
- Switching cost alto

## Simulação 
```mermaid
Carteira crédito PJ: R$ 1 bilhão
Inadimplência atual: 6%
Perda anual = 60 milhões
```

**Impacto Solução (conservador)**

*Estudos de credit analytics mostram:*
- +10 a 20% acurácia → −15 a 30% inadimplência

```mermaid
Nova inadimplência = 6% × (1 − 0,20) = 4,8%
Nova perda = 48 milhões
```
**Economia Anual**
```mermaid
60M − 48M = 12 milhões
```

**Fórmula aplicada:**
```mermaid
Savings = Portfolio × DefaultRate × Reduction%
```


## MERCADO, FLUXO FINANCEIRO E MARKET SHARE

### Mercado de Crédito e Produtos Financeiros PJ no Brasil
**Crédito PJ – estoque total**

*Fontes consolidadas (BCB, IF.Data, Febraban):*

- **Crédito total PJ Brasil (2024/2025):**
 - ≈ R$ 3,5 trilhões

 - Indústria: ~38%

 - Comércio: ~27%

 - Serviços: ~25%

 - Agro: ~10%

*Crédito PJ ≈ R$ 3,5 tri*

### Fluxo anual de novas concessões (originação)

O crédito PJ gira em média **1,4–1,6x o estoque/ano** (renovações, capital de giro, antecipações).
*Originação anual ≈ 3,5T × 1,5 ≈ R$ 5,25 trilhões/ano*

Esse é o **volume sobre o qual decisões de crédito são tomadas anualmente**.


## Posição bancos e fintechs (BS2 / PJ)

**Produtos financeiros PJ mais relevantes**

| Produto                   | Receita para o credor |
| ------------------------- | --------------------- |
| Capital de giro           | Spread + tarifas      |
| Antecipação de recebíveis | Deságio               |
| Conta digital PJ          | Float + serviços      |
| Crédito estruturado       | Fee + juros           |
| Leasing / Finame          | Spread                |
| Trade finance             | Fee + câmbio          |



### Spread médio PJ (Brasil)
*Dados Febraban / BCB:*

- Spread médio PJ: 6% a 12% a.a.

- Pequenas empresas: até 18–22% a.a.

- Parte disso é prêmio de incerteza, não risco real.


### Receita anual do sistema com crédito PJ

Modelo simplificado:

`Receita ≈ Originação x Spreadmédio`

Assumindo spread conservador de 8%:
`Receita ≈ 5,25T × 8`

**Essa receita depende diretamente da qualidade da decisão de crédito.**

## Ineficiência Estrutural

Estudos de credit analytics (McKinsey, BIS, Accenture):

- Over-reject: 20–30%

- Underpricing: crédito bom com juros altos

- Default evitável: 15–30%

Isso ocorre por:

- Dados incompletos

- Análise retrospectiva

- Falta de visão operacional

## Infra de Dados (entra economicamente)
**Valor gerado por carteira típica**

*Carteira = R$ 1 bilhão Default atual = 6% Perda = 60 milhões*

Redução conservadora via dados + simulação:
   
   `ΔDefault = 20Novaperda = 48milhõesEconomia = 12milhões/ano` 

*Esse valor é recorrente, previsível e mensurável.*


## TAM, SAM e SOM (realistas)
**TAM – Crédito PJ analisável**

`TAM = R$ 5,25 trilhões/ano`

**SAM – Crédito onde dados operacionais importam**

`≈ 40% do total`
      
*SAM ≈ 2,1trilhões/ano*

## SOM – Market share capturável (infra)

Infra **não toma spread**, toma **bps do processo decisório**.

Assumindo **0,15% do volume analisado:**
*Receitapotencial = 2,1T × 0,15*

**Entrada conservadora (Ano 1–3)**
Assumindo:
- 0,5% do SAM
- Ticket médio anual por credor: R$ 500k

`SOM inicial ≈ R$ 15–30 milhões/ano`

O mercado já movimenta trilhões.
O erro custa bilhões.
A infraestrutura captura valor antes da perda.

