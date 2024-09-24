const homeScoreEl = document.querySelector('.scoreHome');
const guestScoreEl = document.querySelector('.scoreGuest');
const lastResultHome = document.querySelector('.resultHome');
const lastResultGuest = document.querySelector('.resultGuest');
let homeScore = 0;
let guestScore = 0;

function addScore(element, score) {
  if (element === 'home') {
    homeScore += score;
    homeScoreEl.textContent = homeScore;
  } else {
    guestScore += score;
    guestScoreEl.textContent = guestScore;
  }
}

function resetScore() {
  document.getElementById('home').classList.remove('winner');
  document.getElementById('guest').classList.remove('winner');
  lastResultHome.textContent = homeScore;
  lastResultGuest.textContent = guestScore;
  checkWinner();
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}

function checkWinner() {
  if (homeScore > guestScore) {
    document.getElementById('home').classList.add('winner');
  } else if (guestScore > homeScore) {
    document.getElementById('guest').classList.add('winner');
  }
}
