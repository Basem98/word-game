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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/czWordGame/scripts/verificationPage/verificationPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/czWordGame/scripts/homepage/modules/forms.js":
/*!***********************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/modules/forms.js ***!
  \***********************************************************/
/*! exports provided: submitFormsEvent, switchForms, validateNewUserData, getCountriesList, signUp, signIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitFormsEvent\", function() { return submitFormsEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchForms\", function() { return switchForms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateNewUserData\", function() { return validateNewUserData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCountriesList\", function() { return getCountriesList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n// Switching between the two forms\nfunction switchForms(signInBtn, signInForm, signUpBtn, signUpForm) {\n  signInBtn.addEventListener('click', () => {\n    signInForm.classList.add('active-form');\n    signInForm.classList.remove('unactive-signIn-form');\n\n    signUpForm.classList.add('unactive-signUp-form');\n    signUpForm.classList.remove('active-form');\n  });\n\n  signUpBtn.addEventListener('click', () => {\n    signUpForm.classList.add('active-form');\n    signUpForm.classList.remove('unactive-signUp-form');\n\n    signInForm.classList.add('unactive-signIn-form');\n    signInForm.classList.remove('active-form');\n\n  });\n  return;\n}\n\n// client-side signup form validation\nfunction validateNewUserData(userData, signUpResponse) {\n  if (\n    userData.fullName\n    && userData.country\n    && userData.email\n    && userData.username\n    && userData.password\n  ) {\n    userData.fullName = userData.fullName.replace(/^\\s*(\\w+)\\s{1,}(\\w+)\\s*$/, '$1 $2')\n    userData.fullName = userData.fullName.split(' ').map(word => {\n      return `${word[0].toUpperCase()}${word.slice(1)}`;\n    }\n    ).join(' ');\n\n    if (!userData.email.match(/^\\w+\\.*\\w+\\@\\w+(\\.com|\\.net)$/g)) {\n      signUpResponse.innerHTML = 'Please use a proper email address that looks like this: example@something.com or example@something.net';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n\n    if (!userData.username.match(/^\\w{6,12}/g)) {\n      signUpResponse.innerHTML = 'Your username must be between 6 and 12 characters long and it cannot have any special characters or white spaces';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n\n    if (!(userData.password.length >= 8) || !(userData.password.length <= 20)) {\n      signUpResponse.innerHTML = 'Your password must be between 8 and 20 characters long';\n      signUpResponse.style.visibility = 'visible';\n      return false;\n    }\n    signUpResponse.innerHTML = '';\n    signUpResponse.style.visibility = 'hidden';\n    return true;\n  } else {\n    signUpResponse.innerHTML = 'Please fill all the required fields';\n    signUpResponse.style.visibility = 'visible';\n    return false;\n  }\n}\n\n\n\n\n\n// Get a list of all the countries for the dropdown list in the signup form\nfunction getCountriesList() {\n  const dropDownList = document.querySelector('#country-list');\n\n  fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then((countriesList) => {\n    countriesList.forEach((country) => {\n      const option = document.createElement('option');\n      const textNode = document.createTextNode(country.name);\n      option.setAttribute('value', country.name);\n      option.appendChild(textNode);\n      dropDownList.appendChild(option);\n      return;\n    });\n  })\n}\n\n// Send the user's data to the server to sign them in\nfunction signIn(signInResponse) {\n  const userData = {\n    username: document.getElementById('signIn-username').value,\n    password: document.getElementById('signIn-password').value\n  }\n  if (userData.username && userData.password) {\n    fetch('/signin', {\n      method: 'POST',\n      body: JSON.stringify(userData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n      .then(res => res.json())\n      .then((res) => {\n        if (res && res.success) {\n          localStorage.clear();\n          localStorage.setItem('currentUser', JSON.stringify(res.user));\n          window.location = '/dashboard.html';\n        } else {\n          signInResponse.innerHTML = res.msg;\n          signInResponse.style.visibility = 'visible';\n        }\n        return;\n      })\n      .catch(error => console.error(error));\n  }\n  else {\n    signInResponse.innerHTML = 'Please fill all the required fields';\n    signInResponse.style.visibility = 'visible';\n    return;\n  }\n\n}\n\n\n\n// Send the new user's data to the server to sign them up\nfunction signUp(signUpResponse) {\n  const userData = {\n    fullName: document.getElementsByName('fullName')[0].value,\n    country: document.getElementsByName('country')[0].value,\n    email: document.getElementsByName('email')[0].value,\n    username: document.getElementById('signUp-username').value,\n    password: document.getElementById('signUp-password').value\n  }\n  if (validateNewUserData(userData, signUpResponse)) {\n    fetch('/signup', {\n      method: 'POST',\n      body: JSON.stringify(userData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n      .then(res => res.json())\n      .then(res => {\n        signUpResponse.innerHTML = res.msg;\n        signUpResponse.style.visibility = 'visible';\n        return;\n      })\n  }\n}\n\n// Add the signin and the signup event to the form buttons\nfunction submitFormsEvent(\n  sumbitSignInBtn,\n  submitSignUpBtn,\n  signInForm,\n  signUpForm,\n  signInResponse,\n  signUpResponse\n) {\n  // Associating the form buttons with submitting either of the forms\n  sumbitSignInBtn.addEventListener('click', () => {\n    signIn(signInResponse);\n  });\n  submitSignUpBtn.addEventListener('click', () => {\n    signUp(signUpResponse);\n  });\n\n  // Associating the Enter key press with submitting either of the forms, if one of them is active\n  signInForm.addEventListener('keyup', (event) => {\n    if (event.key === 'Enter') {\n      signIn(signInResponse);\n    }\n  });\n  signUpForm.addEventListener('keyup', (event) => {\n    if (event.key === 'Enter') {\n      signUp(signUpResponse);\n    }\n  });\n  return;\n}\n\n// Submitting the user data to sign them up\n\n\n\n\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/modules/forms.js?");

/***/ }),

/***/ "./dist/czWordGame/scripts/verificationPage/verificationPage.js":
/*!**********************************************************************!*\
  !*** ./dist/czWordGame/scripts/verificationPage/verificationPage.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_homepageStyles_buttons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/homepageStyles/buttons.css */ \"./dist/czWordGame/styles/homepageStyles/buttons.css\");\n/* harmony import */ var _styles_homepageStyles_buttons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_homepageStyles_buttons_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_homepageStyles_mainDivs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/homepageStyles/mainDivs.css */ \"./dist/czWordGame/styles/homepageStyles/mainDivs.css\");\n/* harmony import */ var _styles_homepageStyles_mainDivs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepageStyles_mainDivs_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_homepageStyles_verificationPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/homepageStyles/verificationPage.css */ \"./dist/czWordGame/styles/homepageStyles/verificationPage.css\");\n/* harmony import */ var _styles_homepageStyles_verificationPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_homepageStyles_verificationPage_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _homepage_modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homepage/modules/forms */ \"./dist/czWordGame/scripts/homepage/modules/forms.js\");\n\n\n\n\n\n\n\nconst sumbitSignInForm = document.querySelector('.signIn-form-btn');\nconst responseMsgs = {\n  signInResponse: document.querySelector('.signIn-errorMsg')\n};\n\n\nsumbitSignInForm.addEventListener('click', () => {\n  Object(_homepage_modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(responseMsgs.signInResponse);\n});\n\nwindow.onkeyup = (event) => {\n  if (event.key === 'Enter') {\n    Object(_homepage_modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(responseMsgs.signInResponse);\n  }\n};\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/verificationPage/verificationPage.js?");

/***/ }),

/***/ "./dist/czWordGame/styles/homepageStyles/buttons.css":
/*!***********************************************************!*\
  !*** ./dist/czWordGame/styles/homepageStyles/buttons.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./buttons.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/buttons.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/buttons.css?");

/***/ }),

/***/ "./dist/czWordGame/styles/homepageStyles/mainDivs.css":
/*!************************************************************!*\
  !*** ./dist/czWordGame/styles/homepageStyles/mainDivs.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./mainDivs.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/mainDivs.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/mainDivs.css?");

/***/ }),

/***/ "./dist/czWordGame/styles/homepageStyles/verificationPage.css":
/*!********************************************************************!*\
  !*** ./dist/czWordGame/styles/homepageStyles/verificationPage.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./verificationPage.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/verificationPage.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/verificationPage.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/buttons.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/buttons.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".buttons-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  text-align: center;\\n  margin-top: 4em;\\n  width: 40%;\\n  min-width: 15.625em;\\n}\\n\\nbutton {\\n  color: #ffffff;\\n  box-shadow: 0 0.5em 1em #003087;\\n  transition: transform 80ms ease-in-out;\\n  font-size: 0.9em;\\n  font-weight: bold;\\n  cursor: pointer;\\n  height: 2.8em;\\n}\\n\\n.play-btn {\\n  border: none;\\n  border-radius: 0;\\n  background-color: #e40046;\\n}\\n\\n.signIn-btn {\\n  border: none;\\n  border-radius: 0.7em 0 0 0.7em;\\n  background: linear-gradient(to right, #9c0734, #e40046);\\n}\\n\\n.signUp-btn {\\n  border: none;\\n  border-radius: 0 0.7em 0.7em 0;\\n  background: linear-gradient(to left, #9c0734, #e40046);\\n\\n}\\n\\n.submit-solution-btn {\\n  border: none;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin-top: 2em;\\n}\\n\\n.signIn-form-btn {\\n  border: 0.1px solid #003087;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin: 3em;\\n}\\n\\n.signUp-form-btn {\\n  border: 0.1px solid #003087;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin: 3em;\\n}\\n\\n.play-again-btn {\\n  border: none;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin-top: 2em;\\n}\\n\\n.check-rightAnswer-btn {\\n  border: none;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin-top: 2em;\\n}\\n\\n.about-btn {\\n  border: 0.1px solid #003087;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n}\\n\\n.homepage-btn {\\n  border: 0.1px solid #003087;\\n  border-radius: 0.7em;\\n  background-color: #e40046;\\n  margin-top: 1em;\\n}\\n\\nbutton:hover {\\n  transform: scale(1.05);\\n}\\n\\nbutton:active {\\n  outline: none;\\n  opacity: 0.5;\\n}\\n\\nbutton:focus {\\n  outline: none;\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/buttons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/mainDivs.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/mainDivs.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  flex-direction: column;\\n  width: 90vw;\\n  background-color: #1f4283;\\n  margin-left: 3.5%;\\n}\\n\\n.welcome-panel {\\n  position: relative;\\n  top: 0;\\n  margin: 1em;\\n  text-align: center;\\n  width: 70%;\\n  min-width: 17.5em;\\n  max-width: 50em;\\n  background-color: #003087;\\n  color: #ffffff;\\n  padding: 1em 2em;\\n  border: none;\\n  border-radius: 0.7em;\\n  box-shadow: 0 0.5em 1em #e40046;\\n}\\n\\n.welcome-panel h2 {\\n  letter-spacing: 0.05em;\\n  font-size: 1.5rem;\\n}\\n\\n.play-info {\\n  color: #ffffff;\\n  text-align: center;\\n  font-size: 0.9em;\\n  width: 35%;\\n  min-width: 17.5em;\\n}\\n\\n::-webkit-scrollbar-track{\\n  background-color: #e4004496;\\n}\\n\\n::-webkit-scrollbar-thumb{\\n  background-color: #e40046;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 0.35em;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/mainDivs.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/verificationPage.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/czWordGame/styles/homepageStyles/verificationPage.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"h1 {\\n  color: #ffffff;\\n  letter-spacing: 0.01em;\\n}\\n\\n.form-container {\\n  display: flex;\\n  position: relative;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  flex-direction: column;\\n  margin: 2em;\\n  background-color: #003087;\\n  border: none;\\n  border-radius: 0.7em;\\n  padding: 0.5em;\\n  box-shadow: 0 0.5em 1em #e40046;\\n  height: 37em;\\n  width: 50vw;\\n  max-width: 25em;\\n  overflow: hidden;\\n}\\n\\n.form-container form {\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  flex-direction: column;\\n  padding: 1.5em;\\n  height: 100%;\\n  width: 100%;\\n  overflow: auto;\\n}\\n\\n.form-container input {\\n  padding: 1em 1em;\\n  border: none;\\n  border-radius: 0.3em;\\n  margin: 0.3em;\\n  width: 50%;\\n  max-width: 20em;\\n  transition: transform 100ms ease-in-out;\\n}\\n\\ninput:hover {\\n  transform: scale(1.1);\\n}\\n\\ninput:focus {\\n  transform: scale(1.1);\\n}\\n\\n.form-container p {\\n  font-size: 0.8em;\\n  color: white;\\n  width: 50%;\\n  max-width: 20em;\\n  margin: 0.1em;\\n}\\n\\n.errorMsg {\\n  visibility: hidden;\\n  letter-spacing: 0.05em;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./dist/czWordGame/styles/homepageStyles/verificationPage.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });