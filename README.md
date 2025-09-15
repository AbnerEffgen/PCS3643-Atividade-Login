# Integrantes do Grupo
- **Ábner Effgen de Almeida** (13676691)
- **Túlio Fogaça Panza** (14609940)

# Aplicação de Login (React + Node.js + PostgreSQL)

Este projeto é uma aplicação web full-stack simples que implementa um sistema de registro e login de usuários.

-   **Frontend:** React
-   **Backend:** Node.js com Express
-   **Banco de Dados:** PostgreSQL

A aplicação é totalmente containerizada usando Docker e orquestrada com Docker Compose.

## Pré-requisitos

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/) (geralmente incluído na instalação do Docker Desktop)

## Como Executar

1.  Clone este repositório para a sua máquina local.
2.  Navegue até o diretório raiz do projeto pelo terminal.
3.  Execute o seguinte comando para construir as imagens e iniciar os contêineres em modo detached (segundo plano):

    ```bash
    docker-compose up -d --build
    ```

## Acesso

Após a execução do comando, os serviços estarão disponíveis nos seguintes endereços:

-   **Aplicação Frontend:** [http://localhost:3001](http://localhost:3001)
-   **API Backend:** `http://localhost:5000`
-   **Banco de Dados (PostgreSQL):** `localhost:5432`

Para começar, abra seu navegador e acesse **http://localhost:3001**.