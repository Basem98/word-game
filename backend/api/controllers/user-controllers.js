const bcrypt = require('bcryptjs');

const {
  getRandomWords,
  getRandomWordsForNonMembers
} = require('../../database/logic/word-logic');
const {
  createUser,
  getUserById,
  updateScoreAndTitle,
  getUserByUsername,
  getUserByEmail,
  updateCurrentUserHistory,
  sortUsersByScore
} = require('../../database/logic/user-logic');
const { sendConfirmationEmail } = require('../verification/verification-email');
const { isTokenVerified } = require('../../database/logic/token-logic');


// The controllers for the endpoints that are accessible to the users, on which the application as a whole depends

function signup(req, res) {
  const newUser = req.body;
  createUser(newUser).then(async (user) => {
    const confirmationSent = await sendConfirmationEmail(user.email, user._id, user.fullName);
    if (confirmationSent) {
      res.status(200).json({
        success: true,
        msg: `Congratz! You've signed up successfully! A verification email has been sent to ${user.email}, as you need to verify your email before signing in.`
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function signin(req, res) {
  const { username, password } = req.body;
  getUserByUsername(username).then(async (user) => {
    const userData = user;
    const matchedPass = await bcrypt.compare(password, userData.password);
    if (matchedPass) {
      userData.password = undefined;
      req.session.currentUser = userData;
      if (user.isVerified) {
        res.status(200).json({
          success: true,
          user: userData
        });
      } else {
        res.json({
          success: false,
          user: { isVerified: false },
          msg: 'Your email is not verified yet. You have to verify your email in order to sign in to your account.'
        });
      }
    } else {
      res.json({
        success: false,
        msg: 'You have entered a wrong password'
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: 'There is no registered user with the username you have entered'
      });
    });
}

function signOut(req, res) {
  let currentSessionID = req.header('Cookie');
  currentSessionID = currentSessionID.slice(currentSessionID.indexOf('A') + 1, currentSessionID.lastIndexOf('.'));
  req.session.destroy();
  res.status(200).json({
    success: true,
    msg: 'You have been logged out successfully!'
  });
}

async function verifyUser(req, res) {
  try {
    const { token, userId } = req.params;
    const isVerificationConfirmed = await isTokenVerified(token);
    let currentUser = await getUserById(userId);
    if (isVerificationConfirmed && currentUser && !currentUser.isVerified) {
      currentUser.isVerified = true;
      currentUser.save();
      res.status(200).redirect('/confirmVerification.html');
    } else {
      res.json({
        success: false,
        msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
      });
    }
  } catch (error) {
    res.json({
      success: false,
      msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
    });
  }
}

function resendVerification(req, res) {
  const { email } = req.body;
  getUserByEmail(email).then(async (currentUser) => {
    const confirmationSent = await sendConfirmationEmail(currentUser.email, currentUser._id, currentUser.fullName);
    if (confirmationSent) {
      res.status(200).json({
        success: true,
        msg: `A verification email has been sent to ${currentUser.email}`
      });
    } else {
      res.json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
      });
    });
}

function getUserData(req, res) {
  const userID = req.user._id;
  getUserById(userID).then((user) => {
    const userData = user;
    userData.password = undefined;
    res.status(200).json({
      success: true,
      userData
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function updateGameInfo(req, res) {
  const { id, score } = req.body;
  updateScoreAndTitle(id, score).then((updatedData) => {
    const updatedUser = updatedData;
    updatedUser.password = undefined;
    res.status(200).json({
      success: true,
      currentUser: updatedUser
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function getWords(req, res) {
  const lang = req.params.lang;
  const { userId } = req.body;
  getRandomWords(lang, userId).then((chosenWords) => {
    res.status(200).json({
      success: true,
      chosenWords
    });
  })
    .catch((error) => {
      console.error(error)
      res.json({
        success: false,
        msg: error
      });
    });
}

function getWordsForNonMembers(req, res) {
  const lang = req.params.lang;
  getRandomWordsForNonMembers(lang).then((chosenWords) => {
    res.status(200).json({
      success: true,
      chosenWords
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function updateGameHistory(req, res) {
  const { id, newWord } = req.body;
  updateCurrentUserHistory(id, newWord).then((updatedUser) => {
    res.status(200).json({
      success: true,
      currentUser: updatedUser
    });
  }).catch((error) => {
    res.json({
      success: false,
      msg: error
    });
  });
}

function getTopFiveUsers(req, res) {
  sortUsersByScore().then((topFiveUsers) => {
    res.status(200).json({
      success: true,
      topFiveUsers
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function authenticateUser(req, res) {
  let currentSessionID = req.header('Cookie');
  currentSessionID = currentSessionID ? currentSessionID.slice(currentSessionID.indexOf('A') + 1, currentSessionID.lastIndexOf('.')) : undefined;
  if (currentSessionID === req.session.id) {
    res.status(200).json({
      isAuthorized: true
    });
  } else {
    res.status(401).json({
      isAuthorized: false,
      msg: 'You have to sign in to access the dashboard'
    });
  }
}

module.exports = {
  signup,
  signin,
  signOut,
  verifyUser,
  resendVerification,
  getUserData,
  updateGameInfo,
  updateGameHistory,
  getWords,
  getWordsForNonMembers,
  getTopFiveUsers,
  authenticateUser
};
