const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();

const sendMailSevice = ({ gmail, subject, text, html }) => {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.TKSENDGMAIL,
      pass: process.env.PASSWORDSENDMAIL,
    },
  });
  var mainOptions = {
    from: process.env.TKSENDGMAIL,
    to: gmail,
    subject,
    text,
    html,
  };
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      console.log("Message sent otp: " + info.response);
      res.redirect("/");
    }
  });
};

export default sendMailSevice;
