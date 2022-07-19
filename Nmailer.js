const express = require("express");
const { json } = require("express");
const nodemailer = require("nodemailer")
require('dotenv').config();


const app = express();
app.use(json({extended: false}));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: "lfawas6Gmail.com",
    pass: "BarCelonea96",
    clientId: "907615288960-tofvtc4u5jifha6og6eio1jk241jop0e.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken: "1//048Hw3ET-JM2oCgYIARAAGAQSNwF-L9IrC15wDZvGB73j_BwENbsk2ZmSXuL_Uj6H1qbc7NVgocN2Ap-h8Ei69N1LGM1XIkiVers"
  }
});

let mailOptions = {
  from: "folaosebikan@stu.ui.edu.ng",
  to: "lfawas6@gmail.com",
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err.message);
  } else {
    console.log("Email sent successfully");
  }
});