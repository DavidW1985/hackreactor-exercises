function getElementOfArrayProperty(obj, key, index) {
  return Array.isArray(obj[key]) ? obj[key][index] : [][0];
}
