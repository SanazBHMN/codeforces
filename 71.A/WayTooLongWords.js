var word = "supercalifragilisticexpialidocious";
console.log(word.length);

if (word.length < 10) {
  console.log(word);
} else {
  var newWordArray = [];
  newWordArray.push(word.length-2);

  newWordArray.unshift(word.charAt(0));
  newWordArray.push(word.charAt(word.length - 1));
  console.log(newWordArray);
  newWordArray = newWordArray.join('');
  // join() returns a new string
  console.log(newWordArray);
}
