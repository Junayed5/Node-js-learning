const http = require("http");

const data = [
    {
        id: 1,
        name: "junayed",
        age: 23
    },
    {
        id: 2,
        name: "bayjid",
        age: 23
    },
    {
        id: 3,
        name: "neser",
        age: 23
    },
]

const server = http.createServer((req, res) => {
  // console.log({req, res})
  // res.end("Welcome to to-do app");
  if (req.url === "/") {
    res.end("Welcome to to-do app");
  } else if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, "All Todos", {
        // "content-type": "text/html"
        "content-type": "application/json"
    })
    res.end(JSON.stringify(data));
    // res.end(`<h1>Hello Mother fuller</h1>`);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo created");
  } else {
    res.statusCode = 404
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✔️ Server listening port 5000");
});

/**
 * All Todos - GET - /todos
 * Post Todo - POST - /todos/create-todo
 */
