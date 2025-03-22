const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userRouter = require("./modal/product.router");
const utrRouter = require("./modal/utr.router.js");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/utr", utrRouter);

app.get("/", (req, res) => {
  res.send("Wecome");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or app password
  },
});

// Send Mail API
// app.post("/send-email", async (req, res) => {
//   const { email, subject, message } = req.body;

//   const mailOptions = {
//     from: "noreply@indianleaguetickets.in",
//     to: email,
//     subject: subject,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Failed to send email." });
//   }
// });

app.listen(8080, async () => {
  await dbConnect();
  console.log("Server is running on port 8080");
});
