var t = +readline();

while (t--) {
  var n = +readline();
  var weights = readline().split(" ").map(Number);
  var sum_weights = weights.reduce((acc, item) => acc + item);
  var ones = 0;
  var twos = 0;
  var sum = weights[0];

  for (var i = 0; i < n; i++) {
    if (weights[i] === 1) {
      ones++;
    } else {
      twos++;
    }
  }
  if (ones % 2) {
    print("NO");
    continue;
  }
  if (sum_weights % 4 && ones === 0) {
    print("NO");
    continue;
  }
  print("YES");
}
