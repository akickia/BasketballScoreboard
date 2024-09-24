const homeScoreEl = document.querySelector('.scoreHome');
const guestScoreEl = document.querySelector('.scoreGuest');
const lastResultHome = document.querySelector('.resultHome');
const lastResultGuest = document.querySelector('.resultGuest');
const homeEl = document.getElementById('home');
const guestEl = document.getElementById('guest');
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
  homeEl.classList.remove('winner');
  guestEl.classList.remove('winner');
  void homeEl.offsetWidth;
  void guestEl.offsetWidth;
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
    homeEl.classList.add('winner');
  } else if (guestScore > homeScore) {
    guestEl.classList.add('winner');
  }
}
