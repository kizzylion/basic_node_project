const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let filePath = path.join(
    __dirname,
    "/views/",
    req.url === "/" ? "index.html" : req.url + ".html"
  );

  console.log(filePath);

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      break;

    case "/about":
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    case "/contact":
      res.statusCode = 200;
      break;

    default:
      res.statusCode = 404;
      filePath = path.join(__dirname, "/views/404.html");
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
