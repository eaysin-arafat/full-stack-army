const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./swagger.yaml");

// express app
const app = express();
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/health", (_req, res) => {
  res.status(200).json({ health: "OK" });
});

app.get("/api/v1/articles", (req, res) => {
  res.status(200).json({ path: "/articles", method: "get" });
});

app.post("/api/v1/articles", (req, res) => {
  res.status(200).json({ path: "/articles", method: "get" });
});

app.put("/api/v1/articles", (req, res) => {
  res.status(200).json({ path: "/articles", method: "put" });
});

app.patch("/api/v1/articles", (req, res) => {
  res.status(200).json({ path: "/articles", method: "patch" });
});

app.delete("/api/v1/articles", (req, res) => {
  res.status(200).json({ path: "/articles", method: "delete" });
});

app.post("/api/v1/auth/signup", (req, res) => {
  res.status(200).json({ path: "/articles", method: "post" });
});

app.post("/api/v1/auth/signin", (req, res) => {
  res.status(200).json({ path: "/articles", method: "post" });
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});
