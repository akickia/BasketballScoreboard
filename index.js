console.log('Hej');

const homeScoreEl = document.querySelector('.scoreHome');
const guestScoreEl = document.querySelector('.scoreGuest');
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
