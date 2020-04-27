import { implementGameModals } from '../homepage/modules/modal';
import {
  authenticateUser,
  getTopFivePlayers,
  showCurrentGameHistory,
  showProfile,
  showTopFivePlayers,
  signOut
} from './modules/dashboardMain';


// Data related to the features that registered users get
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

// Data related to rendering the main parts of the dashboard
const topFivePlayersDiv = document.querySelector('.top-players');
const wordsTableElements = {
  wordsTableBody: document.getElementsByTagName('tbody')[0],
  wordsHistoryDiv: document.querySelector('.words-history'),
};

const signOutBtn = document.querySelector('.signOut-btn');

// Render all the content on the dashboard after fetching the necessary data
window.onload = () => {
  if (!loggedUserFunctionality.currentUser) {
    alert(res.msg);
    window.location = '/';
  } else {
    authenticateUser()
      .then(res => res.json())
      .then((res) => {
        if (res && res.isAuthorized) {
          showProfile(
            loggedUserFunctionality.profile,
            loggedUserFunctionality.currentUser
          );
          showCurrentGameHistory(
            loggedUserFunctionality.currentUser.gameHistory,
            wordsTableElements
          );
        }
        else {
          localStorage.clear();
          alert(res.msg);
          window.location = '/';
        };
      })
      .then(async () => {
        const getTopFive = await (await getTopFivePlayers()).json();
        showTopFivePlayers(getTopFive.topFiveUsers, topFivePlayersDiv);
      })
      .catch(error => console.error(error));
  }
};

// Implement the logic behind the game functionality on the dashboard
implementGameModals(true, loggedUserFunctionality);

// Sign the user out
signOut(signOutBtn);







