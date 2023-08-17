const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  //
  res.writeHead(200, { "Content-Type": "application/json" });
  //

  const me = {
    age: 15,
    name: "jaj",
  };
  res.write(me);
  res.end();
});
server.listen(PORT, () => {
  console.log(`running server on port ${PORT}`);
});
