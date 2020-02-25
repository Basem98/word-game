const Word = require('../models/Word');
const User = require('../models/User');

function insertWord(newWord, newMeaning, lang) {
  if (newWord && newMeaning && lang) {
    const wordDoc = {};
    wordDoc.word = newWord;
    wordDoc.meaning = newMeaning;
    wordDoc.lang = lang;
    return Word.create(wordDoc);
  }
}

/*
This function's main responsibility is to return an array of 3 words and their meaning, which formulate the game box on the client side.
Before returing that array, it checks whether each word in it exists in the current user's gameHistory array in the database or not
and it also makes sure that each one of the three words is unique and that none of them are repeated
 */
async function getRandomWords(lang, userId) {
  let chosenWords = [];
  const allWords = await Word.find({ lang: lang });
  const userHistory = await User.findById({ _id: userId }).select('gameHistory -_id');

  if (allWords) {
    while (chosenWords.length < 3) {
      const randomIndex = Math.floor(Math.random() * allWords.length);
      let alreadyExists = false;
      userHistory.gameHistory.forEach((wordObj) => {
        if (allWords[randomIndex].word == wordObj.word) {
          alreadyExists = true;
        }
      });
      if (!alreadyExists && !chosenWords.includes(allWords[randomIndex])) {
        chosenWords.push(allWords[randomIndex]);
        allWords.splice(i, 1);
      }
    }
    return chosenWords;
  }
}


// The functions that gets random unique words, but does not check whether they've been solved before or not
async function getRandomWordsForNonMembers(lang) {
  const allWords = await Word.find({ lang: lang });
  const chosenWords = [];
  while (chosenWords.length < 3) {
    const randomIndex = Math.floor(Math.random() * allWords.length);
    if (!chosenWords.includes(allWords[randomIndex])) {
      chosenWords.push(allWords[randomIndex]);
    }
  }
  return chosenWords;
}


module.exports = {
  insertWord,
  getRandomWords,
  getRandomWordsForNonMembers
};
