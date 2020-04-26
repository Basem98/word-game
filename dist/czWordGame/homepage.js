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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/czWordGame/scripts/homepage/homepage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/czWordGame/scripts/homepage/homepage.js":
/*!******************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/homepage.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./dist/czWordGame/scripts/homepage/modules/forms.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./dist/czWordGame/scripts/homepage/modules/modal.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_modal__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n// Elements related to the logic behind the forms\nconst formsTogglers = {\n  signInBtn: document.querySelector('.signIn-btn'),\n  signUpBtn: document.querySelector('.signUp-btn')\n};\n\nconst submitButtons = {\n  sumbitSignInForm: document.querySelector('.signIn-form-btn'),\n  sumbitSignUpForm: document.querySelector('.signUp-form-btn')\n};\n\nconst forms = {\n  signInForm: document.querySelector('.signIn-form'),\n  signUpForm: document.querySelector('.signUp-form')\n};\n\nconst responseMsgs = {\n  signInResponse: document.querySelector('.signIn-errorMsg'),\n  signUpResponse: document.querySelector('.signUp-errorMsg')\n}\n\n// Switching between the two forms\nObject(_modules_forms__WEBPACK_IMPORTED_MODULE_0__[\"switchForms\"])(\n  formsTogglers.signInBtn,\n  forms.signInForm,\n  formsTogglers.signUpBtn,\n  forms.signUpForm\n);\n\n// Get the coutnries list to prepare the signup form's dropdown list\nwindow.onload = Object(_modules_forms__WEBPACK_IMPORTED_MODULE_0__[\"getCountriesList\"])();\n\n// Add event listeners to the buttons and the Enter key\nObject(_modules_forms__WEBPACK_IMPORTED_MODULE_0__[\"submitFormsEvent\"])(\n  submitButtons.sumbitSignInForm,\n  submitButtons.sumbitSignUpForm,\n  forms.signInForm,\n  forms.signUpForm,\n  responseMsgs.signInResponse,\n  responseMsgs.signUpResponse\n);\n\n/*---------------------------------------------------------------------------------*/\n\n// Elements related to the logic behind the game on the homepage\nconst czPlayBtn = document.querySelector('.play-btn-cz');\nconst enPlayBtn = document.querySelector('.play-btn-en');\n\nconst mainModalContainer = document.querySelector('.game-modal-container');\nconst failureModalContainer = document.querySelector('.failure-modal-container');\nconst successModalContainer = document.querySelector('.success-modal-container');\nconst rightAnswerModalContainer = document.querySelector('.right-answer-container');\n\nconst submitBtn = document.querySelector('.submit-solution-btn');\n\nconst closeGameModal = document.querySelector('.close-game-modal');\nconst closeFailureModal = document.querySelector('.close-failure-modal');\nconst closeSuccessModal = document.querySelector('.close-success-modal');\nconst closeCheckModal = document.querySelector('.close-rightAnswer-modal');\n\nconst checkAnswer = document.querySelector('.check-rightAnswer-btn');\n\nconst playAgainBtnAfterFailure = document.querySelector('.failure-btn');\nconst playAgainBtnAfterSuccess = document.querySelector('.success-btn');\nconst playAgainBynAfterCheck = document.querySelector('.right-answer-btn');\n\nconst gameBox = {};\ngameBox.wordDefinition = document.querySelector('.word-definition');\ngameBox.actualInputElements = [\n  document.querySelector('#sol-0'),\n  document.querySelector('#sol-1'),\n  document.querySelector('#sol-2')\n];\ngameBox.inputElementsLabels = [\n  document.querySelector('.label-0'),\n  document.querySelector('.label-1'),\n  document.querySelector('.label-2')\n];\n\nconst progressBar = {\n  currentProgress: document.querySelector('.progress'),\n  progressTimer: (mainModalContainer, failureModalContainer) => {\n    if (mainModalContainer.classList.contains('active-modal')) {\n      mainModalContainer.classList.remove('active-modal');\n      failureModalContainer.classList.add('active-modal');\n    } else {\n      clearTimeout(timeoutId);\n    }\n  },\n  progressIntervals: () => {\n    const previousProgress = parseFloat(progressBar.currentProgress.style.width.slice(0, -1));\n    if (previousProgress < 99) {\n      progressBar.currentProgress.style.width = previousProgress + 0.066 + '%';\n    } else {\n      clearInterval(intervalId);\n    }\n  }\n}\n\n// Add event listeners that listen to the submitGame event, determine the language and initiate the game\nObject(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"startGameEvent\"])(\n  czPlayBtn,\n  enPlayBtn,\n  gameBox,\n  mainModalContainer,\n  failureModalContainer,\n  progressBar\n);\n\n// Submit the user's answer and check whether it's right or wrong and based on the answer show other modals\nObject(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"submitGameAnswer\"])(\n  submitBtn,\n  mainModalContainer,\n  successModalContainer,\n  failureModalContainer,\n  progressBar\n);\n\n// Associate the checkRightAnswer button with an event listener that shows the user a modal including the chosen word and its meaning\nObject(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"checkRightAnswer\"])(\n  checkAnswer,\n  failureModalContainer,\n  rightAnswerModalContainer\n);\n\n// The play again button event listeners that initiate the game again\nObject(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"playAgain\"])(\n  gameBox,\n  mainModalContainer,\n  failureModalContainer,\n  playAgainBtnAfterFailure,\n  successModalContainer,\n  playAgainBtnAfterSuccess,\n  rightAnswerModalContainer,\n  playAgainBynAfterCheck,\n  progressBar\n);\n\n// Add the close modal funcitonality to all the modals\nObject(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"closeModals\"])(\n  closeGameModal,\n  mainModalContainer,\n  closeFailureModal,\n  failureModalContainer,\n  closeSuccessModal,\n  successModalContainer,\n  closeCheckModal,\n  rightAnswerModalContainer,\n  progressBar\n);\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/homepage.js?");

/***/ }),

/***/ "./dist/czWordGame/scripts/homepage/modules/forms.js":
/*!***********************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/modules/forms.js ***!
  \***********************************************************/
/*! exports provided: submitFormsEvent, switchForms, validateNewUserData, getCountriesList, signUp, signIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitFormsEvent\", function() { return submitFormsEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchForms\", function() { return switchForms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateNewUserData\", function() { return validateNewUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCountriesList\", function() { return getCountriesList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n// Switching between the two forms\nfunction switchForms(signInBtn, signInForm, signUpBtn, signUpForm) {\n  signInBtn.addEventListener('click', () => {\n    signInForm.classList.add('active-form');\n    signInForm.classList.remove('unactive-signIn-form');\n\n    signUpForm.classList.add('unactive-signUp-form');\n    signUpForm.classList.remove('active-form');\n  });\n\n  signUpBtn.addEventListener('click', () => {\n    signUpForm.classList.add('active-form');\n    signUpForm.classList.remove('unactive-signUp-form');\n\n    signInForm.classList.add('unactive-signIn-form');\n    signInForm.classList.remove('active-form');\n\n  });\n  return;\n}\n\n// client-side signup form validation\nfunction validateNewUserData(userData, signUpResponse) {\n  if (\n    userData.fullName\n    && userData.country\n    && userData.email\n    && userData.username\n    && userData.password\n  ) {\n    userData.fullName = userData.fullName.replace(/^\\s*(\\w+)\\s{1,}(\\w+)\\s*$/, '$1 $2')\n    userData.fullName = userData.fullName.split(' ').map(word => {\n      return `${word[0].toUpperCase()}${word.slice(1)}`;\n    }\n    ).join(' ');\n\n    if (!userData.email.match(/^\\w+\\.*\\w+\\@\\w+(\\.com|\\.net)$/g)) {\n      signUpResponse.innerHTML = 'Please use a proper email address that looks like this: example@something.com or example@something.net';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n\n    if (!userData.username.match(/^\\w{6,12}/g)) {\n      signUpResponse.innerHTML = 'Your username must be between 6 and 12 characters long and it cannot have any special characters or white spaces';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n\n    if (!(userData.password.length >= 8) || !(userData.password.length <= 20)) {\n      signUpResponse.innerHTML = 'Your password must be between 8 and 20 characters long';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n    signUpResponse.innerHTML = '';\n    signUpResponse.style.visibility = 'hidden';\n    return true;\n  } else {\n    signUpResponse.innerHTML = 'Please fill all the required fields';\n    signUpResponse.style.visibility = 'visible';\n    return false;\n  }\n}\n\n\n\n\n\n// Get a list of all the countries for the dropdown list in the signup form\nfunction getCountriesList() {\n  const dropDownList = document.querySelector('#country-list');\n\n  fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then((countriesList) => {\n    countriesList.forEach((country) => {\n      const option = document.createElement('option');\n      const textNode = document.createTextNode(country.name);\n      option.setAttribute('value', country.name);\n      option.appendChild(textNode);\n      dropDownList.appendChild(option);\n      return;\n    });\n  })\n}\n\n// Send the user's data to the server to sign them in\nfunction signIn(signInResponse) {\n  const userData = {\n    username: document.getElementById('signIn-username').value,\n    password: document.getElementById('signIn-password').value\n  }\n  if (userData.username && userData.password) {\n    fetch('/signin', {\n      method: 'POST',\n      body: JSON.stringify(userData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n      .then(res => res.json())\n      .then((res) => {\n        if (res && res.success) {\n          localStorage.clear();\n          localStorage.setItem('currentUser', JSON.stringify(res.user));\n          window.location = '/dashboard.html';\n        } else {\n          signInResponse.innerHTML = res.msg;\n          signInResponse.style.visibility = 'visible';\n        }\n        return;\n      })\n      .catch(error => console.error(error));\n  }\n  else {\n    signInResponse.innerHTML = 'Please fill all the required fields';\n    signInResponse.style.visibility = 'visible';\n    return;\n  }\n\n}\n\n\n\n// Send the new user's data to the server to sign them up\nfunction signUp(signUpResponse) {\n  const userData = {\n    fullName: document.getElementsByName('fullName')[0].value,\n    country: document.getElementsByName('country')[0].value,\n    email: document.getElementsByName('email')[0].value,\n    username: document.getElementById('signUp-username').value,\n    password: document.getElementById('signUp-password').value\n  }\n  if (validateNewUserData(userData, signUpResponse)) {\n    fetch('/signup', {\n      method: 'POST',\n      body: JSON.stringify(userData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n      .then(res => res.json())\n      .then(res => {\n        signUpResponse.innerHTML = res.msg;\n        signUpResponse.style.visibility = 'visible';\n        return;\n      })\n  }\n}\n\n// Add the signin and the signup event to the form buttons\nfunction submitFormsEvent(\n  sumbitSignInBtn,\n  submitSignUpBtn,\n  signInForm,\n  signUpForm,\n  signInResponse,\n  signUpResponse\n) {\n  // Associating the form buttons with submitting either of the forms\n  sumbitSignInBtn.addEventListener('click', () => {\n    signIn(signInResponse);\n  });\n  submitSignUpBtn.addEventListener('click', () => {\n    signUp(signUpResponse);\n  });\n\n  // Associating the Enter key press with submitting either of the forms, if one of them is active\n  window.onload = (event) => {\n    if (event.key === 'Enter') {\n      if (signInForm.classList.contains('active-form')) {\n        signIn(signInResponse);\n      } else if (signUpForm.classList.contains('active-form')) {\n        signUp(signUpResponse);\n      } else {\n        event.preventDefault();\n      }\n    }\n  }\n  return;\n}\n\n// Submitting the user data to sign them up\n\n\n\n\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/modules/forms.js?");

/***/ }),

/***/ "./dist/czWordGame/scripts/homepage/modules/modal.js":
/*!***********************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/modules/modal.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Game functionality\nlet gameWords = [];\nlet chosenWord = {};\nlet currentLang = '';\n\nlet timeoutId;\nlet intervalId;\n\n\n// The function that gets the game data from the server and shows it on the UI\nfunction initiateGame(lang, gameBox, progressBar, mainModalContainer, failureModalContainer) {\n  return fetch(`/getrandomwords/${lang}`, {\n    method: 'GET'\n  })\n    .then(res => res.json())\n    .then((res) => {\n      gameWords = res.chosenWords;\n      chosenWord = gameWords[Math.floor(Math.random() * 3)];\n    })\n    .then(() => {\n      gameBox.wordDefinition.innerHTML = chosenWord.meaning;\n      gameBox.actualInputElements.forEach((inputElement, index) => {\n        inputElement.setAttribute('value', gameWords[index].word);\n      });\n      gameBox.inputElementsLabels.forEach((inputLabel, index) => {\n        inputLabel.innerHTML = gameWords[index].word;\n      });\n    })\n    .then(() => {\n      progressBar.currentProgress.style.width = '1%';\n      mainModalContainer.classList.add('active-modal');\n      timeoutId = setTimeout(() => {\n        progressBar.progressTimer(mainModalContainer, failureModalContainer);\n      }, 15 * 1000);\n      intervalId = setInterval(() => {\n        progressBar.progressIntervals();\n      }, 10);\n    })\n    .catch(error => console.error(error));\n}\n\nfunction startGameEvent(\n  czPlayBtn,\n  enPlayBtn,\n  gameBox,\n  mainModalContainer,\n  failureModalContainer,\n  progressBar\n) {\n  czPlayBtn.addEventListener('click', () => {\n    czPlayBtn.disabled = true;\n    currentLang = 'cz';\n    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer).then(() => {\n      czPlayBtn.disabled = false;\n    })\n\n  });\n\n  enPlayBtn.addEventListener('click', () => {\n    enPlayBtn.disabled = true;\n    currentLang = 'en';\n    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer).then(() => {\n      enPlayBtn.disabled = false;\n    })\n\n  });\n}\n\nfunction submitGameAnswer(\n  submitBtn,\n  mainModalContainer,\n  successModalContainer,\n  failureModalContainer,\n  progressBar\n) {\n  submitBtn.addEventListener('click', () => {\n    // Get the checked input in the radio inputs list\n    const answer = Array.from(document.getElementsByName('solution')).filter(box => box.checked)[0];\n    if (answer && answer.defaultValue === chosenWord.word) {\n      successModalContainer.classList.add('active-modal');\n    } else {\n      failureModalContainer.classList.add('active-modal');\n    }\n    mainModalContainer.classList.remove('active-modal');\n    progressBar.currentProgress.style.width = 1 + '%';\n    // clearInterval(progressBarIntervals);\n    clearInterval(intervalId);\n    // clearTimeout(gameprogressTimer);\n    clearTimeout(timeoutId);\n  });\n}\n\nfunction checkRightAnswer(\n  checkAnswer,\n  failureModalContainer,\n  rightAnswerModalContainer\n) {\n  checkAnswer.addEventListener('click', () => {\n    failureModalContainer.classList.remove('active-modal');\n    rightAnswerModalContainer.classList.add('active-modal');\n    document.querySelector('.word').innerHTML = chosenWord.word;\n    document.querySelector('.meaning').innerHTML = chosenWord.meaning;\n  });\n}\n\nfunction playAgain(\n  gameBox,\n  mainModalContainer,\n  failureModalContainer,\n  playAgainBtnAfterFailure,\n  successModalContainer,\n  playAgainBtnAfterSuccess,\n  rightAnswerModalContainer,\n  playAgainBynAfterCheck,\n  progressBar\n) {\n  playAgainBtnAfterFailure.addEventListener('click', () => {\n    failureModalContainer.classList.remove('active-modal');\n    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);\n\n  });\n\n  playAgainBtnAfterSuccess.addEventListener('click', () => {\n    successModalContainer.classList.remove('active-modal');\n    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);\n  });\n\n  playAgainBynAfterCheck.addEventListener('click', () => {\n    rightAnswerModalContainer.classList.remove('active-modal');\n    initiateGame(currentLang, gameBox, progressBar, mainModalContainer, failureModalContainer);\n  });\n}\n\nfunction closeModals(\n  closeGameModal,\n  mainModalContainer,\n  closeFailureModal,\n  failureModalContainer,\n  closeSuccessModal,\n  successModalContainer,\n  closeCheckModal,\n  rightAnswerModalContainer,\n  progressBar\n) {\n  closeGameModal.addEventListener('click', () => {\n    mainModalContainer.classList.remove('active-modal');\n    progressBar.currentProgress.style.width = 1 + '%';\n    clearInterval(intervalId);\n    clearTimeout(timeoutId);\n  });\n\n  closeFailureModal.addEventListener('click', () => {\n    failureModalContainer.classList.remove('active-modal');\n  });\n\n  closeSuccessModal.addEventListener('click', () => {\n    successModalContainer.classList.remove('active-modal');\n  });\n\n  closeCheckModal.addEventListener('click', () => {\n    rightAnswerModalContainer.classList.remove('active-modal');\n  });\n}\n\nmodule.exports = {\n  startGameEvent,\n  submitGameAnswer,\n  checkRightAnswer,\n  playAgain,\n  closeModals\n}\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/modules/modal.js?");

/***/ })

/******/ });