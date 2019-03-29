const app = require("express")();
const bodyParser = require('body-parser');
const mailer = require('./mailer/mailer.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const path = require('path');


var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.post('*', (req, res, next) => {
    const { firstName, lastName, phoneNumber, emailAddress, messageText } = req.body

    mailer.send( firstName, lastName, phoneNumber, emailAddress, messageText ).then(() => {
      console.log(`Sent the message "${messageText}" from <${firstName}> ${emailAddress}.`);
      res.status(200);
      res.send('success')
    }).catch((error) => {
      console.log(`Failed to send the message "${messageText}" from <${firstName}> ${emailAddress} with the error ${error && error.message}`);
      res.status(400);
      res.send('failure')
    })
});


app.listen(3001, ()=> {
  console.log('app is running on port 3001');
})