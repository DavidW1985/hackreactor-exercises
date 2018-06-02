function removeNumberValues(obj) {
  Object.keys(obj).forEach(key => {
    if (Number.isInteger(obj[key])) {
      delete obj[key];
    }
  });
}
