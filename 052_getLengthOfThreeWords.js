function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;

  // OR

  // return [...arguments].map(word => word.length).reduce((a, b) => a + b);
}
