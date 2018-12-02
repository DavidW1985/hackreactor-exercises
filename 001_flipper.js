function flipper(input) {
  let flipped = [];
  for (var i = 1; i < input.length; i += 2) {
    flipped.push(input[i], input[i - 1]);
  }
  return flipped.join('');
}

let output = flipper('check out how interesting this problem is, it\'s insanely interesting!');
console.log(output);
