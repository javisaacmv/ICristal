const express = require("express");
const bodyParser = require("body-parser");
const dbRun = require("./db/dbconfig");
const cors = require("cors");
const alertDeadlines = require("./services/alert-deadlines");
const cron = require("node-cron");

const port = process.env.port ? process.env.port : 4000;

const app = express();
app.use(cors({ origin: true, credentials: true }));

dbRun(process.env.port);

app.use(bodyParser.json());

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/notif", require("./routes/notification"));

app.use((err, req, res, next) => {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

cron.schedule("* * * * *", function () {
  alertDeadlines();
  console.log("running a task every minute");
});

app.listen(port, function () {
  console.log("ready for request 🚀");
});
