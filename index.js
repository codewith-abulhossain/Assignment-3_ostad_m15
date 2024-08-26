let fs = require("fs");
let http = require("http");

// Create a server
let server = http.createServer(function (req, res) {
  //   if (req.url == "/") {
  //   } else if (req.url == "/about") {
  //   } else if (req.url == "/contact") {
  //   }
});

server.listen(5500, function () {
  console.log("The server is running on port 5500");
});
