function getEvenLengthWordsAtProperty(obj, key) {
  let words = Array.isArray(obj[key]) ? obj[key] : [];
  return words.filter(word => word.length % 2 === 0);
}
