function getLengthOfLongestElement(arr) {
  arr.sort((a, b) => a.length < b.length);
  return arr.length > 0 ? arr[0].length : 0;
}
