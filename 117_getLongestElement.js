function getLongestElement(arr) {
  return arr.length > 0 ? arr.sort((a, b) => a.length < b.length)[0] : '';
}
