// Make the game modal pop up or disappear
const playBtn = document.querySelector('.play-btn');
const modalContainer = document.querySelector('.game-modal-container');
const failureModalContainer = document.querySelector('.failure-modal-container');
const closeGameModal = document.querySelector('.close-game-modal');
const closeFailureModal = document.querySelector('.close-failure-modal');
const playAgainBtn = document.querySelector('.play-again-btn');

playBtn.addEventListener('click', () => {
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