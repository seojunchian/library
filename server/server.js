const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

const indexRoute = require("./routes/indexRoute");
app.use("/", indexRoute);

const addRoute = require("./routes/addRoute");
app.use("/add", addRoute);

const booksRoute = require("./routes/booksRoute");
app.use("/books", booksRoute);

const getAllDataRoute = require("./routes/getAllDataRoute");
app.use("/getAllData", getAllDataRoute);

app.listen(3000);

module.exports = app;
