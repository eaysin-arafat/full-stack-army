const router = require("express").Router();
const userController = require("..//controller/users");

// get user by id
router.get("/:userId", userController.getUserByID);

// update user by id
router.put("/:userId", userController.putUserById);

// update user by id
router.patch("/:userId", userController.patchUserById);

// delete user by id
router.delete("/:userId", userController.deleteUserById);

/**
 * Get all users, include
 *  - Filter
 *  - sort
 *  - pagination
 *  - select properties
 *  @route /api/v1/users?sort=["by","name"]
 *  @method Get
 *  @visibility Private
 */
router.get("/", userController.getUsers);

// create a user
router.post("/", userController.postUser);

module.exports = router;
