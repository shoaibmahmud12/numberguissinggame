const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

const guessBtn = document.getElementById('guessBtn');
const userGuess = document.getElementById('userGuess');
const result = document.getElementById('result');
const numberOfGuessesDisplay = document.getElementById('numberOfGuesses');

guessBtn.addEventListener('click', function() {
  const guess = parseInt(userGuess.value);
  numberOfGuesses++;

  if (isNaN(guess)) {
    result.innerText = 'Please enter a valid number.';
    userGuess.value = '';
  } else if (guess < 1 || guess > 100) {
    result.innerText = 'Please enter a number between 1 and 100.';
    userGuess.value = '';
 
} else if (guess < randomNumber) {
    result.innerText = 'Too low!';
    userGuess.value = '';
  } else if (guess > randomNumber) {
    result.innerText = 'Too high!';
    userGuess.value = '';
  } else {
    result.innerText = `Congratulations! You guessed the number in ${numberOfGuesses} guesses.`;
    userGuess.value = '';
  }

  numberOfGuessesDisplay.innerText = `Number of guesses: ${numberOfGuesses}`;
});
