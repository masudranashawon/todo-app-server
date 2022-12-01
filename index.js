const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middleWares = jsonserver.defaults();
const port = process.env.port || 5000;

server.use(middleWares);
server.use(router);
server.listen(port);
