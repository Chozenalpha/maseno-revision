const router = require("express").Router();
const Paper = require("../models/Paper");

router.post("/", async (req, res) => {
  const paper = new Paper(req.body);
  await paper.save();
  res.json(paper);
});

router.get("/", async (req, res) => {
  const papers = await Paper.find();
  res.json(papers);
});

module.exports = router;
