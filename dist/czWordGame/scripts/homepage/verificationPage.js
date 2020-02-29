const sumbitSignInForm = document.querySelector('.signIn-form-btn');
const signInError = document.querySelector('.signIn-errorMsg');
const signInForm = document.querySelector('.signIn-form');

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