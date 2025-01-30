const http = require("http");

const server = http.createServer();

server.listen(8000, "localhost", () => {
  console.log("Server is started!");
});
