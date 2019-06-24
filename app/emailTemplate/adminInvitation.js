var nodemailer = require('nodemailer');

var emailBcc = 'hash_hw@icloud.com';

function invitationEmail(email, name) {

    console.log(email);
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      keepBcc: true,
      auth: {
        user: 'dev@urbandine.nl',
        pass: 'dinein@hash_ud'
      },
      tls: {
        rejectUnauthorized: false //unathoutized access allow
      }
    });
  
    var mailOptions = {
      from: '"Admin" <hash_hw@icloud.com>',
      to: `${email}`,
      bcc: emailBcc,
      subject: 'Invitation',
      text: 'Hi, we are glad you make to help!',
      html: `
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
            
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            
            <title>Courser web Admin</title>
            
            <style type="text/css">
                
            </style>
        </head>
        
        <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: 'Varela Round', sans-serif;">
        <h3>hi ${name} </h3>    
        <p>You have been selected as an instructor</p>
            </body>
        
        </html>
  `
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {

        console.log(error);
        return false;
      } else {

        console.log('Email sent: ' + info.response);
        return true;
      }
    });
  }

module.exports = { invitationEmail }