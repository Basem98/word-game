// Switching between the signin and the signup form

const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');
const signInForm = document.querySelector('.signIn-form');
const signUpForm = document.querySelector('.signUp-form');

signInBtn.addEventListener('click', () => {
  signInForm.classList.add('active-form');
  signInForm.classList.remove('unactive-form');

  signUpForm.classList.add('unactive-form');
  signUpForm.classList.remove('active-form');
});

signUpBtn.addEventListener('click', () => {
  signUpForm.classList.add('active-form');
  signUpForm.classList.remove('unactive-form');

  signInForm.classList.add('unactive-form');
  signInForm.classList.remove('active-form');

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
