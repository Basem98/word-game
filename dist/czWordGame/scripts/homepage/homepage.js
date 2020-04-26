import {
  switchForms,
  submitFormsEvent,
  getCountriesList
} from './modules/forms';

import {
  startGameEvent,
  submitGameAnswer,
  checkRightAnswer,
  playAgain,
  closeModals
} from './modules/modal';


// Elements related to the logic behind the forms
const formsTogglers = {
  signInBtn: document.querySelector('.signIn-btn'),
  signUpBtn: document.querySelector('.signUp-btn')
};

const submitButtons = {
  sumbitSignInForm: document.querySelector('.signIn-form-btn'),
  sumbitSignUpForm: document.querySelector('.signUp-form-btn')
};

const forms = {
  signInForm: document.querySelector('.signIn-form'),
  signUpForm: document.querySelector('.signUp-form')
};

const responseMsgs = {
  signInResponse: document.querySelector('.signIn-errorMsg'),
  signUpResponse: document.querySelector('.signUp-errorMsg')
}

// Switching between the two forms
switchForms(
  formsTogglers.signInBtn,
  forms.signInForm,
  formsTogglers.signUpBtn,
  forms.signUpForm
);

// Get the coutnries list to prepare the signup form's dropdown list
window.onload = getCountriesList();

// Add event listeners to the buttons and the Enter key
submitFormsEvent(
  submitButtons.sumbitSignInForm,
  submitButtons.sumbitSignUpForm,
  forms.signInForm,
  forms.signUpForm,
  responseMsgs.signInResponse,
  responseMsgs.signUpResponse
);

/*---------------------------------------------------------------------------------*/

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

// Add event listeners that listen to the submitGame event, determine the language and initiate the game
startGameEvent(
  czPlayBtn,
  enPlayBtn,
  gameBox,
  mainModalContainer,
  failureModalContainer,
  progressBar
);

// Submit the user's answer and check whether it's right or wrong and based on the answer show other modals
submitGameAnswer(
  submitBtn,
  mainModalContainer,
  successModalContainer,
  failureModalContainer,
  progressBar
);

// Associate the checkRightAnswer button with an event listener that shows the user a modal including the chosen word and its meaning
checkRightAnswer(
  checkAnswer,
  failureModalContainer,
  rightAnswerModalContainer
);

// The play again button event listeners that initiate the game again
playAgain(
  gameBox,
  mainModalContainer,
  failureModalContainer,
  playAgainBtnAfterFailure,
  successModalContainer,
  playAgainBtnAfterSuccess,
  rightAnswerModalContainer,
  playAgainBynAfterCheck,
  progressBar
);

// Add the close modal funcitonality to all the modals
closeModals(
  closeGameModal,
  mainModalContainer,
  closeFailureModal,
  failureModalContainer,
  closeSuccessModal,
  successModalContainer,
  closeCheckModal,
  rightAnswerModalContainer,
  progressBar
);