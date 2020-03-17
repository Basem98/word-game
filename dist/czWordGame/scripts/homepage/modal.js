// Game functionality
const czPlayBtn = document.querySelector('.play-btn-cz');
const enPlayBtn = document.querySelector('.play-btn-en');

const progress = document.querySelector('.progress');

const modalContainer = document.querySelector('.game-modal-container');
const failureModalContainer = document.querySelector('.failure-modal-container');
const successModalContainer = document.querySelector('.success-modal-container');
const rightAnswerModalContainer = document.querySelector('.right-answer-container');

const submitBtn = document.querySelector('.submit-solution-btn');

const closeGameModal = document.querySelector('.close-game-modal');
const closeFailureModal = document.querySelector('.close-failure-modal');
const closeSuccessModal = document.querySelector('.close-success-modal');
const closeCheckModal = document.querySelector('.close-rightAnswer-modal');

const checkAnswer = document.querySelector('.check-answer-btn');

const playAgainBtnAfterFailure = document.querySelector('.failure-btn');
const playAgainBtnAfterSuccess = document.querySelector('.success-btn');
const playAgainBynAfterCheck = document.querySelector('.right-answer-btn');

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
  return fetch(`/getrandomwords/${lang}`, {
    method: 'GET'
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
  czPlayBtn.disabled = true;
  currentLang = 'cz';
  initialGame(currentLang).then(() => {
    czPlayBtn.disabled = false;
  })

});

enPlayBtn.addEventListener('click', () => {
  enPlayBtn.disabled = true;
  currentLang = 'en';
  initialGame(currentLang).then(() => {
    enPlayBtn.disabled = false;
  })

});

submitBtn.addEventListener('click', () => {
  // Get the checked input in the radio inputs list
  const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];
  if (answer && answer.defaultValue === chosenWord.word) {
    successModalContainer.classList.add('active-modal');
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
