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

1. roda o teste da aplicação;
2. cria a imagem Docker;
3. roda um teste de carga no container (1000 requisições, 50 simultâneas);
4. publica a imagem no GitHub Container Registry.

```sh
npm run test:load
```

Para baixar e rodar a imagem publicada:

```sh
docker run --rm -p 3000:3000 ghcr.io/pedroant06/javascript-helloword:latest
```