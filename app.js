const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const bootcamperRouter = require("./routes/bootcampers");
const mentorsRouter = require("./routes/mentors");
const coachesRouter = require("./routes/coaches");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/bootcampers", bootcamperRouter);
app.use("/mentors", mentorsRouter);
app.use("/coaches", coachesRouter);

module.exports = app;
