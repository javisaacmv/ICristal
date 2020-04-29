const nodemailer = require("nodemailer");

const sendEmail = (rem, dest, subject, body, file) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "icristal1130@gmail.com",
      pass: "Nero1130",
    },
  });
  const attach = file.data;
  const mailOptions = {
    from: `${rem} <icristal1130@gmail.com>`,
    to: dest,
    subject: subject,
    text: body,
    attachments: [
      {
        filename: attach.fileName,
        path: attach.filePath, // stream this file
      },
    ],
  };

  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.response);
      return true;
    } else {
      console.log("sent to " + dest);
      return false;
    }
  });
};

module.exports = sendEmail;
