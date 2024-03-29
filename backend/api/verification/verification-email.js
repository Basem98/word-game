const nodemailer = require('nodemailer');
const { genVerificationToken } = require('../../database/logic/token-logic');
const config = require('../../config/envConfig');


// The function responsible for sending confirmation emails that contain the verification token to newly signed up users 
async function sendConfirmationEmail(userEmail, userId, userFullname) {
  try {
    const token = await genVerificationToken(userId);
    const transporter = nodemailer.createTransport(
      {
        service: 'Yahoo',
        host: 'smtp.mail.yahoo.com',
        secure: false,
        secureConnection: false,
        logger: true,
        auth: {
          user: config.APP.YAHOO_ID,
          pass: config.APP.YAHOO_PASS,
        },
        tls: {
          rejectUnauthorized: false,
          requestCert: false
        }
      }
    );
    const mailOptions = {
      to: userEmail,
      from: `Basem from CzEnWordGame <${config.APP.YAHOO_ID}@yahoo.com>`,
      subject: 'Verification Mail',
      text: 'Hello, ' + userFullname
        + '\nI am delighted to tell you that you have successfully signed up, but there is only one step left. '
        + 'You need to click on the link below to verify your email and enjoy the game! '
        + `\n\n https://czenwordgame1.herokuapp.com/confirmverification/${token}/${userId}`
        + '\n\n\nThank you for your patience!'
        + '\nBest Regards!'
        + '\nBasem Mostafa'
    };

    const emailSent = await transporter.sendMail(mailOptions);
    if (emailSent) {
      return true;
    }
  } catch (error) {
    console.error(error);

  }
}

module.exports = {
  sendConfirmationEmail
};
