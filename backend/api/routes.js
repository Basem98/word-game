const express = require('express');

const { isAdmin } = require('./authentication/adminAuth');
const { authenticate } = require('./authentication/authenticate');
const { validateSignup } = require('./validation/signup-validate');
const { existsInDb } = require('./validation/duplicates-validate');
const {
  cleanDb,
  addWord
} = require('./controllers/admin-controllers');
const {
  signup,
  signin,
  verifyUser,
  resendVerification,
  getUserData,
  updateGameInfo,
  updateGameHistory,
  getTopFiveUsers,
  getWords,
  getWordsForNonMembers,
  authenticateUser
} = require('./controllers/user-controllers');

const router = express.Router();

// User collection endpoints:
router.post('/signup', validateSignup, existsInDb, signup);
router.post('/signin', signin);
router.get('/confirmverification/:token/:email', verifyUser);
router.post('/resendverification', resendVerification);
router.get('/getuserdata', authenticate, getUserData);
router.get('/gettopfive', authenticate, getTopFiveUsers);
router.put('/updategameinfo', authenticate, updateGameInfo);
router.put('/updategamehistory', authenticate, updateGameHistory);

// Dashboard authentication
router.get('/authenticateuser', authenticateUser);

// Word collection endpoint for users who have accounts:
router.post('/getrandomwords/:lang', authenticate, getWords);

// Word collection endpoint for users with no accounts:
router.get('/getrandomwords/:lang', getWordsForNonMembers);

// DB CRUD endpoints for admin only
router.delete('/cleandatabase', isAdmin, cleanDb);
router.post('/addword', isAdmin, addWord);

module.exports = router;
