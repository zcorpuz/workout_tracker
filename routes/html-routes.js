const router = require("express").Router();
const path = require("path");

//HomePage Route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

//Exercises Route
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Stats Route
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;