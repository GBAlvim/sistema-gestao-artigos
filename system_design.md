```mermaid
┌────────────────────────────────────────────────────────────────────────┐
│                         USUÁRIO / NEGÓCIO                               │
│   Web | Desktop | Chatbot | Sistemas Corporativos                       │
│                                                                        │
│  • Web: React + Next.js (TypeScript)                                   │
│  • Desktop: Python + Streamlit                                         │
│  • Chatbot: WebChat / Integração via API                               │
└───────────────────────┬────────────────────────────────────────────────┘
                        │ HTTP / HTTPS
                        ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     BFF / API GATEWAY                                   │
│                                                                        │
│  • Linguagem: TypeScript / Java / C#                                   │
│  • Frameworks:                                                         │
│      - NestJS (Node.js)                                                 │
│      - Spring Boot (Java)                                               │
│      - ASP.NET Core (.NET)                                              │
│  • Protocolos: REST (principal) | GraphQL (quando necessário)          │
│  • Funções:                                                            │
│      - Autenticação (JWT / OAuth2)                                     │
│      - Autorização                                                      │
│      - Enriquecimento de contexto                                      │
└───────────────────────┬────────────────────────────────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  ORQUESTRADOR DE IA (CORE)                              │
│                                                                        │
│  • Linguagem: Java (Spring Boot) ou Node.js (NestJS)                   │
│  • Responsabilidades:                                                   │
│      - Validação de contexto de negócio                                 │
│      - Aplicação de regras críticas                                     │
│      - Decisão de abordagem: Rule | ML | LLM | RAG                      │
│      - Governança e controle de custo                                   │
│                                                                        │
│  • Integrações síncronas (REST/gRPC)                                   │
│  • Publicação de eventos (Kafka / PubSub)                              │
└───────────────┬───────────────────────┬────────────────────────────────┘
                │                       │
                │                       │
                ▼                       ▼
┌──────────────────────────┐    ┌────────────────────────────────────────┐
│        RULE ENGINE       │    │             ML SERVICES                  │
│                          │    │                                        │
│ • Linguagem: Java / Node │    │ • Linguagem: Python                      │
│ • Framework:             │    │ • Libs: Scikit-Learn, XGBoost            │
│   - Regras no código     │    │ • Exposição: REST API                    │
│ • Casos:                 │    │ • Função:                                │
│   - Compliance           │    │   - Classificação                         │
│   - Segurança            │    │   - Score / Fraude                       │
└──────────────┬───────────┘    └───────────────┬────────────────────────┘
               │                                 │
               │                                 │
               ▼                                 ▼
        ┌────────────────────────────────────────────────────────┐
        │                   LLM + RAG LAYER                       │
        │                                                        │
        │ • Linguagem: Python                                     │
        │ • Frameworks:                                           │
        │     - FastAPI (serviço de IA)                           │
        │     - LangChain / pipelines customizados                │
        │                                                        │
        │ ┌────────────────────────────────────────────────────┐ │
        │ │         VECTOR DATABASE (Embeddings)                │ │
        │ │  • FAISS / Chroma / similar                          │ │
        │ └───────────────┬────────────────────────────────────┘ │
        │                 │                                      │
        │ ┌───────────────▼────────────────────────────────────┐ │
        │ │               KNOWLEDGE BASE                         │ │
        │ │  • Documentos versionados                            │ │
        │ │  • Políticas, processos, contratos                   │ │
        │ │  • Storage: S3 / GCS / File Storage                  │ │
        │ └────────────────────────────────────────────────────┘ │
        └───────────────┬────────────────────────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   EVENT / STREAM LAYER                                 │
│                                                                        │
│ • Apache Kafka / Google PubSub                                         │
│ • Eventos:                                                            │
│   - Requisição recebida                                                │
│   - Engine utilizada                                                   │
│   - Tempo de resposta                                                  │
│   - Resultado                                                         │
└───────────────┬───────────────────────┬────────────────────────────────┘
                │                       │
                │                       │
                ▼                       ▼
┌──────────────────────────┐    ┌────────────────────────────────────────┐
│        DATA LAKE          │    │            MONITORAMENTO                │
│                          │    │                                        │
│ • GCS / S3                │    │ • Prometheus                            │
│ • Databricks              │    │ • Grafana                               │
│ • Dados Raw / Curated     │    │ • Logs / Métricas / Custos              │
└───────────────┬───────────┘    └───────────────┬────────────────────────┘
                │
                ▼
        ┌────────────────────────────────────────────────────────┐
        │                     BI / KPIs                          │
        │                                                        │
        │ • BigQuery                                             │
        │ • Dashboards (Looker / similares)                      │
        │ • Métricas de impacto no negócio                       │
        └────────────────────────────────────────────────────────┘


```