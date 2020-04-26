// Game functionality
let gameWords = [];
let chosenWord = {};
let currentLang = '';

let timeoutId;
let intervalId;


// The function that gets the game data from the server and shows it on the UI
function initiateGame(lang, gameBox, progressBar, mainModalContainer, failureModalContainer) {
  return fetch(`/getrandomwords/${lang}`, {
    method: 'GET'
  })
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

function startGameEvent(
  czPlayBtn,
  enPlayBtn,
  gameBox,
  mainModalContainer,
  failureModalContainer,
  progressBar
) {
  czPlayBtn.addEventListener('click', () => {
    czPlayBtn.disabled = true;
    currentLang = 'cz';
    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer).then(() => {
      czPlayBtn.disabled = false;
    })

  });

  enPlayBtn.addEventListener('click', () => {
    enPlayBtn.disabled = true;
    currentLang = 'en';
    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer).then(() => {
      enPlayBtn.disabled = false;
    })

  });
}

function submitGameAnswer(
  submitBtn,
  mainModalContainer,
  successModalContainer,
  failureModalContainer,
  progressBar
) {
  submitBtn.addEventListener('click', () => {
    // Get the checked input in the radio inputs list
    const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];
    if (answer && answer.defaultValue === chosenWord.word) {
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

function checkRightAnswer(
  checkAnswer,
  failureModalContainer,
  rightAnswerModalContainer
) {
  checkAnswer.addEventListener('click', () => {
    failureModalContainer.classList.remove('active-modal');
    rightAnswerModalContainer.classList.add('active-modal');
    document.querySelector('.word').innerHTML = chosenWord.word;
    document.querySelector('.meaning').innerHTML = chosenWord.meaning;
  });
}

function playAgain(
  gameBox,
  mainModalContainer,
  failureModalContainer,
  playAgainBtnAfterFailure,
  successModalContainer,
  playAgainBtnAfterSuccess,
  rightAnswerModalContainer,
  playAgainBynAfterCheck,
  progressBar
) {
  playAgainBtnAfterFailure.addEventListener('click', () => {
    failureModalContainer.classList.remove('active-modal');
    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);

  });

  playAgainBtnAfterSuccess.addEventListener('click', () => {
    successModalContainer.classList.remove('active-modal');
    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);
  });

  playAgainBynAfterCheck.addEventListener('click', () => {
    rightAnswerModalContainer.classList.remove('active-modal');
    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);
  });
}

function closeModals(
  closeGameModal,
  mainModalContainer,
  closeFailureModal,
  failureModalContainer,
  closeSuccessModal,
  successModalContainer,
  closeCheckModal,
  rightAnswerModalContainer,
  progressBar
) {
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
}

module.exports = {
  startGameEvent,
  submitGameAnswer,
  checkRightAnswer,
  playAgain,
  closeModals
}