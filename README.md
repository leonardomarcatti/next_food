🍔 Snack Delivery App

Aplicação web de delivery de lanches desenvolvida com Next.js 16 e React 19, containerizada com Docker para facilitar o ambiente de desenvolvimento e execução.

O objetivo da aplicação é permitir que usuários naveguem pelo cardápio, escolham lanches e realizem pedidos de forma simples e rápida.

🚀 Tecnologias Utilizadas

React 19

Next.js 16

Docker

Node.js

JavaScript / TypeScript (opcional)

🚀 Tecnologias Utilizadas

React 19

Next.js 16

Docker

Node.js

JavaScript / TypeScript (opcional)


🚀 Tecnologias Utilizadas

React 19

Next.js 16

Docker

Node.js

JavaScript / TypeScript (opcional)


🐳 Executando com Docker
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/snack-delivery-app.git

Entre na pasta do projeto:

cd snack-delivery-app
2️⃣ Execute o container

Na pasta raiz do projeto execute:

docker compose up --build
3️⃣ Acesse a aplicação

Abra no navegador:

http://localhost:3000

A porta 3000 do host está mapeada para o container Docker.

📱 Funcionalidades

🍔 Listagem de lanches

🛒 Adicionar lanches ao carrinho

📦 Visualização de pedidos

⚡ Interface rápida usando Next.js

📱 Layout responsivo

⚙️ Variáveis de Ambiente

Caso o projeto utilize variáveis de ambiente, crie um arquivo:

.env.local

Exemplo:

NEXT_PUBLIC_API_URL=http://localhost:3000/api
🧑‍💻 Desenvolvimento

Para rodar sem Docker:

npm install
npm run dev

A aplicação estará disponível em:

http://localhost:3000
📌 Scripts
Script	Descrição
npm run dev	Inicia ambiente de desenvolvimento
npm run build	Gera build de produção
npm run start	Inicia aplicação em produção
📄 Licença

Este projeto está sob a licença MIT.