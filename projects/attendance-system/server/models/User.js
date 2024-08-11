const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (prop) => `invalid email ${prop.value}`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short"],
  },
  roles: {
    type: [String],
    required: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJECTED"],
    default: "PENDING",
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
