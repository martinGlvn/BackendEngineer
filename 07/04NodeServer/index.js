const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/" || url === "/home") {
    res.end("Hi");
  } else if (url === "/about") {
    res.end("Hello about");
  } else {
    res.writeHead(404, {
      "Cotent-Type": "text/html",
    });
    res.end("This route not exist");
  }
});
server.listen(8080);
