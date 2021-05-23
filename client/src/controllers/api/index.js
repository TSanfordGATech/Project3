const router = require("express").Router();
const userRoutes = require("./userRoutes");
const { User } = require("../../../models/User");
const path = require("path");
// const apiRoutes = require("../api");

router.use("/users", userRoutes);

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;