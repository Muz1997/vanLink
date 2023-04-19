const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");
var SMTPTransport = require("nodemailer/lib/smtp-transport");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const log = console.log;

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/blog_details", (req, res) => {
  res.render("blog_detail");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact", (req, res) => {
  log(req.body);

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    service: "outlook", // service name
    secureConnection: false,
    tls: {
      ciphers: "SSLv3", // tls version
    },
    port: 587, // port
    auth: {
      user: "vanlinklogistics@outlook.com",
      pass: "Hamidpiya12",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "vanlinklogistics@outlook.com",
    to: "vanlinklogistics@outlook.com",
    subject:
      "Subject : " + `Message from ${req.body.email}: ${req.body.subject}`,
    text: `From ${req.body.email} \nSubject: ${req.body.subject} \nMessage : ${req.body.message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/quote", (req, res) => {
  res.render("quote");
});

app.post("/quote", (req, res) => {
  log(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    service: "outlook", // service name
    secureConnection: false,
    tls: {
      ciphers: "SSLv3", // tls version
    },
    port: 587, // port
    auth: {
      user: "vanlinklogistics@outlook.com",
      pass: "Hamidpiya12",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "vanlinklogistics@outlook.com",
    to: "vanlinklogistics@outlook.com",
    subject: "Subject: " + `Quotation Request from ${req.body.name}`,
    text: `From ${req.body.name}\nEmail: ${req.body.email}    Telephone: ${req.body.Telephone}  \nSubject: Quotation \nDeparture City : ${req.body.departureCity}   Post Code : ${req.body.postCode}\nService Category : ${req.body.serviceCat}\nPackage Informtaion Weight: ${req.body.weigth} Height: ${req.body.height} Width: ${req.body.width} Length : ${req.body.length}\nVan Required : ${req.body.selectVan}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  log("Example app listening on port ", PORT);
});
