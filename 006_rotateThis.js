// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// If you double the string, you'll be to trivially find another string inside it using regular String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

function isRotated(str1, str2) {
  let doubled = str1.repeat(2);
  return doubled.includes(str2);
}

let output = isRotated('hello world', 'orldhello w');
console.log(output);
