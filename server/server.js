const express = require("express");
const path = require("path");
const app = express();

const indexRoute = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);

app.listen(3000);

module.exports = app;
