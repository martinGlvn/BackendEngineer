const http = require("http");

// port
const desiredPort = 1234;

// sv
const server = http.createServer((req, res) => {
  console.log("req received", req.url);
  res.end("hi");
});

// listen sv
server.listen(desiredPort, () => {
  console.log(`sv listen on port ${desiredPort}`);
});
