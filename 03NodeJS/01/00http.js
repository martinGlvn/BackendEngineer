// HyperTextTransferProtocol =>
const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.end("response");
});

// GET - POST - PUT - DELETE =>

server.listen(port, () => {
  console.log("🔋 on 🔋");
});
