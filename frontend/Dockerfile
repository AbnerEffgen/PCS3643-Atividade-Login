# Define a imagem base
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de manifesto de pacotes
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências. Esta camada será cacheada pelo Docker.
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Expõe a porta que o react-scripts usa
EXPOSE 3000

# O comando padrão para iniciar a aplicação
CMD ["npm", "start"]