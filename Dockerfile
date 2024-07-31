# Etapa de construção
FROM node:18 AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração e de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código-fonte
COPY . .

# Construir a aplicação
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copiar os arquivos de construção para o diretório de conteúdo estático do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
