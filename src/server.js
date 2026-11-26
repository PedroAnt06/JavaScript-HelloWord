const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello World\n');
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  const server = createServer();

  server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

  // Permite que o `docker stop` encerre o processo sem esperar o timeout.
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => server.close(() => process.exit(0)));
  }
}

module.exports = { createServer };
