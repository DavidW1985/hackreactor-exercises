function getOddElementsAtProperty(obj, key) {
  let nums = Array.isArray(obj[key]) ? obj[key] : [];
  return nums.filter(val => val % 2 !== 0);
}
