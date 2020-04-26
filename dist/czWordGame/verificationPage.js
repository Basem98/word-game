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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/czWordGame/scripts/homepage/verificationPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/czWordGame/scripts/homepage/verificationPage.js":
/*!**************************************************************!*\
  !*** ./dist/czWordGame/scripts/homepage/verificationPage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sumbitSignInForm = document.querySelector('.signIn-form-btn');\nconst signInError = document.querySelector('.signIn-errorMsg');\nconst signInForm = document.querySelector('.signIn-form');\n\nfunction signIn() {\n  const userData = {\n    username: document.getElementById('signIn-username').value,\n    password: document.getElementById('signIn-password').value\n  }\n  if (userData.username && userData.password) {\n    fetch('/signin', {\n      method: 'POST',\n      body: JSON.stringify(userData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n      .then(res => res.json())\n      .then((res) => {\n        if (res && res.success) {\n          localStorage.clear();\n          localStorage.setItem('currentUser', JSON.stringify(res.user));\n          window.location = '/dashboard.html';\n        } else {\n          signInError.innerHTML = res.msg;\n          signInError.style.visibility = 'visible';\n        }\n      })\n      .catch(error => console.error(error));\n  }\n  else {\n    signInError.innerHTML = 'Please fill all the required fields';\n    signInError.style.visibility = 'visible';\n  }\n}\nsumbitSignInForm.addEventListener('click', () => {\n  signIn();\n});\n\nthis.onkeyup = (event) => {\n  if (event.key === 'Enter') {\n    signIn();\n  }\n}\n\n//# sourceURL=webpack:///./dist/czWordGame/scripts/homepage/verificationPage.js?");

/***/ })

/******/ });