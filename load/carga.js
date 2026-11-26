// Teste de carga simples: envia várias requisições e falha se alguma der erro.
const URL = 'http://localhost:3000/';
const TOTAL = 1000; // total de requisições
const SIMULTANEAS = 50; // quantas são enviadas ao mesmo tempo

async function requisicao() {
  try {
    const resposta = await fetch(URL, { signal: AbortSignal.timeout(5000) });
    const texto = await resposta.text();
    return resposta.ok && texto === 'Hello World\n';
  } catch {
    return false;
  }
}

async function main() {
  let erros = 0;
  const inicio = Date.now();

  // Envia as requisições em grupos
  for (let enviadas = 0; enviadas < TOTAL; enviadas += SIMULTANEAS) {
    const grupo = Array.from({ length: SIMULTANEAS }, requisicao);
    const resultados = await Promise.all(grupo);
    erros += resultados.filter((ok) => !ok).length;
  }

  const segundos = (Date.now() - inicio) / 1000;
  console.log(`Requisições: ${TOTAL}`);
  console.log(`Erros: ${erros}`);
  console.log(`Tempo: ${segundos.toFixed(2)}s`);

  // Código de saída 1 faz o workflow falhar
  if (erros > 0) process.exitCode = 1;
}

main();
