# Clarke Challenge Frontend

## Objetivo do Repositório

Este projeto foi desenvolvido como parte de um desafio técnico para a posição de Desenvolvedor Fullstack na Clarke Energia. O objetivo é criar uma aplicação web que permita aos usuários consultar fornecedores de energia elétrica com base no consumo mensal informado. O sistema deve retornar uma lista de fornecedores que podem atender à necessidade do usuário, juntamente com informações detalhadas sobre cada fornecedor.

## Requisitos do Projeto

- **Entrada de Dados**: O usuário deve informar seu consumo mensal de energia (em kWh).
- **Listagem de Fornecedores**: Com base no consumo informado, o sistema deve listar os fornecedores que podem atender ao cliente, considerando o limite mínimo de kWh de cada fornecedor.
- **Informações do Fornecedor**: Para cada fornecedor, o sistema deve exibir as seguintes informações:
  - Nome
  - Logo
  - Estado de origem
  - Custo por kWh
  - Limite mínimo de kWh
  - Número total de clientes
  - Avaliação média dos clientes

## Tecnologias Utilizadas

### Frontend

- **React** com **TypeScript**
- **Vite** (ferramenta de build)
- **TailwindCSS** (estilização)
- **ShadCN UI** (componentes de interface)
- **React Hook Form** (gerenciamento de formulários)
- **Zod** (validação de schemas)
- **Apollo Client** (cliente GraphQL)
- **Redux** (gerenciamento de estado)
- **Cypress** (testes end-to-end)

### Infraestrutura e Testes

- **Docker**
- **Docker Compose**
- **Vercel** (deploy)

## Manual de Utilização

### Pré-requisitos

- Docker
- Docker Compose

### Instalação e Configuração

1. **Clone o Repositório:**

   ```sh
   git clone https://github.com/bnelce/clarke-challenge-frontend.git
   cd clarke-challenge-frontend
   ```

2. **Iniciar o Projeto com Docker Compose**

   ```sh
   docker-compose up
   ```

   Isso irá iniciar os serviços definidos no `docker-compose.yml`, incluindo o aplicativo frontend.

3. **Acessar a aplicação**

   A aplicação estará disponível em [http://localhost:3000/](http://localhost:3000/).

### Testes

Para executar os testes end-to-end com Cypress, utilize o seguinte comando:

```sh
docker-compose exec frontend npm run cypress:open
```

Isso abrirá a interface do Cypress, onde você pode executar os testes.

## Deploy

O projeto está hospedado na Vercel e pode ser acessado através do seguinte link: [https://clarke-challenge-frontend-ifid.vercel.app/lead](https://clarke-challenge-frontend-ifid.vercel.app/lead).
