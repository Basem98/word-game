const topPlayersDiv = document.querySelector('.top-players');
const profile = document.querySelector('.profile');
const wordsHistoryDiv = document.querySelector('.words-history');
const wordsHistoryTable = document.querySelector('.words-table');
const signOutBtn = document.querySelector('.signOut-btn');

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let currentGameHistory = currentUser.gameHistory;
let topFiveUsers;

window.onload = () => {
  if (!currentUser) {
    alert(res.msg);
    window.location = '/';
  } else {
    fetch('/authenticateuser', {
      method: 'GET',
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then((res) => {
        if (res && res.isAuthorized) {
          // Showing the user data in the profile section
          profile.children.item(0).innerHTML = currentUser.username;
          profile.children.item(1).innerHTML = currentUser.title;
          profile.children.item(2).innerHTML = currentUser.score;
          profile.children.item(1).style.color = '#e40046';
          profile.children.item(1).style.fontWeight = 'bold';
          profile.children.item(2).style.color = '#e40046';
          profile.children.item(2).style.fontWeight = 'bold';
          profile.children.item(3).innerHTML = currentUser.email;

          // Showing the words history table
          if (currentGameHistory.length > 0) {
            currentGameHistory.forEach((wordObj) => {
              const wordsTableBody = document.getElementsByTagName('tbody')[0];
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
              wordsTableBody.appendChild(wordData);
              wordsHistoryDiv.style.visibility = 'visible';
              wordsHistoryDiv.style.opacity = 1;
            });

          }

          // Getting the top five players from the server
          fetch('/gettopfive', {
            method: 'GET',
            credentials: "same-origin"
          })
            .then(res => res.json())
            .then(res => {
              if (res && res.success) {
                topFiveUsers = res.topFiveUsers;
                topFiveUsers.forEach(user => {

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
                  topPlayersDiv.appendChild(userContainer);
                });
              }
            })
            .catch(error => console.error(error));
        } else {
          localStorage.clear();
          alert(res.msg);
          window.location = '/';
        }
      })
      .catch(error => console.error(error));
  }
}

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