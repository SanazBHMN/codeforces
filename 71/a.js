var n = +readline();

for (var i = 0; i < n; i++) {
  var word = readline();

  if (word.length > 10) {
    print(word[0] + (word.length - 2) + word[word.length - 1]);
  } else {
    print(word);
  }
}
