const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.send("<h1>Teste de rota!</h1>");
});

server.get("/home", (req, res) => {
    res.send("<h2>Home</h2>");
});

server.listen(3000, () => {
    console.log("Servidor online: http://localhost:3000");
});
