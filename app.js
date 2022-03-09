const http = require("http");
require("dotenv").config();
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || "127.0.0.1";

const students = [
  {
    name: "John",
    age: 20,
    email: "dkjfl@gmail.com",
  },
  {
    name: "Dansi    ",
    age: 24,
    email: "kfkd@gmail.com",
  },
  {
    name: "Rajesh",
    age: 23,
    email: "rajesh@hotmail.com",
  },
];

const requestListener = function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  var url = req.url;

  if (url === "/") {
    res.write("<h1>Welcome to the home page</h1>");
  } else if (url === "/students") {
    console.table(students);
    res.write("Please see the console for the students lists");
    res.end();
  } else if (url === "/about") {
    res.write(" Welcome to about us page");
    res.end();
  } else if (url === "/contact") {
    res.write(" Welcome to contact us page");
    res.end();
  } else {
    res.write("Invalid url!");
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
