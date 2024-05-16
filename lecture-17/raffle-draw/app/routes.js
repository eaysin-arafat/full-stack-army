const routes = require("express").Router();

routes.use("/api/v1/tickets", require("../routes/ticket"));

routes.get("/health", (_req, res) => {
  res.status(200).json({ message: "success" });
});

module.exports = routes;
