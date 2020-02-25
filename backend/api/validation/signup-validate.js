// The middleware function that is responsible for the data validation process

function validateSignup(req, res, next) {
  const { username, email, password, fullName } = req.body;
  if (password && email && username && fullName) {
    if (!username.match(/^\w{6,12}/g)) {
      res.json({
        success: false,
        msg: 'You username must be 6-12 characters long'
          + ' and it can only consist of alphanumeric characters'
      });
    } else if (!email.match(/^\w+\.*\w+\@\w+(\.com|\.net)$/g)) {
      res.json({
        success: false,
        msg: 'Please enter a valid email address'
      });
    } else if (!(8 < password.length) || !(password.length < 20)) {
      res.json({
        success: false,
        msg: 'Your password must be at least 8 characters long'
          + ' and less than 20 characters long'
      });
    } else {
      next();
    }
  } else {
    res.json({
      success: false,
      msg: 'Please complete all the required fields'
    });
  }
}

module.exports = { validateSignup };
