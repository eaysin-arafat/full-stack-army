const userService = require("../service/user");
const error = require("../utils/error.js");
const authService = require("../service/auth");

const getUsers = async (req, res, next) => {
  console.log("req.url", req.url);
  // TODO: filter, sort, pagination, select

  try {
    const users = await userService.findUsers();
    console.log(users, "user");
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const getUserByID = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;

  try {
    const user = await authService.registerService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });

    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};

const putUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, email, roles, accountStatus } = req.body;

  try {
    const user = await userService.updateUser(userId, {
      name,
      email,
      roles,
      accountStatus,
    });

    if (!user) throw error("User not found", 404);

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const patchUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, accountStatus } = req.body;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) throw error("User not found", 404);

    user.name = name ?? user.name;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;

    await user.save();
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    await user.deleteOne();

    console.log("user deleted", user.isDeleted);
    return res.status(203).send();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUsers,
  getUserByID,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
