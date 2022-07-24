const express = require("express");
const { json } = require("express");
const nodemailer = require("nodemailer")
require('dotenv').config({path: __dirname+"/.env" });


const app = express();
app.use(json({extended: false}));

const port =3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

let mailOptions = {
  from: "lfawas6@gmail.com",
  to: "folaosebikan830@stu.ui.edu.ng",
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

const trans = async ()=> {
  try {
    const send = await transporter.sendMail(mailOptions);
    console.log(send)
  } catch(err){

    console.log(err.message)
  }
}
trans()
// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err.message);
//   } else {
//     console.log("Email sent successfully");
//   }
// }); 