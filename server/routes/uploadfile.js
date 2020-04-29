const fileUpload = require("express-fileupload");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.use(fileUpload());

router.post("/", auth, async (req, res) => {
  console.log(req.files);
  if (!req.files) {
    console.log("No files were uploaded.");
    return res.status(400).send("No files were uploaded.");
  }
  try {
    const file = req.files.file;

    file.mv(`${__dirname}/files/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `../files/${file.name}` });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
