const assert = require("chai").assert;
const GuessingGame = require("../exercises/kata21.js").GuessingGame;
const sinon = require("sinon");

describe("kata21", () => {
  it("When the user guesses the right number, the game ends", () => {
    const userInterface = {
      askForNumber: sinon.stub().returns("1"),
      userWon: sinon.stub(),
    };
    const result = new GuessingGame(userInterface, 1).playGame();
    assert.equal(result, true);
  });

  it("When the user guesses the wrong number, the game continues", () => {
    const userInterface = {
      askForNumber: sinon.stub().returns("1"),
    };
    const result = new GuessingGame(userInterface, 2).playGame();
    assert.equal(result, false);
  });

  it("When the user guesses the right number, the counter reflects the correct number of attempts", () => {
    const userInterface = {
      askForNumber: sinon.stub().returns("1"),
      userWon: sinon.mock().withArgs(1).once(),
    };
    new GuessingGame(userInterface, 1).playGame();
    userInterface.userWon.verify();
  });

  it("When the user guesses the wrong number, which was too high, the game tells them that they were too high", () => {
    const userInterface = {
      askForNumber: sinon.stub().returns("1"),
      userGuessedHigh: sinon.mock().once(),
    };
    const result = new GuessingGame(userInterface, 2).playGame();
    userInterface.userGuessedHigh.verify();
  });
});
//Output
// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
// You got it! You took 3 attempts!
