const express = require("express");
const router = express.Router();
const {
  readDataFromBootcampersTable,
  readDataFromMentorsTable,
} = require("../Models/index");

router.get("/", async function (req, res) {
  let bootcampersData = await readDataFromBootcampersTable();
  let mentorsData = await readDataFromMentorsTable();
  res.json({
    message: "received on the coaches",
    bootcampersData,
    mentorsData,
  });
});

module.exports = router;
