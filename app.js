"use strict";
const againButton = document.querySelector(".again");
const guessingNumberEl = document.querySelector(".guessing-number");
const inputNumber = document.querySelector(".input-place");
const checkButton = document.querySelector(".check");
const infoText = document.querySelector(".text");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const gameScreen = document.querySelector(".game");
const bodyEl = document.body;

let score = 20;
let highscore = 0;
let guessingNumber = Math.floor(Math.random() * 20 + 1);

guessingNumberEl.textContent = "?";

checkButton.addEventListener("click", () => {
  const inputNum = parseInt(inputNumber.value);

  if (!inputNum) {
    infoText.textContent = "⛔ No number";
  } else if (inputNum === guessingNumber) {
    infoText.textContent = "🎉 Correct Number";
    gameScreen.style.backgroundColor = "green";
    guessingNumberEl.textContent = guessingNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (inputNum < guessingNumber) {
    if (score > 1) {
      infoText.textContent = "📈 Too low!";
      score--;
      scoreEl.textContent = score;
    } else {
      infoText.textContent = "🔥 You lost the game!";
      scoreEl.textContent = 0;
    }
  } else if (inputNum > guessingNumber) {
    if (score > 1) {
      infoText.textContent = "📈 Too high!";
      score--;
      scoreEl.textContent = score;
    } else {
      infoText.textContent = "🔥 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});

againButton.addEventListener("click", () => {
  guessingNumber = Math.floor(Math.random() * 20 + 1);
  infoText.textContent = "Start guessing...";
  gameScreen.style.backgroundColor = "#222";
  score = 20;
  scoreEl.textContent = score;
  guessingNumberEl.textContent = "?";
  inputNumber.value = "";
});
