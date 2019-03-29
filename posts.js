const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mailer = require('./mailer/mailer.js');
const path = require('path');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'client/build')));

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})


app.post('*', (req, res, next) => {
    console.log('we are gettomg jere')
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


app.listen(port, ()=> {
  console.log(`app is running on port ${port}`);
})