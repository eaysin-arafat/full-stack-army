const express = require("express");
const connectDB = require("./db");
const authenticate = require("./middleware/authenticate");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

app.get("/private", authenticate, async (req, res) => {
  console.log("user", req.user);

  return res.status(200).json({ message: "private" });
});

app.get("/public", (_req, res) => {
  return res.status(200).json({ message: "public" });
});

app.use((error, req, res, next) => {
  const message = error.message ? error.message : "Server Error Occurred";

  const status = error.status ? error.status : 500;
  res.status(status).json({ message });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");
    app.listen(4000, () => {
      console.log("I am listining");
    });
  })
  .catch((error) => console.log(error));
