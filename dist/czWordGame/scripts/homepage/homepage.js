import {
  switchForms,
  submitFormsEvent,
  getCountriesList
} from './modules/forms';

// Elements related to the logic behind the forms
const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');

const sumbitSignInForm = document.querySelector('.signIn-form-btn');
const sumbitSignUpForm = document.querySelector('.signUp-form-btn');


const signInForm = document.querySelector('.signIn-form');
const signUpForm = document.querySelector('.signUp-form');

const signInResponse = document.querySelector('.signIn-errorMsg');
const signUpResponse = document.querySelector('.signUp-errorMsg');

// Elements related to the logic behind the game on the homepage

// Switching between the two forms
switchForms(signInBtn, signInForm, signUpBtn, signUpForm);

// Get the coutnries list to prepare the signup form's dropdown list
window.onload = getCountriesList();

// Add event listeners to the buttons and the Enter key
submitFormsEvent(sumbitSignInForm, sumbitSignUpForm, signInForm, signUpForm, signInResponse, signUpResponse);

