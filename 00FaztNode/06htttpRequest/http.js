const http = require("http");

//
http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.write("welcome to the server");
      return response.end();
    }
    if (request.url === "about") {
      response.write("about me");
      return response.end();
    }
    response.write("Not found");
    response.end();
  })
  .listen(3000);
console.log("my first sv");
