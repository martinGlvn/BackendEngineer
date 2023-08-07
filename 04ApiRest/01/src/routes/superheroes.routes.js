const { Router } = require("express");

const router = Router;

router.get("/", (req, res) => {
  res.json({ message: "get request" });
});
router.post("/", (req, res) => {
  res.json({ message: "post request" });
});
router.put("/", (req, res) => {
  res.json({ message: "put request" });
});
router.delete("/", (req, res) => {
  res.json({ message: "delete request" });
});

export default router;
