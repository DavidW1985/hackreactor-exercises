function findShortestWordAmongMixedElements(arr) {
  let words = arr.filter(word => typeof word === 'string');
  return words.length > 0 ? words.sort((a, b) => a.length - b.length)[0] : '';
}


