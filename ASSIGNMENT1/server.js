const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome");
  else if (req.url === "/about") res.end("About Page");
  else if (req.url === "/contact") res.end("Contact Page");
  else res.end("404 Not Found");
}).listen(3000);

console.log("Server started on port 3000");