# Imagem base
FROM node:25

# Diretório da aplicação
WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia apenas arquivos de dependência primeiro (cache inteligente)
COPY package.json pnpm-lock.yaml* ./

# Instala dependências
RUN pnpm install

# Copia o restante do projeto
COPY . .

# Expõe a porta do Next.js
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

# Comando padrão
CMD ["pnpm", "dev"]