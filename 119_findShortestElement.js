function findShortestElement(arr) {
  return arr.length > 0 ? arr.sort((a, b) => b.length < a.length)[0] : '';
}
