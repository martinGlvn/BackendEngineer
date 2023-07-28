const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("hi");
});

server.listen(0, () => {
  console.log(`server listen port : http://localhost:${server.address().port}`);
});
