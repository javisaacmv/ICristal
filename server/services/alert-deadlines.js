const sendEmail = require("./email-sender");
const moment = require("moment");

async function alertDeadline() {
  const Notification = require("../db/models/Notification");

  const today = new Date();

  Notification.find({ active: true, deadline: { $gte: today } }, function (
    err,
    docs
  ) {
    docs.forEach((doc) => {
      const priority = getdiff(doc.deadline);
      doc.emails.forEach((email) => {
        if (
          priority &&
          !moment(today.getMilliseconds()).isSame(
            moment(doc.lastSend.getMilliseconds()),
            "day"
          )
        ) {
          try {
            sendEmail("ICristal", email, doc.title + priority, doc.description);
            console.log("sending to " + email);
            doc.updateOne({ lastSend: moment(new Date()) });
          } catch (err) {
            console.log(err);
            return;
          }
        }
      });
    });
  });
}

function getdiff(limit) {
  const today = new Date();
  if (moment(limit).diff(moment(today), "days") === 19)
    return " - 20 dias restantes";
  if (moment(limit).diff(moment(today), "days") === 9)
    return " - 10 dias restantes";
  if (moment(limit).diff(moment(today), "days") === 4)
    return " - 5 dias restantes";
  if (moment(limit).diff(moment(today), "days") === 0) return " - Ultimo dia";
}

module.exports = alertDeadline;
