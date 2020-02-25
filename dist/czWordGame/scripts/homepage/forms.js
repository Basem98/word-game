// Switching between the signin and the signup form

const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');
const signInForm = document.querySelector('.signIn-form');
const signUpForm = document.querySelector('.signUp-form');

signInBtn.addEventListener('click', () => {
  signInForm.style.zIndex = 2;
  signInForm.style.opacity = 1;
  signUpForm.style.zIndex = 1;
  signUpForm.style.opacity = 0;

});

signUpBtn.addEventListener('click', () => {
  signUpForm.style.zIndex = 2;
  signUpForm.style.opacity = 1;
  signInForm.style.zIndex = 1;
  signInForm.style.opacity = 0;
});


// Get a list of all the countries for the dropdown list in the signup form
const dropDownList = document.querySelector('#country-list');

this.onload = () => {
  fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then((countriesList) => {
    countriesList.forEach((country) => {
      const option = document.createElement('option');
      const textNode = document.createTextNode(country.name);
      option.setAttribute('value', country.name);
      option.appendChild(textNode);
      dropDownList.appendChild(option);
    });
  })
}
