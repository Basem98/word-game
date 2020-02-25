const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Word = require('../models/Word');


// The part of the database logic that is responsible for all the database queries directed at the User model

// Check the incoming score and based on it determine the user's title
function setTitle(score) {
  let title;
  if (score <= 250) {
    title = 'Absolute Beginner';
  } else if (250 <= score && score < 500) {
    title = 'Beginner';
  } else if (500 <= score && score < 1000) {
    title = 'Absolute Amateur';
  } else if (1000 <= score && score < 1500) {
    title = 'Amateur';
  } else if (1500 <= score && score < 2250) {
    title = 'Semi-Professional';
  } else if (2250 <= score && score < 3250) {
    title = 'Professional';
  } else if (3250 <= score && score < 4500) {
    title = 'Absolute Professional';
  } else if (4500 <= score && score < 6000) {
    title = 'Semi-Legend';
  } else if (6000 <= score && score < 7500) {
    title = 'Legend';
  } else if (7500 <= score && score < 10000) {
    title = 'Absolute Legend';
  } else if (10000 <= score) {
    title = 'IMMORTAL LEGEND!'
  }
  return title;
}


// Creating a new user and saving them in the database
async function createUser(userData) {
  try {
    const paramData = userData;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(paramData.password, salt);
    if (salt && hash) {
      paramData.password = hash;
      return User.create(paramData);
    }
  } catch (error) {
    return error;
  }
}

// The query responsible for updating the user score and title in the database and returning them to the client
async function updateScoreAndTitle(id, currentScore) {
  try {
    const setNewTitle = setTitle;
    const newTitle = setNewTitle(currentScore);
    const update = { title: newTitle, score: currentScore };
    const options = { new: true };
    const updatedUser = await User.findByIdAndUpdate({_id: id}, update, options);
    if (updatedUser) {
      return updatedUser;
    }
  } catch (error) {
    return error;
  }
}

// The query that continuously adds newly solved words to the gameHistory array in the User model
async function updateCurrentUserHistory(userId, newWord) {
  try {
    const currentUser = await getUserById(userId);
    if (currentUser) {
      currentUser.gameHistory.push(newWord);
      const updatedUser = await currentUser.save();
      return updatedUser;
    }
  } catch (error) {
    return error;
  }
}

async function getUserById(id) {
  try {
    const foundUser = await User.findById({ _id: id });
    if (foundUser) {
      return foundUser;
    }
  } catch (error) {
    return error;
  }
}

async function getUserByUsername(username) {
  try {
    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return foundUser;
    }
  } catch (error) {
    return error;
  }
}

async function getUserByEmail(email) {
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return foundUser;
    }
  } catch (error) {
    return error;
  }
}

// The query that returns a list of the top ten players across the whole game
async function sortUsersByScore() {
  try {
    const sortedUsers = await User.find().sort({'score': 'desc'});
    if (sortedUsers) {
      const topTen = [];
      for (let i = 0; i < 10; i++) {
        if (sortedUsers[i]) {
        topTen[topTen.length] = sortedUsers[i];
        }
      }
      return topTen;
    }
  } catch (error) {

  }
}

async function deleteAll() {
  try {
    const isDeleted = await User.deleteMany();
    const isDeleted2 = await Word.deleteMany();
    if (isDeleted && isDeleted2) {
      return true;
    }
  } catch (error) {
    return error;
  }
}

module.exports = {
  createUser,
  updateScoreAndTitle,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  updateCurrentUserHistory,
  sortUsersByScore,
  deleteAll
};
