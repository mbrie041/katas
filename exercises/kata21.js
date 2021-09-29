// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
class GuessingGame {
  constructor(userInterface, numberToGuess) {
    this.userInterface = userInterface;
    this.numberToGuess = numberToGuess;
    this.counter = 1;
  }
  playGame() {
    const givenNumber = this.userInterface.askForNumber();
    const parsed = parseInt(givenNumber);
    if (this.numberToGuess === parsed) {
      this.userInterface.userWon(this.counter);
      return true;
    } else {
      this.counter++;
      return false;
    }
    //increment guess counter
    //check to see if number returned from askForNumber is equal to numberToGuess
    //If that's true, return true and log "You got it! You took x attempts!"
    // If that's false, return false
  }
  //responible for keeping track of # of attempts
}

class PromptSyncInterface {
  constructor() {}
  askForNumber() {}
  userWon(counterValue) {
    return `You got it! You took ${counterValue} attempts!`;
  }
}

new GuessingGame();
module.exports = {GuessingGame};
//create object that houses the game logic and runs the game
//new game object
//
//create tests that test the object
