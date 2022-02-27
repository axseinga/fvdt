const express = require("express");
const userControllers = require("../controllers/userController");

const router = express.Router();
router
    .route("/")
    .post(userControllers.createUser)
    .get(userControllers.getAllUsers);
router
    .route("/:id")
    .get(userControllers.getUser)
    .delete(userControllers.deleteUser);

module.exports = router;
