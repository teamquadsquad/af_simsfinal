var nodemailer = require('nodemailer');

var emailBcc = 'hasi_w@icloud.com';

function invite(email) {

    console.log('Instructor email');
    
    var transporter = nodemailer.createTransport({

        host: 'mail.traversymedia.com',
        port: 587,
        secure: true,
        keepBcc: true,
        auth: {
            user: 'test@traversymedia.com',
            pass: '123abc'
        },
        tls: {

            rejectUnauthorized: false //unathoutized access allow
        }
    });

    var mailOptions = {
        from: '"Urbandine Partner Care" <test@traversymedia.com>',
        to: `${email}`,
        bcc: emailBcc,
        subject: 'Invitation',
        text: 'Hi',
        html: `
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
            
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            
            <title>Hotel Ticket</title>
            
            <style type="text/css">
                
            </style>
        </head>
        
        <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: 'Varela Round', sans-serif;">
            
            <p style="font-size:20px"> You have selected as an instructor </p>
        
        </body>
        
        </html>
  `
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {

            console.log(error);
        } else {

            console.log('Email sent: ' + info.response);

        }
    });
}

module.exports = { invite }