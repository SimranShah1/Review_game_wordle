const fs = require("fs");
const readline = require("readline-sync");
const chalk = require("chalk");
const compareWords = require("./compareWords");

function readWordsFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent.split("\n").map((word) => word.trim());
}

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

// function compareWords(target, guess) {
//   if (target.length !== guess.length) {
//     return false;
//   }

//   const result = [];

//   for (let i = 0; i < target.length; i++) {
//     const guessedLetter = guess[i];
//     const isPresent = target.includes(guessedLetter);
//     const isInCorrectPosition = target[i] === guessedLetter;

//     result.push({
//       index: i,
//       guessedLetter,
//       isPresent,
//       isInCorrectPosition,
//     });
//   }

//   return result;
// }

function displayResult(comparisonResult) {
  console.log("Result:");
  for (const result of comparisonResult) {
    const index = result.index;
    const guessedLetter = result.guessedLetter;
    const isPresent = result.isPresent;
    const isInCorrectPosition = result.isInCorrectPosition;

    const indexText = `Index: ${index}`;
    const guessedLetterText = `Guessed Letter: ${guessedLetter}`;
    const isPresentText = isPresent ? chalk.green("Present: true") : chalk.red("Present: false");
    const isInCorrectPositionText = isInCorrectPosition ? chalk.yellow("Correct Position: true") : chalk.red("Correct Position: false");

    console.log(`${indexText}, ${guessedLetterText}, ${isPresentText}, ${isInCorrectPositionText}`);
  }
}

function playWordle(words) {
  const targetWord = getRandomWord(words);
  console.log(targetWord);
  let attempts = 6;

  console.log("Welcome to Wordle! You have 6 attempts to guess the word.");

  for (let attempt = 1; attempt <= 6; attempt++) {
    const userGuess = readline.question(`Attempt ${attempt}: Enter your guess: `);

    if (userGuess.length !== 5) {
      console.log("Please enter a five-letter word.");
      continue;
    }

    const comparisonResult = compareWords(targetWord, userGuess);
    displayResult(comparisonResult);
  }
}

function main() {
  const filePath = "sgb-words.txt";
  const words = readWordsFromFile(filePath);

  console.log('Type "Start" to start the game...');
  const start = readline.question("Start: ");

  if (start.toLowerCase() === "start") {
    playWordle(words);
  } else {
    console.log("Game not started. Type 'Start' to begin.");
  }
}

main();

module.exports = {
  getRandomWord,
  displayResult,
  playWordle,
};
