require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("BODY", req.body);

  if (name && email && message) {
    sendEmail(name, message, email, res);
  } else {
    res.send(false);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

function sendEmail(formName, formMessage, formEmail, response) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.PASSWORD
    }
  });

  const message = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Message from ${formName}`,
    text: `
    Name: ${formName}
    Message: ${formMessage}
    Email: ${formEmail}
    `
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      response.send(false);
      return;
    }
    console.log("Sent", info.response);

    response.send(true);
  });
}
