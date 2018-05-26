function countCharacter(str, char) {
  return str.split('').filter(letter => letter === char).length;
}
