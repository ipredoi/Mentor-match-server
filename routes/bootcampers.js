const { query } = require("../db/index");

const {
  readDataFromBootcampersTable,
  addToBootcampersTable,
  bootcamperUpdatingMentors,
} = require("../Models/index");

const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  let result = await readDataFromBootcampersTable();
  res.json({ message: "received on the bootcampers", result });
});

router.post("/", async function (req, res) {
  let result = await addToBootcampersTable(req.body);
  res.json({ success: true, payload: result });
});

router.patch("/:id", async function (req, res) {
  let result = await bootcamperUpdatingMentors(req.params.id, req.body);
  res.json({ success: true, payload: result });
});

router.put("/:id", async function (req, res) {
  console.log("received put");
});

module.exports = router;
