const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const studentsRouter = require("./routes/students");
app.use("/students", studentsRouter);

const pplRanking = require("./routes/pplRanking2");
app.use("/pplRanking", pplRanking);

const luckyNumber = require("./routes/luckyNumber");
app.use("/luckyNumber", luckyNumber);

const classRanking = require("./routes/classRanking");
app.use("/classRanking", classRanking);

const total = require("./routes/total");
app.use("/total", total);

app.listen(port, function() {
    console.log("Runnning on " + port);
  });

module.exports = app;