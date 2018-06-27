function getOddLengthWordsAtProperty(obj, key) {
  let arr = Array.isArray(obj[key]) ? obj[key] : [];
  return arr.filter(word => word.length % 2 !== 0);
}
