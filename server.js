const http = require('http');
const static = require('node-static');

const PORT = process.env.NODE_HTTP_PORT || 8080;
const HTTP_ROOT = process.env.NODE_HTTP_ROOT || './';

const staticRouter = new static.Server(HTTP_ROOT);
const server = http.createServer((req, resp) => {
  req.addListener('end', () => staticRouter.serve(req, resp));
  req.resume();
});

server.listen(PORT, () => {
  console.log('Static HTTP server started on port %s...', PORT);
});
