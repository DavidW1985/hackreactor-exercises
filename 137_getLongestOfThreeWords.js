function getLongestOfThreeWords(word1, word2, word3) {
  return [...arguments].sort((a, b) => a.length < b.length)[0];
}
