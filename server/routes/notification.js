require("dotenv").config();
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const sendEmail = require("../services/email-sender");

//notification Model
const Notification = require("../db/models/Notification");

router.get("/", auth, async (req, res) => {
  try {
    const notif = await Notification.find({
      active: true,
      userId: req.user.id,
    });
    res.json(notif);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.post(
  "/",
  [
    check("title", "Please provide a title").not().isEmpty(),
    check("description", "Please provide an description").not().isEmpty(),
    check("deadline", "Please provide an date").not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ error: errors.array() });
    }

    const { title, description, deadline, emails } = req.body;

    try {
      notif = new Notification({
        title,
        description,
        userId: req.user.id,
        deadline,
        emails,
      });

      await notif.save();

      notif.emails.forEach((email) => {
        sendEmail(
          "ICristal",
          email,
          "Nueva tarea - " + notif.title,
          notif.description
        );
      });
      await notif.updateOne({ lastSend: new Date() });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);
router.delete(
  "/:id",

  auth,
  async (req, res) => {
    try {
      let notif = await Notification.findById(req.params.id);
      if (!notif) return res.status(404).json({ msg: "notif not found" });
      await notif.update({ active: false });
      res.send("notif Removed successfully");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
