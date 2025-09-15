# Integrantes do Grupo
- **Ábner Effgen de Almeida** (13676691)
- **Túlio Fogaça Panza** (14609940)

> **Aviso Importante**
> Este projeto foi desenvolvido para fins acadêmicos. Ele não segue boas práticas de segurança e não deve ser utilizado em um ambiente de produção. Funcionalidades como armazenamento seguro de senhas e gerenciamento de sessão foram intencionalmente simplificadas.

# Aplicação de Login (React + Python/FastAPI + PostgreSQL)

Este projeto é uma aplicação web full-stack simples que implementa um sistema de registro e login de usuários.

-   **Frontend:** React
-   **Backend:** Python com FastAPI e SQLAlchemy
-   **Banco de Dados:** PostgreSQL

A aplicação é totalmente containerizada usando Docker e orquestrada com Docker Compose.

## Pré-requisitos

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Como Executar

1.  Clone este repositório para a sua máquina local.
2.  Navegue até o diretório raiz do projeto pelo terminal.
3.  Execute o seguinte comando para construir as imagens e iniciar os contêineres:

    ```bash
    docker-compose up --build
    ```
    Para rodar em segundo plano, utilize a flag `-d`.

## Acesso

Após a execução do comando, os serviços estarão disponíveis nos seguintes endereços:

-   **Aplicação Frontend:** [http://localhost:3001](http://localhost:3001)
-   **Documentação da API Backend:** [http://localhost:8000/docs](http://localhost:8000/docs)
-   **Banco de Dados (PostgreSQL):** `localhost:5432`

Para parar a aplicação, execute `docker-compose down` no terminal.