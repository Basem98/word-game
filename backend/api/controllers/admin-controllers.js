const {
  deleteAll
} = require('../../database/logic/user-logic');
const {
  insertWord
} = require('../../database/logic/word-logic');

// Controllers for the admin endpoints that require special permissions, because they can not be accessible to anyone and they have access to delete important data from the database


// The controller for the endpoint that deletes everything in the database, which I needed to use at some points during the development process
function cleanDb(req, res) {
  deleteAll().then((isDeleted) => {
    if (isDeleted) {
      res.json({
        success: true
      });
    }
  })
    .catch(() => {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    });
}


// The controller for the endpoint that adds new words to the database
function addWord(req, res) {
  const { word, meaning, lang } = req.body;
  insertWord(word, meaning, lang).then((isInserted) => {
    if (isInserted) {
      res.json({
        success: true
      });
    } else {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    }
  })
    .catch(() => {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    });
}

module.exports = {
  cleanDb,
  addWord
};
