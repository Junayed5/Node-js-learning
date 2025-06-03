const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathName = url.pathname;

  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  if (pathName === "/") {
    res.end("Welcome to to-do app");
  } else if (pathName === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else if (pathName === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const allTodos = JSON.parse(data);

    const singleTodo = allTodos.find((todo) => todo.title === title);
    console.log(singleTodo);

    res.writeHead(200, "Single Todo", {
      "content-type": "application/json",
    });

    res.end(JSON.stringify(singleTodo));
  } else if (pathName === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const allTodos = JSON.parse(todos);
      const createdAt = new Date().toString();

      allTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✔️  Server listening port 5000");
});

/**
 * All Todos - GET - /todos
 * Post Todo - POST - /todos/create-todo
 */
