// Switching between the signin and the signup form

const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');

const sumbitSignInForm = document.querySelector('.signIn-form-btn');
const sumbitSignUpForm = document.querySelector('.signUp-form-btn');

const signInError = document.querySelector('.signIn-errorMsg');
const signUpError = document.querySelector('.signUp-errorMsg');

const signInForm = document.querySelector('.signIn-form');
const signUpForm = document.querySelector('.signUp-form');

// Show the forms
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

// Send the user's data to the server to sign them in

sumbitSignInForm.addEventListener('click', () => {
  const userData = {
    username: document.getElementById('signIn-username').value,
    password: document.getElementById('signIn-password').value
  }
  if (userData.username && userData.password) {
    fetch('/signin', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((res) => {
        if (res && res.success) {
          window.location = '/dashboard.html';
        } else {
          signInError.innerHTML = res.msg;
          signInError.style.visibility = 'visible';
        }
      })
      .catch(error => console.error(error));
  }
  else {
    signInError.innerHTML = 'Please fill all the required fields';
    signInError.style.visibility = 'visible';
  }

});
