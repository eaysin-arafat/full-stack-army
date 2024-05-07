const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "min length 3"],
    maxlength: [10, "max length 10"],
  },
  email: String,
  age: Number,
  status: Boolean,
  bio: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect("mongodb://localhost:27017/project-mongo")
  .then(async () => {
    console.log("Database Connected");

    const person = new Person({ name: "rocky" });
    await person.save();

    const people = await Person.find({ name: "rocky" });
    console.log(people);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    mongoose.connection.close();
  });
