const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/server');

test('GET / responde Hello World', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  t.after(() => server.close());

  const response = await fetch(`http://localhost:${server.address().port}/`);

  assert.strictEqual(response.status, 200);
  assert.strictEqual(await response.text(), 'Hello World\n');
});
