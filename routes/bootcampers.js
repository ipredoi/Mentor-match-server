const { query } = require("../db/index");

const {
  readDataFromBootcampersTable,
  addToBootcampersTable,
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

module.exports = router;
