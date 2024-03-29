const mongoose = require('mongoose');

module.exports = function connectToDatabase(url) {
  mongoose.connect(url).then((hasConnected) => {
    if (hasConnected) {
      console.log('Server has successfully connected to the database!');
    }
  }).catch((error) => {
    console.error(error);
  });
};
