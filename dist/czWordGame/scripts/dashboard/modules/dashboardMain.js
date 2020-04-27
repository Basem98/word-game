// Main functionalities on the dashboard page


// Authenticate the current stored cookie to make sure that it still has access
function authenticateUser() {
  return fetch('/authenticateuser', {
    method: 'GET',
    credentials: "same-origin"
  });
}

// Show the user data in the profile section
function showProfile(profile, currentUser) {
  profile.children.item(0).innerHTML = currentUser.username;
  profile.children.item(1).innerHTML = currentUser.title;
  profile.children.item(2).innerHTML = currentUser.score;
  profile.children.item(1).style.color = '#e40046';
  profile.children.item(1).style.fontWeight = 'bold';
  profile.children.item(2).style.color = '#e40046';
  profile.children.item(2).style.fontWeight = 'bold';
  profile.children.item(3).innerHTML = currentUser.email;
  return;
}

// Show the words history table
function showCurrentGameHistory(
  currentGameHistory,
  wordsTableElements
) {
  if (currentGameHistory.length > 0) {
    currentGameHistory.forEach((wordObj) => {
      const wordData = document.createElement('tr');
      const language = document.createElement('td');
      const word = document.createElement('td');
      const wordMeaning = document.createElement('td');

      language.innerHTML = wordObj.lang;
      word.innerHTML = wordObj.word;
      wordMeaning.innerHTML = wordObj.meaning;
      wordData.appendChild(language);
      wordData.appendChild(word);
      wordData.appendChild(wordMeaning);
      wordsTableElements.wordsTableBody.appendChild(wordData);
      wordsTableElements.wordsHistoryDiv.style.visibility = 'visible';
      wordsTableElements.wordsHistoryDiv.style.opacity = 1;
    });
  }
}

// Get the top five players from the server
function getTopFivePlayers() {
  return fetch('/gettopfive', {
    method: 'GET',
    credentials: "same-origin"
  });
}

// Show the top five users
function showTopFivePlayers(topFivePlayers, topFivePlayersDiv) {
  topFivePlayers.forEach(user => {

    const paragraph1 = document.createElement('p');
    paragraph1.setAttribute('class', `${user.username}`);
    const paragraph2 = document.createElement('p');
    paragraph2.setAttribute('class', `${user.username}`);
    const paragraph3 = document.createElement('p');
    paragraph3.setAttribute('class', `${user.username}`);

    paragraph2.style.color = '#e40046';
    paragraph2.style.fontWeight = 'bold';
    paragraph3.style.color = '#e40046';
    paragraph3.style.fontWeight = 'bold';

    const username = document.createTextNode(user.username);
    const title = document.createTextNode(user.title);
    const score = document.createTextNode(user.score);

    paragraph1.appendChild(username);
    paragraph2.appendChild(title);
    paragraph3.appendChild(score);

    const userContainer = document.createElement('div');
    userContainer.appendChild(paragraph1);
    userContainer.appendChild(paragraph2);
    userContainer.appendChild(paragraph3);
    topFivePlayersDiv.appendChild(userContainer);
  });
  return;
}

// Sign out
function signOut(signOutBtn) {
  signOutBtn.addEventListener('click', () => {
    fetch('/signout', {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        alert(res.msg);
        window.location = '/';
      })
      .catch(error => console.error(error));
  });
}


module.exports = {
  authenticateUser,
  showProfile,
  showCurrentGameHistory,
  getTopFivePlayers,
  showTopFivePlayers,
  signOut
};
