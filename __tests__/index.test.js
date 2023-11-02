// const readline = require("readline-sync");
// const chalk = require("chalk");
// const playWordle = require('../index'); // Import the functions to be tested

const compareWords = require('../compareWords'); 

describe('compareWords', () => {
  it('should return an array of comparison results for correct input', () => {
    const target = 'apple';
    const guess = 'apple';

    const result = compareWords(target, guess);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(target.length);
    expect(result[0]).toEqual({
      index: 0,
      guessedLetter: 'a',
      isPresent: true,
      isInCorrectPosition: true,
    });
    // Add more assertions for other elements of the result array.
  });

 
  it('should handle different case sensitivity correctly', () => {
    const target = 'Apple';
    const guess = 'aPpLe';

    const result = compareWords(target, guess);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(target.length);
    // Add assertions for the comparison results.
  });

  // Add more test cases for different scenarios.
});
