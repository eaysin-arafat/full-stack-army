const express = require("express");

const app = express();

const firstMiddleware = (req, res, next) => {
  console.log(`${req.url} => ${req.method} => ${new Date().toISOString()}`);
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("i am second middlewire");
  next();
};

app.get("/", firstMiddleware, secondMiddleware, (req, res, next) => {
  res.json({ message: "middleware is working" });
});

app.listen(5654, () => {
  console.log("app running");
});
