// basic express app and connect db setup
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Route");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require('cors');
const common = require('./common.js');
const nodemailer = require('nodemailer');
// db connection

//var dbUrl = process.env.MONGOOSE_DB_URL;
//console.log(process.env.MONGOOSE_DB_URL);
// var dbUrl = "mongodb://localhost:27017/school";
var dbUrl = "mongodb+srv://demo:iAv28g5qbLt0arXq@cluster0.vddas.mongodb.net/Saturday-Session?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

/*
Middleware
*/  
app.use("/api/v1", router);
app.use(cors());


app.get('/', (req, res) => {
  /*var user1 = new user('James', 'Bond');
  res.end(user1.fullName());*/

   let transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     auth: {
         user: "testing.webdesksolution@gmail.com",
         pass: "testing@987"
     }
  })


    transporter.sendMail({
    from: 'testing.webdesksolution@gmail.com',
    to: 'umair.webdesk@gmail.com',
    subject: 'Test Email Subject',
    html: 'Dear umair.webdesk@gmail.com,<p></p><br>Enter following digits to complete your account password reset process<br><h2>12345</h2>'
});


  res.send('This is the node js API.');
})

app.get('/sum_value', (req,res) => {

	res.end(common.sumIntegerValue('3','5'));
})


app.listen(4000, () => {
  console.log("listening on 4000");
});
