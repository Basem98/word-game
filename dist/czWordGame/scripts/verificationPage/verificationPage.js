import { signIn } from '../homepage/modules/forms';

const sumbitSignInForm = document.querySelector('.signIn-form-btn');
const responseMsgs = {
  signInResponse: document.querySelector('.signIn-errorMsg')
};


sumbitSignInForm.addEventListener('click', () => {
  signIn(responseMsgs.signInResponse);
});

window.onkeyup = (event) => {
  if (event.key === 'Enter') {
    signIn(responseMsgs.signInResponse);
  }
};