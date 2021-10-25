// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
class GuessingGame {
  constructor(userInterface, numberToGuess) {
    this.userInterface = userInterface;
    this.numberToGuess = numberToGuess;
    this.counter = 1;
  }
  takeTurn() {
    const givenNumber = this.userInterface.askForNumber();
    const parsed = parseInt(givenNumber);
    if (this.numberToGuess === parsed) {
      this.userInterface.userWon(this.counter);
      return true;
    } else {
      this.counter++;
      if (this.numberToGuess > parsed) {
        this.userInterface.userGuessedLow();
      } else if (this.numberToGuess < parsed) {
        this.userInterface.userGuessedHigh();
      }
      return false;
    }
  }
}

class PromptSyncInterface {
  constructor() {}
  askForNumber() {
    const prompt = require("prompt-sync")();
    const answer = prompt("Guess a number: ");

    return answer;
  }
  userWon(counterValue) {
    console.log(`You got it! You took ${counterValue} attempts!`);
  }
  userGuessedHigh() {
    console.log("Too High!");
  }
  userGuessedLow() {
    console.log("Too Low!");
  }
}
const defaultInterface = new PromptSyncInterface();
const generatedAnswer = Math.ceil(Math.random() * 100);

const game = new GuessingGame(defaultInterface, generatedAnswer);
// eslint-disable-next-line no-empty
while (!game.takeTurn()) {}
module.exports = {GuessingGame};
