const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Welcome to website");
});

// export
module.exports = router;
