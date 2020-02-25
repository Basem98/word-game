// Make the game modal pop up or disappear
const czPlayBtn = document.querySelector('.play-btn-cz');
const enPlayBtn = document.querySelector('.play-btn-en');
const modalContainer = document.querySelector('.game-modal-container');
const failureModalContainer = document.querySelector('.failure-modal-container');
const closeGameModal = document.querySelector('.close-game-modal');
const closeFailureModal = document.querySelector('.close-failure-modal');
const playAgainBtn = document.querySelector('.play-again-btn');
let gameWords = [];
let chosenWord = {};

czPlayBtn.addEventListener('click', () => {
  fetch('/getrandomwords/cz', {
    method: 'GET'
  })
    .then(res => res.json())
    .then((res) => {
      gameWords = res.chosenWords;
      chosenWord = gameWords[Math.floor(Math.random() * 3)];
    })
    .catch(error => console.error(error));
  modalContainer.classList.add('active-modal');
  setTimeout(() => {
    if (modalContainer.classList.contains('active-modal')) {
      modalContainer.classList.remove('active-modal');
      failureModalContainer.classList.add('active-modal');
    }
  }, 20 * 1000);
});

enPlayBtn.addEventListener('click', () => {
  modalContainer.classList.add('active-modal');
  setTimeout(() => {
    if (modalContainer.classList.contains('active-modal')) {
      modalContainer.classList.remove('active-modal');
      failureModalContainer.classList.add('active-modal');
    }
  }, 20 * 1000);
});

closeGameModal.addEventListener('click', () => {
  modalContainer.classList.remove('active-modal');
});

closeFailureModal.addEventListener('click', () => {
  failureModalContainer.classList.remove('active-modal');
});

playAgainBtn.addEventListener('click', () => {
  modalContainer.classList.add('active-modal');
  failureModalContainer.classList.remove('active-modal');
  setTimeout(() => {
    if (modalContainer.classList.contains('active-modal')) {
      modalContainer.classList.remove('active-modal');
      failureModalContainer.classList.add('active-modal');
    }
  }, 20 * 1000);
});