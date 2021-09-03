const server = require('./app');

const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

server.listen(port, () => {
  console.log(`Servidor ouvindo em ${hostname}:${port}`);
});
