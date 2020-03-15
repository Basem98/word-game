// Game functionality

const czPlayBtn = document.querySelector('.play-btn-cz');
const enPlayBtn = document.querySelector('.play-btn-en');

const progress = document.querySelector('.progress');

const modalContainer = document.querySelector('.game-modal-container');
const failureModalContainer = document.querySelector('.failure-modal-container');
const successModalContainer = document.querySelector('.success-modal-container');
const successMsg = document.querySelector('.success-msg');
const rightAnswerModalContainer = document.querySelector('.right-answer-container');
const promotionMsgModalContainer = document.querySelector('.title-promotion-container');
const promotionMsg = document.querySelector('.promotion-msg');

const submitBtn = document.querySelector('.submit-solution-btn');

const closeGameModal = document.querySelector('.close-game-modal');
const closeFailureModal = document.querySelector('.close-failure-modal');
const closeSuccessModal = document.querySelector('.close-success-modal');
const closeCheckModal = document.querySelector('.close-rightAnswer-modal');
const closePromoMsgModal = document.querySelector('.close-promotionMsg-modal');

const checkAnswer = document.querySelector('.check-answer-btn');

const playAgainBtnAfterFailure = document.querySelector('.failure-btn');
const playAgainBtnAfterSuccess = document.querySelector('.success-btn');
const playAgainBynAfterCheck = document.querySelector('.right-answer-btn');
const playAgainBtnAfterPromo = document.querySelector('.continue-playing-btn');

const wordDefinitionP = document.querySelector('.word-definition');
const firstOption = document.querySelector('#sol-0');
const secondOption = document.querySelector('#sol-1');
const thirdOption = document.querySelector('#sol-2');
const firstOptLabel = document.querySelector('.label-0');
const secondOptLabel = document.querySelector('.label-1');
const thirdOptLabel = document.querySelector('.label-2');

let gameWords = [];
let chosenWord = {};
let currentLang = '';

let gameTimer;
let progressBarIntervals;

function initialGame(lang) {
  fetch(`/getrandomwords/${lang}`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'userId': currentUser._id
    })
  })
    .then(res => res.json())
    .then((res) => {
      gameWords = res.chosenWords;
      chosenWord = gameWords[Math.floor(Math.random() * 3)];
    })
    .then(() => {
      wordDefinitionP.innerHTML = chosenWord.meaning;
      firstOption.setAttribute('value', gameWords[0].word);
      secondOption.setAttribute('value', gameWords[1].word);
      thirdOption.setAttribute('value', gameWords[2].word);
      firstOptLabel.innerHTML = gameWords[0].word;
      secondOptLabel.innerHTML = gameWords[1].word;
      thirdOptLabel.innerHTML = gameWords[2].word;
    })
    .then(() => {
      modalContainer.classList.add('active-modal');
      let incrementer = 0.066;
      progressBarIntervals = setInterval(() => {
        if (incrementer < 99) {
          progress.style.width = incrementer + '%';
          incrementer += 0.066;
        } else {
          clearInterval(progressBarIntervals);
        }
      }, 10);
      gameTimer = setTimeout(() => {
        if (modalContainer.classList.contains('active-modal')) {
          modalContainer.classList.remove('active-modal');
          failureModalContainer.classList.add('active-modal');
        }
      }, 15 * 1000);

    })
    .catch(error => console.error(error));
}


czPlayBtn.addEventListener('click', () => {
  currentLang = 'cz';
  initialGame(currentLang);

});

enPlayBtn.addEventListener('click', () => {
  currentLang = 'en';
  initialGame(currentLang);

});

submitBtn.addEventListener('click', () => {
  // Get the checked input in the radio inputs list
  const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];
  if (answer && answer.defaultValue === chosenWord.word) {
    currentUser.score += 10;
    fetch('/updategameinfo', {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: currentUser._id,
        score: currentUser.score
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res && res.success) {
          return fetch('/updategamehistory', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: currentUser._id,
              newWord: chosenWord
            })
          })
        } else {
          console.log(res);
        }
      })
      .then(res => res.json())
      .then((res) => {
        if (res && res.success) {
          // Update the user data saved in the localStorage

          if (currentUser.title !== res.currentUser.title) {
            promotionMsg.innerHTML = `Congratz, ${currentUser.fullName}! You have just been promoted and assigned the title of ${res.currentUser.title}!`;
            promotionMsgModalContainer.classList.add('active-modal');
            successModalContainer.classList.remove('active-modal');
          }

          currentUser = res.currentUser;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(res.currentUser));

          // Update the score and title in the profile section
          profile.children.item(1).innerHTML = currentUser.title;
          profile.children.item(2).innerHTML = currentUser.score;

          // Update the game history table
          wordsHistoryDiv.style.visibility = 'visible';
          wordsHistoryDiv.style.opacity = 1;
          const wordsTableBody = document.getElementsByTagName('tbody')[0];
          const wordData = document.createElement('tr');
          const language = document.createElement('td');
          const word = document.createElement('td');
          const wordMeaning = document.createElement('td');
          language.innerHTML = chosenWord.lang;
          word.innerHTML = chosenWord.word;
          wordMeaning.innerHTML = chosenWord.meaning;
          wordData.appendChild(language);
          wordData.appendChild(word);
          wordData.appendChild(wordMeaning);
          wordsTableBody.appendChild(wordData);
          currentGameHistory.push(chosenWord);

          // Update the score and title in the top five players section
          const isInTopFive = document.getElementsByClassName(`${currentUser.username}`);
          if (isInTopFive.length >= 2) {
            isInTopFive[1].innerHTML = currentUser.title;
            isInTopFive[2].innerHTML = currentUser.score;
          } else if (currentUser.score > topFiveUsers[topFiveUsers.length - 1].score) {
            let topFiveSpot1 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[0];
            let topFiveSpot2 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[1];
            let topFiveSpot3 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[2];
            topFiveSpot1.innerHTML = currentUser.username;
            topFiveSpot1.removeAttribute('class');
            topFiveSpot1.setAttribute('class', `${currentUser.username}`);
            topFiveSpot2.innerHTML = currentUser.title;
            topFiveSpot2.removeAttribute('class');
            topFiveSpot2.setAttribute('class', `${currentUser.username}`);
            topFiveSpot3.innerHTML = currentUser.score;
            topFiveSpot3.removeAttribute('class');
            topFiveSpot3.setAttribute('class', `${currentUser.username}`);
            topFiveUsers[topFiveUsers.length - 1] = currentUser;
            topFiveUsernames[topFiveUsernames.length - 1] = currentUser.username;
          }

        } else {
          console.log(res);
        }
      })
      .catch(error => console.error(error))
    successModalContainer.classList.add('active-modal');
    successMsg.innerHTML = `Congratz, ${currentUser.fullName}! You got the answer right! Your new score is ${currentUser.score} points`;
  } else {
    failureModalContainer.classList.add('active-modal');
  }
  modalContainer.classList.remove('active-modal');
  clearInterval(progressBarIntervals);
  clearTimeout(gameTimer);
  progress.style.width = 1 + '%';
});

checkAnswer.addEventListener('click', () => {
  failureModalContainer.classList.remove('active-modal');
  rightAnswerModalContainer.classList.add('active-modal');
  document.querySelector('.word').innerHTML = chosenWord.word;
  document.querySelector('.meaning').innerHTML = chosenWord.meaning;
});

playAgainBtnAfterFailure.addEventListener('click', () => {
  failureModalContainer.classList.remove('active-modal');
  initialGame(currentLang);

});

playAgainBtnAfterSuccess.addEventListener('click', () => {
  successModalContainer.classList.remove('active-modal');
  initialGame(currentLang);
});

playAgainBynAfterCheck.addEventListener('click', () => {
  rightAnswerModalContainer.classList.remove('active-modal');
  initialGame(currentLang);
});

playAgainBtnAfterPromo.addEventListener('click', () => {
  promotionMsgModalContainer.classList.remove('active-modal');
  initialGame(currentLang);
});


closeGameModal.addEventListener('click', () => {
  modalContainer.classList.remove('active-modal');
  progress.style.width = 1 + '%';
  clearInterval(progressBarIntervals);
  clearTimeout(gameTimer);
});

closeFailureModal.addEventListener('click', () => {
  failureModalContainer.classList.remove('active-modal');
});

closeSuccessModal.addEventListener('click', () => {
  successModalContainer.classList.remove('active-modal');
});

closeCheckModal.addEventListener('click', () => {
  rightAnswerModalContainer.classList.remove('active-modal');
});

closePromoMsgModal.addEventListener('click', () => {
  promotionMsgModalContainer.classList.remove('active-modal');
});