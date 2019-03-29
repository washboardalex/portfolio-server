const nodemailer = require('nodemailer');

const config = require('./config/config.js');


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    connectionTimeout: '15000',
    ...config
  }
});

const send = ( firstName, lastName, phoneNumber, emailAddress, messageText ) => {

	const fullName = firstName.concat(' ').concat(lastName); 

  const from = fullName && emailAddress ? `${fullName} <${emailAddress}>` : `${fullName || emailAddress}`;
  const message = {
    from,
    to: 'aleksandar.gujas@gmail.com',
    subject: `New message from your portfolio website contact form`,
    text: `First Name: ${firstName}. Last Name: ${lastName}. phoneNumber: ${phoneNumber}. Email address: ${emailAddress}. Message: ${messageText}`,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  });
}

module.exports = {
	send
}