const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')
const httpProxy = require('http-proxy')

const port = config.server_port

server.listen(port)
debug(`Server is now running at http://localhost:${port}.`)

// proxy to service
const proxy = httpProxy.createProxyServer();
server.use((req, res) => {
  console.log('proxy path: ', req.path);
  proxy.web(req, res, { target: 'http://localhost:3000' });
})
