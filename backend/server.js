const express = require("express");
const app = express();

app.listen("127.0.0.1:5500/client");

app.get("/", (req, res) => {
    res.json({asd: "asd"}).send("a");
});