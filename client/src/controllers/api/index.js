const router = require("express").Router();
const userRoutes = require("./userRoutes");
const { User } = require("../../models/User");
const path = require("path");

router.use("/users", userRoutes);

module.exports = router;