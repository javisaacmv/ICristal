const express = require("express");
const bodyParser = require("body-parser");
const dbRun = require("./db/dbconfig");
const cors = require("cors");
const alertDeadlines = require("./services/alert-deadlines");
const cron = require("node-cron");
const fileUpload = require("express-fileupload");

const port = process.env.port ? process.env.port : 4000;

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(fileUpload());

dbRun(process.env.port);

app.use(bodyParser.json());

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/notif", require("./routes/notification"));

app.post("/uploadfile", function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let file = req.files.file;
  const date = new Date();

  // Use the mv() method to place the file somewhere on your server
  file.mv(`${__dirname}/files/${date.getMilliseconds() + file.name}`, function (
    err
  ) {
    if (err) return res.status(500).send(err);

    res.json({
      fileName: file.name,
      filePath: `${__dirname}/files/${date.getMilliseconds() + file.name}`,
    });
  });
});

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
