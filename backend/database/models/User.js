const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    required: true,
    type: String
  },
  username: {
    required: true,
    unique: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  country: {
    required: true,
    type: String
  },
  score: {
    required: false,
    type: Number,
    default: 0
  },
  title: {
    required: false,
    type: String,
    default: 'Absolute Beginner'
  },
  password: {
    required: true,
    type: String
  },
  gameHistory: [
    {
      word: {
        type: String,
        default: undefined
      },
      meaning: {
        type: String,
        default: undefined
      },
      lang: {
        type: String,
        default: undefined
      }
    }
  ]
});
const User = mongoose.model('User', userSchema);

module.exports = User;
