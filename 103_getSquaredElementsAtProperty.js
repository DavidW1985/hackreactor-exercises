function getSquaredElementsAtProperty(obj, key) {
  let numbers = Array.isArray(obj[key]) ? obj[key] : [];
  return numbers.map(num => Math.pow(num, 2));
}
