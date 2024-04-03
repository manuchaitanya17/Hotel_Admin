require('dotenv').config();
const nodemailer = require("nodemailer");
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: "587",
      auth: {
        user: process.env.EMAIL_USER||"manuchaitanya21@gmail.com",
        pass: process.env.EMAIL_PASS||"rllrrliotgyjiwoo",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
      };
      transporter.sendMail(options, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    
}
module.exports = sendEmail;