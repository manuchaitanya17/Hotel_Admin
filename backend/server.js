const dotenv = require("dotenv").config;
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail  = require("./utils/sendEmail")


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT||5001;

app.get("/", (req, res) => {
    res.send("Home Page");
  });
  app.post("/api/sendemail", async (req, res) => {
    const { mail, room, type, rent, datein, dateout, name} = req.body;
    console.log(mail);
    try {
      const send_to = mail;
      const sent_from = "manuchaitanya21@gmail.com";
      const reply_to = mail;
      const subject = "Thank You for booking!!!";
      const message = `
      <h3>Dear ${name}</h3>
      <p>Thank for booking room in our hotel.Welcome to Hotel Scaler.Your booking details are given below.</p>
      <ol>
      <li>
      Room No. - ${room}-${type}.
      </li><li>
      Rent - ₹${rent}/Hr.
      </li><li>
      Checkin Date and Time - ${datein}
      </li><li>
      Checkout Date and Time - ${dateout}
      </li>
      </ol>
      <p>Regards...</p>
  `;
  
      await sendEmail(subject, message, send_to, sent_from, reply_to);
      res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
// // Endpoint to handle sending emails
// app.post("/api/send-email", async (req, res) => {
//   const { guestName, email, checkIn, checkOut, roomNo } = req.body;
//   console.log(guestName);
//   // Email configuration
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "itxjharsh1729@gmail.com", // Update with your email
//       pass: "hjraj@2004", // Update with your password
//     },
//   });

//   // Email content
//   const formattedCheckIn = new Date(checkIn).toLocaleString();
//   const formattedCheckOut = new Date(checkOut).toLocaleString();
//   const mailOptions = {
//     from: "itxjharsh1729@gmail.com", // Update with your email
//     to: email,
//     subject: "Booking Confirmation",
//     text: `Dear ${guestName},\n\nYour booking for Room ${roomNo} from ${formattedCheckIn} to ${formattedCheckOut} has been confirmed.\n\nRegards,\nYour Hotel Team`,
//   };
//   await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//     res.status(200).json({ message: "Email sent successfully" });
// //   try {
// //     // Send email
// //     await transporter.sendMail(mailOptions);
// //     console.log("Email sent successfully");
// //     res.status(200).json({ message: "Email sent successfully" });
// //   } catch (error) {
// //     console.error("Error sending email:", error);
// //     res.status(500).json({ message: "Failed to send email" });
// //   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
