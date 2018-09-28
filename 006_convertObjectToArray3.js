function convertObjectToList(obj) {
  // let keys = Object.keys(obj);
  // return keys.map(function(el) {
  //   return [el, obj[el]];
  // });

  // return Object.keys(obj).reduce((acc, next) => {
  //   acc.push([next, obj[next]]);
  //   return acc;
  // }, []);

  return Object.entries(obj);
}
