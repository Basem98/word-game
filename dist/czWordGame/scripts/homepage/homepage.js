import {
  switchForms,
  submitFormsEvent,
  getCountriesList
} from './modules/forms';

import {
  implementGameModals
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

// Implement the logic behind the game on the homepage
implementGameModals();