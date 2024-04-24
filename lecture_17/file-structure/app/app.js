require("dotenv").config("../.env");
const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const { errorHandler, notFoundHandler } = require("./error");

const app = express();

const myDb = require("../db/db");
myDb.create("usera", 10);
myDb.create("userb", 10);
myDb.create("userc", 10);
myDb.create("userd", 10);
myDb.create("usere", 10);
myDb.create("userf", 10);
myDb.create("userg", 10);
myDb.create("userh", 10);

myDb.bulkCreate("useri", 10, 2);
const tickets = myDb.find();
console.log("tickets", tickets);

const winners = myDb.draw(3);
console.log("winners", winners);

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
