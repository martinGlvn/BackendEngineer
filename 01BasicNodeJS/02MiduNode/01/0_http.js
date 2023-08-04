const http = require("http");
const fs = require("node:fs");

// port
const desiredPort = 1234;

// sv
const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Welcome to my Website</h1>");
  } else if (req.url === "/jeje") {
    fs.readFile("./jeje.png", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Contact</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

// function as param
const server = http.createServer(processRequest);

// listen sv
server.listen(desiredPort, () => {
  console.log(`sv listen on port ${desiredPort}`);
});
