function getLongestWordOfMixedElements(arr) {
  let words = arr.filter(el => typeof el === 'string');
  return words.length > 0 ? words.sort((a, b) => a.length < b.length)[0] : '';
}
