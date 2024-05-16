require("dotenv").config("../.env");
const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const { errorHandler, notFoundHandler } = require("./error");

const app = express();

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
