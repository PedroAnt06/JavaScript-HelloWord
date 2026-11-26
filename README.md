# JavaScript Hello World

Servidor HTTP em Node.js que responde `Hello World`.

## Rodar localmente

Requer Node.js 24 ou superior.

```sh
npm start
npm test
```

Acesse http://localhost:3000.

## Docker

```sh
docker build -t hello-world .
docker run --rm -p 3000:3000 hello-world
```

## Deploy

A cada push na `main`, o workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. baixa o código;
2. faz login no GitHub Container Registry;
3. cria a imagem Docker e a publica.

Para baixar e rodar a imagem publicada:

```sh
docker run --rm -p 3000:3000 ghcr.io/pedroant06/javascript-helloword:latest
```

Se o pacote estiver privado, faça antes `docker login ghcr.io`.
