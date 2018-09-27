function getAllKeys(obj){
  // return Object.getOwnPropertyNames(obj);

  // Or

  return Object.entries(obj).map(pair => pair[0]);
}
