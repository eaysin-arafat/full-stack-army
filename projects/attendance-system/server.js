const express = require("express");
const bcrypt = require("bcryptjs");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();
app.use(express.json());

app.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Invalid Data" });

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exist" });

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;

    await user.save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (e) {
    next(e);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credential" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ message: "Invalid Credential" });

    delete user._doc.password;

    return res.status(200).json({ message: "Login Successful", user });
  } catch (e) {
    next(e);
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Server Error Occured" });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");
    app.listen(4000, () => {
      console.log("I am listining");
    });
  })
  .catch((error) => console.log(error));
