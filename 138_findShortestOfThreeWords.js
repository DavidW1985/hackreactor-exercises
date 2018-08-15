function findShortestOfOfThreeWords(word1, word2, word3) {
  return [...arguments].sort((a, b) => b.length < a.length)[0];
}
