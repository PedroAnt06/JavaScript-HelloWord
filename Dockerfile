# Imagem base que já vem com o Node.js
FROM node:24-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia o código para dentro do container
COPY src ./src

# Porta usada pela aplicação
EXPOSE 3000

# Comando que inicia a aplicação
CMD ["node", "src/server.js"]
