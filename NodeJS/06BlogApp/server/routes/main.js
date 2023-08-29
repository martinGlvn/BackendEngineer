const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  const locals = {
    title: "Blog NodeJS",
    descrition: "description",
  };
  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

// export
module.exports = router;
