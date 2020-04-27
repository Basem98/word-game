// Switching between the two forms
function switchForms(signInBtn, signInForm, signUpBtn, signUpForm) {
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
  return;
}

// client-side signup form validation
function validateNewUserData(userData, signUpResponse) {
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
      signUpResponse.innerHTML = 'Please use a proper email address that looks like this: example@something.com or example@something.net';
      signUpResponse.style.visibility = 'visible';
      return false;
    }

    if (!userData.username.match(/^\w{6,12}/g)) {
      signUpResponse.innerHTML = 'Your username must be between 6 and 12 characters long and it cannot have any special characters or white spaces';
      signUpResponse.style.visibility = 'visible';
      return false;
    }

    if (!(userData.password.length >= 8) || !(userData.password.length <= 20)) {
      signUpResponse.innerHTML = 'Your password must be between 8 and 20 characters long';
      signUpResponse.style.visibility = 'visible';
      return false;
    }
    signUpResponse.innerHTML = '';
    signUpResponse.style.visibility = 'hidden';
    return true;
  } else {
    signUpResponse.innerHTML = 'Please fill all the required fields';
    signUpResponse.style.visibility = 'visible';
    return false;
  }
}





// Get a list of all the countries for the dropdown list in the signup form
function getCountriesList() {
  const dropDownList = document.querySelector('#country-list');

  fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then((countriesList) => {
    countriesList.forEach((country) => {
      const option = document.createElement('option');
      const textNode = document.createTextNode(country.name);
      option.setAttribute('value', country.name);
      option.appendChild(textNode);
      dropDownList.appendChild(option);
      return;
    });
  })
}

// Send the user's data to the server to sign them in
function signIn(signInResponse) {
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
          signInResponse.innerHTML = res.msg;
          signInResponse.style.visibility = 'visible';
        }
        return;
      })
      .catch(error => console.error(error));
  }
  else {
    signInResponse.innerHTML = 'Please fill all the required fields';
    signInResponse.style.visibility = 'visible';
    return;
  }

}



// Send the new user's data to the server to sign them up
function signUp(signUpResponse) {
  const userData = {
    fullName: document.getElementsByName('fullName')[0].value,
    country: document.getElementsByName('country')[0].value,
    email: document.getElementsByName('email')[0].value,
    username: document.getElementById('signUp-username').value,
    password: document.getElementById('signUp-password').value
  }
  if (validateNewUserData(userData, signUpResponse)) {
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        signUpResponse.innerHTML = res.msg;
        signUpResponse.style.visibility = 'visible';
        return;
      })
  }
}

// Add the signin and the signup event to the form buttons
function submitFormsEvent(
  sumbitSignInBtn,
  submitSignUpBtn,
  signInForm,
  signUpForm,
  signInResponse,
  signUpResponse
) {
  // Associating the form buttons with submitting either of the forms
  sumbitSignInBtn.addEventListener('click', () => {
    signIn(signInResponse);
  });
  submitSignUpBtn.addEventListener('click', () => {
    signUp(signUpResponse);
  });

  // Associating the Enter key press with submitting either of the forms, if one of them is active
  signInForm.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      signIn(signInResponse);
    }
  });
  signUpForm.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      signUp(signUpResponse);
    }
  });
  return;
}

// Submitting the user data to sign them up


export {
  submitFormsEvent,
  switchForms,
  validateNewUserData,
  getCountriesList,
  signUp,
  signIn
}
