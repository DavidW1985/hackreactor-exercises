function getFirstElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key][0] : undefined;
}
