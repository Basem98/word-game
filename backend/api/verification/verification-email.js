const nodemailer = require('nodemailer');
const { genVerificationToken } = require('../../database/logic/token-logic');
const config = require('../../config/envConfig');


// The function responsible for sending confirmation emails that contain the verification token to newly signed up users 
async function sendConfirmationEmail(userEmail, userId, userFullname) {
  try {
    const token = await genVerificationToken(userId);
    const transporter = nodemailer.createTransport(
      {
        service: 'Gmail',
        auth: {
          user: config.APP.GMAIL_ID,
          pass: config.APP.GMAIL_PASS
        }
      }
    );
    const mailOptions = {
      to: userEmail,
      from: 'basem@czWordgame.com',
      subject: 'Verification Mail',
      text: 'Hello, '+ userFullname
      + '\nI am delighted to tell you that you have successfully signed up, but there is only one step left. '
      + 'You need to go to the link below and click on (Verify) to verify your email and enjoy the game! '
      + `\n\n https://czenwordgame1.herokuapp.com/authentication/verify/${token}`
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
