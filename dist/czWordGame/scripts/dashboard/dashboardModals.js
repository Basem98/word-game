const czPlayBtn = document.querySelector('.play-btn-cz');

czPlayBtn.addEventListener('click', () => {
  fetch('/getrandomwords/cz', {
    method: 'POST',
    credentials: "same-origin",
    body: JSON.stringify({
      userId: JSON.parse(localStorage.getItem('currentUser'))['_id']
    }),
    headers: {
      'Content-Type': 'application/json',
      'currentSessionID': localStorage.getItem('currentSessionID')
    }
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
  })
  .catch(error => console.error(error));
});