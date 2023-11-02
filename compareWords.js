function compareWords(target, guess) {
    if (target.length !== guess.length) {
      return false;
    }
  
    const result = [];
  
    for (let i = 0; i < target.length; i++) {
      const guessedLetter = guess[i];
      const isPresent = target.includes(guessedLetter);
      const isInCorrectPosition = target[i] === guessedLetter;
  
      result.push({
        index: i,
        guessedLetter,
        isPresent,
        isInCorrectPosition,
      });
    }
  
    return result;
  }
  module.exports = compareWords;