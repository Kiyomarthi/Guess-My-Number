'use strict';

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let secretNumber = randomNumber(1, 20);
let score = 20;
let highScore = 0;
const scoreContent = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue) {
    displayMessage('no number');
  } else if (guessValue === secretNumber) {
    displayMessage('correct number');
    changeNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? 'too high' : 'too low');
      score--;
      scoreContent.textContent = score;
    } else {
      displayMessage('you lost the game');
      score = 0;
      scoreContent.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = randomNumber(1, 20);
  changeNumber('?');

  displayMessage('Start guessing ...');
  score = 20;
  scoreContent.textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '15rem';
});
