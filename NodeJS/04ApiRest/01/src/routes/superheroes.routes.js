const { Router } = require("express");

const router = Router;

router.get("/", (req, res) => {
  res.json({ message: "get request" });
});
router.get("/:sid?type=heroes&powers=flight", (req, res) => {
  const { sid } = req.params;
  const { type } = req.querys;
  res.json({ message: "get request", sid, type });
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
