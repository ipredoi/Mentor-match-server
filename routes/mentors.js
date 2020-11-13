const express = require("express");
const router = express.Router();

const {
  readDataFromMentorsTable,
  addToMentorsTable,
  getMentorsById,
} = require("../Models/index");

router.get("/", async function (req, res) {
  const result = await readDataFromMentorsTable();
  res.json({ message: "received on the mentors", result });
});

router.get("/:id", async function (req, res) {
  let result = await getMentorsById(req.params.id);
  res.json({ message: "received on the mentors", result });
});

router.post("/", async function (req, res) {
  let result = await addToMentorsTable(req.body);
  res.json({ success: true, payload: result });
});

module.exports = router;
