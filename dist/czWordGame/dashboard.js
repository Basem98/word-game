/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/czWordGame/scripts/dashboard/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/czWordGame/scripts/dashboard/dashboard.js":
/*!********************************************************!*\
  !*** ./dist/czWordGame/scripts/dashboard/dashboard.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homepage/modules/modal */ \"./dist/czWordGame/scripts/homepage/modules/modal.js\");\n/* harmony import */ var _homepage_modules_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homepage_modules_modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dashboardMain */ \"./dist/czWordGame/scripts/dashboard/modules/dashboardMain.js\");\n/* harmony import */ var _modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n// Data related to the features that registered users get\nconst loggedUserFunctionality = {\n  currentUser: JSON.parse(localStorage.getItem('currentUser')),\n  profile: document.querySelector('.profile'),\n  promotionMsgModalContainer: document.querySelector('.title-promotion-container'),\n  promotionMsg: document.querySelector('.promotion-msg'),\n  successMsg: document.querySelector('.success-msg'),\n  closePromoMsgModal: document.querySelector('.close-promotionMsg-modal'),\n  playAgainBtnAfterPromo: document.querySelector('.continue-playing-btn'),\n  wordsHistoryDiv: document.querySelector('.words-history'),\n  topFivePlayersDiv: document.querySelector('.allUsers-container'),\n  getTopFivePlayers: _modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"getTopFivePlayers\"],\n  showTopFivePlayers: _modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"showTopFivePlayers\"]\n};\n\n// Data related to rendering the main parts of the dashboard\nconst wordsTableElements = {\n  wordsTableBody: document.getElementsByTagName('tbody')[0],\n  wordsHistoryDiv: document.querySelector('.words-history'),\n};\n\nconst signOutBtn = document.querySelector('.signOut-btn');\n\n// Render all the content on the dashboard after fetching the necessary data\nwindow.onload = () => {\n  if (!loggedUserFunctionality.currentUser) {\n    alert(res.msg);\n    window.location = '/';\n  } else {\n    Object(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"authenticateUser\"])()\n      .then(res => res.json())\n      .then((res) => {\n        if (res && res.isAuthorized) {\n          Object(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"showProfile\"])(\n            loggedUserFunctionality.profile,\n            loggedUserFunctionality.currentUser\n          );\n          Object(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"showCurrentGameHistory\"])(\n            loggedUserFunctionality.currentUser.gameHistory,\n            wordsTableElements\n          );\n        }\n        else {\n          localStorage.clear();\n          alert(res.msg);\n          window.location = '/';\n        };\n      })\n      .then(async () => {\n        const getTopFive = await (await Object(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"getTopFivePlayers\"])()).json();\n        Object(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"showTopFivePlayers\"])(getTopFive.topFiveUsers, loggedUserFunctionality.topFivePlayersDiv);\n      })\n      .catch(error => console.error(error));\n  }\n};\n\n// Implement the logic behind the game functionality on the dashboard\nObject(_homepage_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"implementGameModals\"])(true, loggedUserFunctionality);\n\n// Sign the user out\nObject(_modules_dashboardMain__WEBPACK_IMPORTED_MODULE_1__[\"signOut\"])(signOutBtn);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/dashboard/dashboard.js?");

/***/ }),

/***/ "./dist/czWordGame/scripts/dashboard/modules/dashboardMain.js":
/*!********************************************************************!*\
  !*** ./dist/czWordGame/scripts/dashboard/modules/dashboardMain.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Main functionalities on the dashboard page\n\n\n// Authenticate the current stored cookie to make sure that it still has access\nfunction authenticateUser() {\n  return fetch('/authenticateuser', {\n    method: 'GET',\n    credentials: \"same-origin\"\n  });\n}\n\n// Show the user data in the profile section\nfunction showProfile(profile, currentUser) {\n  profile.children.item(0).innerHTML = currentUser.username;\n  profile.children.item(1).innerHTML = currentUser.title;\n  profile.children.item(2).innerHTML = currentUser.score;\n  profile.children.item(1).style.color = '#e40046';\n  profile.children.item(1).style.fontWeight = 'bold';\n  profile.children.item(2).style.color = '#e40046';\n  profile.children.item(2).style.fontWeight = 'bold';\n  profile.children.item(3).innerHTML = currentUser.email;\n  return;\n}\n\n// Show the words history table\nfunction showCurrentGameHistory(\n  currentGameHistory,\n  wordsTableElements\n) {\n  if (currentGameHistory.length > 0) {\n    currentGameHistory.forEach((wordObj) => {\n      const wordData = document.createElement('tr');\n      const language = document.createElement('td');\n      const word = document.createElement('td');\n      const wordMeaning = document.createElement('td');\n\n      language.innerHTML = wordObj.lang;\n      word.innerHTML = wordObj.word;\n      wordMeaning.innerHTML = wordObj.meaning;\n      wordData.appendChild(language);\n      wordData.appendChild(word);\n      wordData.appendChild(wordMeaning);\n      wordsTableElements.wordsTableBody.appendChild(wordData);\n      wordsTableElements.wordsHistoryDiv.style.visibility = 'visible';\n      wordsTableElements.wordsHistoryDiv.style.opacity = 1;\n    });\n  }\n}\n\n// Get the top five players from the server\nfunction getTopFivePlayers() {\n  return fetch('/gettopfive', {\n    method: 'GET',\n    credentials: \"same-origin\"\n  });\n}\n\n// Show the top five users\nfunction showTopFivePlayers(topFivePlayers, topFivePlayersDiv) {\n  while (topFivePlayersDiv.children.length > 0) {\n    topFivePlayersDiv.removeChild(topFivePlayersDiv.firstChild);\n  }\n  topFivePlayers.forEach(user => {\n\n    const paragraph1 = document.createElement('p');\n    paragraph1.setAttribute('class', `${user.username}`);\n    const paragraph2 = document.createElement('p');\n    paragraph2.setAttribute('class', `${user.username}`);\n    const paragraph3 = document.createElement('p');\n    paragraph3.setAttribute('class', `${user.username}`);\n\n    paragraph2.style.color = '#e40046';\n    paragraph2.style.fontWeight = 'bold';\n    paragraph3.style.color = '#e40046';\n    paragraph3.style.fontWeight = 'bold';\n\n    const username = document.createTextNode(user.username);\n    const title = document.createTextNode(user.title);\n    const score = document.createTextNode(user.score);\n\n    paragraph1.appendChild(username);\n    paragraph2.appendChild(title);\n    paragraph3.appendChild(score);\n\n    const userContainer = document.createElement('div');\n    userContainer.appendChild(paragraph1);\n    userContainer.appendChild(paragraph2);\n    userContainer.appendChild(paragraph3);\n    topFivePlayersDiv.appendChild(userContainer);\n  });\n  return;\n}\n\n// Sign out\nfunction signOut(signOutBtn) {\n  signOutBtn.addEventListener('click', () => {\n    fetch('/signout', {\n      method: 'GET',\n      credentials: 'same-origin'\n    })\n      .then(res => res.json())\n      .then(res => {\n        alert(res.msg);\n        window.location = '/';\n      })\n      .catch(error => console.error(error));\n  });\n}\n\n\nmodule.exports = {\n  authenticateUser,\n  showProfile,\n  showCurrentGameHistory,\n  getTopFivePlayers,\n  showTopFivePlayers,\n  signOut\n};\n\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/dashboard/modules/dashboardMain.js?");

/***/ }),

/***/ "./dist/czWordGame/scripts/homepage/modules/modal.js":
/*!***********************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/modules/modal.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function implementGameModals(\n  isUserLoggedIn,\n  loggedUserFunctionality\n) {\n  // Elements related to the logic behind the game on the homepage\n  const czPlayBtn = document.querySelector('.play-btn-cz');\n  const enPlayBtn = document.querySelector('.play-btn-en');\n\n  const mainModalContainer = document.querySelector('.game-modal-container');\n  const failureModalContainer = document.querySelector('.failure-modal-container');\n  const successModalContainer = document.querySelector('.success-modal-container');\n  const rightAnswerModalContainer = document.querySelector('.right-answer-container');\n\n  const submitBtn = document.querySelector('.submit-solution-btn');\n\n  const closeGameModal = document.querySelector('.close-game-modal');\n  const closeFailureModal = document.querySelector('.close-failure-modal');\n  const closeSuccessModal = document.querySelector('.close-success-modal');\n  const closeCheckModal = document.querySelector('.close-rightAnswer-modal');\n\n  const checkAnswer = document.querySelector('.check-rightAnswer-btn');\n\n  const playAgainBtnAfterFailure = document.querySelector('.failure-btn');\n  const playAgainBtnAfterSuccess = document.querySelector('.success-btn');\n  const playAgainBynAfterCheck = document.querySelector('.right-answer-btn');\n\n  const gameBox = {};\n  gameBox.wordDefinition = document.querySelector('.word-definition');\n  gameBox.actualInputElements = [\n    document.querySelector('#sol-0'),\n    document.querySelector('#sol-1'),\n    document.querySelector('#sol-2')\n  ];\n  gameBox.inputElementsLabels = [\n    document.querySelector('.label-0'),\n    document.querySelector('.label-1'),\n    document.querySelector('.label-2')\n  ];\n\n  const progressBar = {\n    currentProgress: document.querySelector('.progress'),\n    progressTimer: (mainModalContainer, failureModalContainer) => {\n      if (mainModalContainer.classList.contains('active-modal')) {\n        mainModalContainer.classList.remove('active-modal');\n        failureModalContainer.classList.add('active-modal');\n      } else {\n        clearTimeout(timeoutId);\n      }\n    },\n    progressIntervals: () => {\n      const previousProgress = parseFloat(progressBar.currentProgress.style.width.slice(0, -1));\n      if (previousProgress < 99) {\n        progressBar.currentProgress.style.width = previousProgress + 0.066 + '%';\n      } else {\n        clearInterval(intervalId);\n      }\n    }\n  }\n  let gameWords = [];\n  let chosenWord = {};\n  let currentLang = '';\n\n  let timeoutId;\n  let intervalId;\n\n\n  // Declaring the functions that gets the game data from the server and shows it on the UI\n  function initiateGame() {\n    let getWords;\n    if (isUserLoggedIn) {\n      getWords = fetch(`/getrandomwords/${currentLang}`, {\n        method: 'POST',\n        credentials: 'same-origin',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          userId: loggedUserFunctionality.currentUser._id\n        })\n      });\n    } else {\n      getWords = fetch(`/getrandomwords/${currentLang}`, {\n        method: 'GET'\n      });\n    }\n    return getWords\n      .then(res => res.json())\n      .then((res) => {\n        gameWords = res.chosenWords;\n        chosenWord = gameWords[Math.floor(Math.random() * 3)];\n      })\n      .then(() => {\n        gameBox.wordDefinition.innerHTML = chosenWord.meaning;\n        gameBox.actualInputElements.forEach((inputElement, index) => {\n          inputElement.setAttribute('value', gameWords[index].word);\n        });\n        gameBox.inputElementsLabels.forEach((inputLabel, index) => {\n          inputLabel.innerHTML = gameWords[index].word;\n        });\n      })\n      .then(() => {\n        progressBar.currentProgress.style.width = '1%';\n        mainModalContainer.classList.add('active-modal');\n        timeoutId = setTimeout(() => {\n          progressBar.progressTimer(mainModalContainer, failureModalContainer);\n        }, 15 * 1000);\n        intervalId = setInterval(() => {\n          progressBar.progressIntervals();\n        }, 10);\n      })\n      .catch(error => console.error(error));\n  }\n\n  function startGameEvent() {\n    czPlayBtn.addEventListener('click', () => {\n      czPlayBtn.disabled = true;\n      currentLang = 'cz';\n      initiateGame().then(() => {\n        czPlayBtn.disabled = false;\n      })\n\n    });\n\n    enPlayBtn.addEventListener('click', () => {\n      enPlayBtn.disabled = true;\n      currentLang = 'en';\n      initiateGame().then(() => {\n        enPlayBtn.disabled = false;\n      })\n\n    });\n  }\n\n  function submitGameAnswer() {\n    submitBtn.addEventListener('click', () => {\n      // Get the checked input in the radio inputs list\n      const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];\n      if (answer && answer.defaultValue === chosenWord.word) {\n        // If the user is logged in, implement functionalities specific to logged-in users\n        if (isUserLoggedIn) {\n          loggedUserFunctionality.currentUser.score += 10;\n          fetch('/updategameinfo', {\n            method: 'PUT',\n            credentials: 'same-origin',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              id: loggedUserFunctionality.currentUser._id,\n              score: loggedUserFunctionality.currentUser.score\n            })\n          })\n            .then(res => res.json())\n            .then((res) => {\n              if (res && res.success) {\n                return fetch('/updategamehistory', {\n                  method: 'PUT',\n                  credentials: 'same-origin',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  body: JSON.stringify({\n                    id: loggedUserFunctionality.currentUser._id,\n                    newWord: chosenWord\n                  })\n                })\n              } else {\n                console.log(res);\n              }\n            })\n            .then(res => res.json())\n            .then((res) => {\n              if (res && res.success) {\n                // Update the user data saved in the localStorage\n\n                if (loggedUserFunctionality.currentUser.title !== res.currentUser.title) {\n                  loggedUserFunctionality.promotionMsg.innerHTML = `Congratz, ${loggedUserFunctionality.currentUser.fullName}! You have just been promoted and assigned the title of ${res.currentUser.title}!`;\n                  loggedUserFunctionality.promotionMsgModalContainer.classList.add('active-modal');\n                  successModalContainer.classList.remove('active-modal');\n                }\n\n                loggedUserFunctionality.currentUser = res.currentUser;\n                localStorage.removeItem('currentUser');\n                localStorage.setItem('currentUser', JSON.stringify(res.currentUser));\n\n                // Update the score and title in the loggedUserFunctionality.profile section\n                loggedUserFunctionality.profile.children.item(1).innerHTML = loggedUserFunctionality.currentUser.title;\n                loggedUserFunctionality.profile.children.item(2).innerHTML = loggedUserFunctionality.currentUser.score;\n\n                // Update the game history table\n                loggedUserFunctionality.wordsHistoryDiv.style.visibility = 'visible';\n                loggedUserFunctionality.wordsHistoryDiv.style.opacity = 1;\n                const wordsTableBody = document.getElementsByTagName('tbody')[0];\n                const wordData = document.createElement('tr');\n                const language = document.createElement('td');\n                const word = document.createElement('td');\n                const wordMeaning = document.createElement('td');\n                language.innerHTML = chosenWord.lang;\n                word.innerHTML = chosenWord.word;\n                wordMeaning.innerHTML = chosenWord.meaning;\n                wordData.appendChild(language);\n                wordData.appendChild(word);\n                wordData.appendChild(wordMeaning);\n                wordsTableBody.appendChild(wordData);\n                loggedUserFunctionality.currentUser.gameHistory.push(chosenWord);\n\n                // Update the score and title in the top five players section\n                (async () => {\n                  const getTopFive = await (await loggedUserFunctionality.getTopFivePlayers()).json();\n                  loggedUserFunctionality.showTopFivePlayers(getTopFive.topFiveUsers, loggedUserFunctionality.topFivePlayersDiv);\n                })();\n              } else {\n                console.log(res);\n              }\n            })\n            .catch(error => console.error(error))\n          successModalContainer.classList.add('active-modal');\n          loggedUserFunctionality.successMsg.innerHTML = `Congratz, ${loggedUserFunctionality.currentUser.fullName}! You got the answer right! Your new score is ${loggedUserFunctionality.currentUser.score} points`;\n        }\n        successModalContainer.classList.add('active-modal');\n      } else {\n        failureModalContainer.classList.add('active-modal');\n      }\n      mainModalContainer.classList.remove('active-modal');\n      progressBar.currentProgress.style.width = 1 + '%';\n      // clearInterval(progressBarIntervals);\n      clearInterval(intervalId);\n      // clearTimeout(gameprogressTimer);\n      clearTimeout(timeoutId);\n    });\n  }\n\n  function checkRightAnswer() {\n    checkAnswer.addEventListener('click', () => {\n      failureModalContainer.classList.remove('active-modal');\n      rightAnswerModalContainer.classList.add('active-modal');\n      document.querySelector('.word').innerHTML = chosenWord.word;\n      document.querySelector('.meaning').innerHTML = chosenWord.meaning;\n    });\n  }\n\n  function playAgain() {\n    playAgainBtnAfterFailure.addEventListener('click', () => {\n      failureModalContainer.classList.remove('active-modal');\n      initiateGame();\n\n    });\n\n    playAgainBtnAfterSuccess.addEventListener('click', () => {\n      successModalContainer.classList.remove('active-modal');\n      initiateGame();\n    });\n\n    playAgainBynAfterCheck.addEventListener('click', () => {\n      rightAnswerModalContainer.classList.remove('active-modal');\n      initiateGame();\n    });\n    if (isUserLoggedIn) {\n      loggedUserFunctionality.playAgainBtnAfterPromo.addEventListener('click', () => {\n        loggedUserFunctionality.promotionMsgModalContainer.classList.remove('active-modal');\n        initiateGame()\n      });\n    }\n  }\n\n  function closeModals() {\n    closeGameModal.addEventListener('click', () => {\n      mainModalContainer.classList.remove('active-modal');\n      progressBar.currentProgress.style.width = 1 + '%';\n      clearInterval(intervalId);\n      clearTimeout(timeoutId);\n    });\n\n    closeFailureModal.addEventListener('click', () => {\n      failureModalContainer.classList.remove('active-modal');\n    });\n\n    closeSuccessModal.addEventListener('click', () => {\n      successModalContainer.classList.remove('active-modal');\n    });\n\n    closeCheckModal.addEventListener('click', () => {\n      rightAnswerModalContainer.classList.remove('active-modal');\n    });\n    if (isUserLoggedIn) {\n      loggedUserFunctionality.closePromoMsgModal.addEventListener('click', () => {\n        loggedUserFunctionality.promotionMsgModalContainer.classList.remove('active-modal');\n      });\n    }\n  }\n  startGameEvent();\n  submitGameAnswer();\n  checkRightAnswer();\n  playAgain();\n  closeModals();\n  return;\n}\n\nmodule.exports = {\n  implementGameModals\n};\n\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/modules/modal.js?");

/***/ })

/******/ });