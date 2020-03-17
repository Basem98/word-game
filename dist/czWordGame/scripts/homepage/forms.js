// Switching between the signin and the signup form

const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');

const sumbitSignInForm = document.querySelector('.signIn-form-btn');
const sumbitSignUpForm = document.querySelector('.signUp-form-btn');

const signInError = document.querySelector('.signIn-errorMsg');
const signUpError = document.querySelector('.signUp-errorMsg');

const signInForm = document.querySelector('.signIn-form');
const signUpForm = document.querySelector('.signUp-form');

// Helper functions
function validateNewUserData(userData) {
  if (
    userData.fullName
    && userData.country
    && userData.email
    && userData.username
    && userData.password
  ) {
    userData.fullName = userData.fullName.replace(/^\s*(\w+)\s{1,}(\w+)\s*$/, '$1 $2')
    userData.fullName = userData.fullName.split(' ').map(word => {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    }
    ).join(' ');

    if (!userData.email.match(/^\w+\.*\w+\@\w+(\.com|\.net)$/g)) {
      signUpError.innerHTML = 'Please use a proper email address that looks like this: example@something.com or example@something.net';
      signUpError.style.visibility = 'visible';
      return false;
    }

    if (!userData.username.match(/^\w{6,12}/g)) {
      signUpError.innerHTML = 'Your username must be between 6 and 12 characters long and it cannot have any special characters or white spaces';
      signUpError.style.visibility = 'visible';
      return false;
    }

    if (!(userData.password.length >= 8) || !(userData.password.length <= 20)) {
      signUpError.innerHTML = 'Your password must be between 8 and 20 characters long';
      signUpError.style.visibility = 'visible';
      return false;
    }
    signUpError.innerHTML = '';
    signUpError.style.visibility = 'hidden';
    return true;
  } else {
    signUpError.innerHTML = 'Please fill all the required fields';
    signUpError.style.visibility = 'visible';
    return false;
  }
}


// Show the forms
signInBtn.addEventListener('click', () => {
  signInForm.classList.add('active-form');
  signInForm.classList.remove('unactive-signIn-form');

  signUpForm.classList.add('unactive-signUp-form');
  signUpForm.classList.remove('active-form');
});

signUpBtn.addEventListener('click', () => {
  signUpForm.classList.add('active-form');
  signUpForm.classList.remove('unactive-signUp-form');

  signInForm.classList.add('unactive-signIn-form');
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
function signIn() {
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
          localStorage.clear();
          localStorage.setItem('currentUser', JSON.stringify(res.user));
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

}
sumbitSignInForm.addEventListener('click', () => {
  signIn();
});


// Send the new user's data to sign them up
function signUp() {
  const userData = {
    fullName: document.getElementsByName('fullName')[0].value,
    country: document.getElementsByName('country')[0].value,
    email: document.getElementsByName('email')[0].value,
    username: document.getElementById('signUp-username').value,
    password: document.getElementById('signUp-password').value
  }
  if (validateNewUserData(userData)) {
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        signUpError.innerHTML = res.msg;
        signUpError.style.visibility = 'visible';
      })
  }
}
sumbitSignUpForm.addEventListener('click', () => {
  signUp();
});

this.onkeyup = (event) => {
  if (event.key === 'Enter') {
    if (signInForm.classList.contains('active-form')) {
      signIn();
    } else if (signUpForm.classList.contains('active-form')) {
      signUp();
    } else {
      event.preventDefault();
    }
  }
}
