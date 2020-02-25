const {
  getUserByUsername,
  getUserByEmail
} = require('../../database/logic/user-logic');


// A middleware function that checks whether the provided email or username exist in the database
async function existsInDb(req, res, next) {
  const { email, username } = req.body;
  const emailExists = await getUserByEmail(email);
  const usernameExists = await getUserByUsername(username);
  if (emailExists || usernameExists) {
    res.json({
      success: false,
      msg: 'The email or the username you have entered already exists',
    });
  } else {
    next();
  }
}

module.exports = { existsInDb };
