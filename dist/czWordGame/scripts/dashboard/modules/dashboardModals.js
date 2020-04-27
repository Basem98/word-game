import { implementGameModals } from '../../homepage/modules/modal';

const loggedUserFunctionality = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  profile: document.querySelector('.profile'),
  promotionMsgModalContainer: document.querySelector('.title-promotion-container'),
  promotionMsg: document.querySelector('.promotion-msg'),
  successMsg: document.querySelector('.success-msg'),
  closePromoMsgModal: document.querySelector('.close-promotionMsg-modal'),
  playAgainBtnAfterPromo: document.querySelector('.continue-playing-btn'),
  wordsHistoryDiv: document.querySelector('.words-history')
};


implementGameModals(true, loggedUserFunctionality);