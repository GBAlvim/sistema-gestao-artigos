<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Sistema de Gestão de Artigos (API)

API RESTful desenvolvida com **NestJS**, **Prisma ORM** e **Docker** para gerenciamento de usuários e artigos com controle de acesso baseado em cargos (RBAC).

## Stack Tecnológica

* **Framework:** NestJS (v10) - Estrutura modular e injeção de dependência.
* **Database:** PostgreSQL (Produção/Docker) / SQLite (Fallback Dev).
* **ORM:** Prisma ORM.
* **Auth:** JWT (JSON Web Token) + Passport.
* **Validation:** Class-validator & Class-transformer.
* **Documentation:** Swagger (OpenAPI).
* **Containerization:** Docker & Docker Compose.
* **Tests:** Jest (Unitários e E2E).

## Decisões Arquiteturais

* **RBAC (Role-Based Access Control):** Implementado via Decorators customizados (`@Roles`) e Guards Globais (`RolesGuard`), garantindo que a segurança seja declarativa e centralizada.
* **Autenticação:** Estratégia JWT com validação de token e "blindagem" de rotas sensíveis via `JwtAuthGuard`.
* **Database Agnostic:** O projeto utiliza Prisma, permitindo fácil troca de drivers de banco de dados.
* **DTOs & Validação:** Todos os inputs são validados estritamente para garantir a integridade dos dados antes de chegarem aos Services.
* **Docker Healthcheck:** O `docker-compose` foi configurado com healthchecks para garantir que a API só inicie após o banco de dados estar totalmente operante, evitando *race conditions*.


## Como Rodar o Projeto

Existem duas formas de executar a aplicação. A **recomendada para avaliação** é via Docker.

### Opção 1: Docker Compose (Recomendado)
Ambiente completo (API + Banco de Dados PostgreSQL) configurado automaticamente.

1.  Certifique-se de ter o Docker e Docker Compose instalados.
2.  Na raiz do projeto, execute:

```bash
docker compose up --build
```
---

### Opção 2: Execução Local (Manual)
Caso prefira rodar a aplicação localmente sem utilizar o Docker Compose:

1.  Instale as dependências (raiz):

```bash
npm install
```

2.  Configuração de Banco de Dados:
O projeto está configurado por padrão para PostgreSQL (para atender ao Docker). Para rodar localmente de forma simples (sem instalar um Postgres na sua máquina), altere o arquivo prisma/schema.prisma:
  - De: provider = "postgresql"
  - Para: provider = "sqlite"

3. Gere o banco de dados local e execute as migrações:

```bash
npx prisma migrate dev --name init
```

4. Inicie a aplicação:

```bash
npm run start:dev
```
---

## Documentação e Acesso
Após a aplicação iniciar (seja via Docker ou Local), você terá acesso aos seguintes recursos:
 - **Swagger UI (Documentação Interativa):** http://localhost:3000/api
 - **Credenciais de Acesso (Seed):** O sistema cria automaticamente um usuário administrador ao iniciar:
  - **Email:** root@sistema.com
  - **Senha:** root123
  - *Utilize estas credenciais no endpoint `POST /auth/login` para obter o Bearer Token*.


## Testes
Para garantir a integridade do código, execute os testes unitários e E2E:

```bash
# Testes unitários
npm run test

# Testes E2E (Ponta a ponta)
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Licença
Este projeto é MIT licensed.