function implementGameModals(
  isUserLoggedIn,
  loggedUserFunctionality
) {
  // Elements related to the logic behind the game on the homepage
  const czPlayBtn = document.querySelector('.play-btn-cz');
  const enPlayBtn = document.querySelector('.play-btn-en');

  const mainModalContainer = document.querySelector('.game-modal-container');
  const failureModalContainer = document.querySelector('.failure-modal-container');
  const successModalContainer = document.querySelector('.success-modal-container');
  const rightAnswerModalContainer = document.querySelector('.right-answer-container');

  const submitBtn = document.querySelector('.submit-solution-btn');

  const closeGameModal = document.querySelector('.close-game-modal');
  const closeFailureModal = document.querySelector('.close-failure-modal');
  const closeSuccessModal = document.querySelector('.close-success-modal');
  const closeCheckModal = document.querySelector('.close-rightAnswer-modal');

  const checkAnswer = document.querySelector('.check-rightAnswer-btn');

  const playAgainBtnAfterFailure = document.querySelector('.failure-btn');
  const playAgainBtnAfterSuccess = document.querySelector('.success-btn');
  const playAgainBynAfterCheck = document.querySelector('.right-answer-btn');

  const gameBox = {};
  gameBox.wordDefinition = document.querySelector('.word-definition');
  gameBox.actualInputElements = [
    document.querySelector('#sol-0'),
    document.querySelector('#sol-1'),
    document.querySelector('#sol-2')
  ];
  gameBox.inputElementsLabels = [
    document.querySelector('.label-0'),
    document.querySelector('.label-1'),
    document.querySelector('.label-2')
  ];

  const progressBar = {
    currentProgress: document.querySelector('.progress'),
    progressTimer: (mainModalContainer, failureModalContainer) => {
      if (mainModalContainer.classList.contains('active-modal')) {
        mainModalContainer.classList.remove('active-modal');
        failureModalContainer.classList.add('active-modal');
      } else {
        clearTimeout(timeoutId);
      }
    },
    progressIntervals: () => {
      const previousProgress = parseFloat(progressBar.currentProgress.style.width.slice(0, -1));
      if (previousProgress < 99) {
        progressBar.currentProgress.style.width = previousProgress + 0.066 + '%';
      } else {
        clearInterval(intervalId);
      }
    }
  }
  let gameWords = [];
  let chosenWord = {};
  let currentLang = '';

  let timeoutId;
  let intervalId;


  // Declaring the functions that gets the game data from the server and shows it on the UI
  function initiateGame() {
    let getWords;
    if (isUserLoggedIn) {
      getWords = fetch(`/getrandomwords/${currentLang}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: loggedUserFunctionality.currentUser._id
        })
      });
    } else {
      getWords = fetch(`/getrandomwords/${currentLang}`, {
        method: 'GET'
      });
    }
    return getWords
      .then(res => res.json())
      .then((res) => {
        gameWords = res.chosenWords;
        chosenWord = gameWords[Math.floor(Math.random() * 3)];
      })
      .then(() => {
        gameBox.wordDefinition.innerHTML = chosenWord.meaning;
        gameBox.actualInputElements.forEach((inputElement, index) => {
          inputElement.setAttribute('value', gameWords[index].word);
        });
        gameBox.inputElementsLabels.forEach((inputLabel, index) => {
          inputLabel.innerHTML = gameWords[index].word;
        });
      })
      .then(() => {
        progressBar.currentProgress.style.width = '1%';
        mainModalContainer.classList.add('active-modal');
        timeoutId = setTimeout(() => {
          progressBar.progressTimer(mainModalContainer, failureModalContainer);
        }, 15 * 1000);
        intervalId = setInterval(() => {
          progressBar.progressIntervals();
        }, 10);
      })
      .catch(error => console.error(error));
  }

  function startGameEvent() {
    czPlayBtn.addEventListener('click', () => {
      czPlayBtn.disabled = true;
      currentLang = 'cz';
      initiateGame().then(() => {
        czPlayBtn.disabled = false;
      })

    });

    enPlayBtn.addEventListener('click', () => {
      enPlayBtn.disabled = true;
      currentLang = 'en';
      initiateGame().then(() => {
        enPlayBtn.disabled = false;
      })

    });
  }

  function submitGameAnswer() {
    submitBtn.addEventListener('click', () => {
      // Get the checked input in the radio inputs list
      const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];
      if (answer && answer.defaultValue === chosenWord.word) {
        // If the user is logged in, implement functionalities specific to logged-in users
        if (isUserLoggedIn) {
          loggedUserFunctionality.currentUser.score += 10;
          fetch('/updategameinfo', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: loggedUserFunctionality.currentUser._id,
              score: loggedUserFunctionality.currentUser.score
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
                    id: loggedUserFunctionality.currentUser._id,
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

                if (loggedUserFunctionality.currentUser.title !== res.currentUser.title) {
                  loggedUserFunctionality.promotionMsg.innerHTML = `Congratz, ${loggedUserFunctionality.currentUser.fullName}! You have just been promoted and assigned the title of ${res.currentUser.title}!`;
                  loggedUserFunctionality.promotionMsgModalContainer.classList.add('active-modal');
                  successModalContainer.classList.remove('active-modal');
                }

                loggedUserFunctionality.currentUser = res.currentUser;
                localStorage.removeItem('currentUser');
                localStorage.setItem('currentUser', JSON.stringify(res.currentUser));

                // Update the score and title in the loggedUserFunctionality.profile section
                loggedUserFunctionality.profile.children.item(1).innerHTML = loggedUserFunctionality.currentUser.title;
                loggedUserFunctionality.profile.children.item(2).innerHTML = loggedUserFunctionality.currentUser.score;

                // Update the game history table
                loggedUserFunctionality.wordsHistoryDiv.style.visibility = 'visible';
                loggedUserFunctionality.wordsHistoryDiv.style.opacity = 1;
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
                loggedUserFunctionality.currentUser.gameHistory.push(chosenWord);

                // Update the score and title in the top five players section
                const isInTopFive = document.getElementsByClassName(`${loggedUserFunctionality.currentUser.username}`);
                if (isInTopFive.length >= 2) {
                  isInTopFive[1].innerHTML = loggedUserFunctionality.currentUser.title;
                  isInTopFive[2].innerHTML = loggedUserFunctionality.currentUser.score;
                } else if (loggedUserFunctionality.currentUser.score > topFiveUsers[topFiveUsers.length - 1].score) {
                  let topFiveSpot1 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[0];
                  let topFiveSpot2 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[1];
                  let topFiveSpot3 = document.getElementsByClassName(`${topFiveUsers[topFiveUsers.length - 1].username}`)[2];
                  topFiveSpot1.innerHTML = loggedUserFunctionality.currentUser.username;
                  topFiveSpot1.removeAttribute('class');
                  topFiveSpot1.setAttribute('class', `${loggedUserFunctionality.currentUser.username}`);
                  topFiveSpot2.innerHTML = loggedUserFunctionality.currentUser.title;
                  topFiveSpot2.removeAttribute('class');
                  topFiveSpot2.setAttribute('class', `${loggedUserFunctionality.currentUser.username}`);
                  topFiveSpot3.innerHTML = loggedUserFunctionality.currentUser.score;
                  topFiveSpot3.removeAttribute('class');
                  topFiveSpot3.setAttribute('class', `${loggedUserFunctionality.currentUser.username}`);
                  topFiveUsers[topFiveUsers.length - 1] = loggedUserFunctionality.currentUser;
                  topFiveUsernames[topFiveUsernames.length - 1] = loggedUserFunctionality.currentUser.username;
                }

              } else {
                console.log(res);
              }
            })
            .catch(error => console.error(error))
          successModalContainer.classList.add('active-modal');
          loggedUserFunctionality.successMsg.innerHTML = `Congratz, ${loggedUserFunctionality.currentUser.fullName}! You got the answer right! Your new score is ${loggedUserFunctionality.currentUser.score} points`;
        }
        successModalContainer.classList.add('active-modal');
      } else {
        failureModalContainer.classList.add('active-modal');
      }
      mainModalContainer.classList.remove('active-modal');
      progressBar.currentProgress.style.width = 1 + '%';
      // clearInterval(progressBarIntervals);
      clearInterval(intervalId);
      // clearTimeout(gameprogressTimer);
      clearTimeout(timeoutId);
    });
  }

  function checkRightAnswer() {
    checkAnswer.addEventListener('click', () => {
      failureModalContainer.classList.remove('active-modal');
      rightAnswerModalContainer.classList.add('active-modal');
      document.querySelector('.word').innerHTML = chosenWord.word;
      document.querySelector('.meaning').innerHTML = chosenWord.meaning;
    });
  }

  function playAgain() {
    playAgainBtnAfterFailure.addEventListener('click', () => {
      failureModalContainer.classList.remove('active-modal');
      initiateGame();

    });

    playAgainBtnAfterSuccess.addEventListener('click', () => {
      successModalContainer.classList.remove('active-modal');
      initiateGame();
    });

    playAgainBynAfterCheck.addEventListener('click', () => {
      rightAnswerModalContainer.classList.remove('active-modal');
      initiateGame();
    });
    if (isUserLoggedIn) {
      loggedUserFunctionality.playAgainBtnAfterPromo.addEventListener('click', () => {
        loggedUserFunctionality.promotionMsgModalContainer.classList.remove('active-modal');
        initiateGame()
      });
    }
  }

  function closeModals() {
    closeGameModal.addEventListener('click', () => {
      mainModalContainer.classList.remove('active-modal');
      progressBar.currentProgress.style.width = 1 + '%';
      clearInterval(intervalId);
      clearTimeout(timeoutId);
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
    if (isUserLoggedIn) {
      loggedUserFunctionality.closePromoMsgModal.addEventListener('click', () => {
        loggedUserFunctionality.promotionMsgModalContainer.classList.remove('active-modal');
      });
    }
  }
  startGameEvent();
  submitGameAnswer();
  checkRightAnswer();
  playAgain();
  closeModals();
  return;
}

module.exports = {
  implementGameModals
};
