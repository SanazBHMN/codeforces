var t = +readline();

for (var i = 0; i < t; i++) {
  var digits = readline().split(" ").map(Number);
  var sortedDigits = digits.sort((x, y) => x - y);

  print(sortedDigits[1] + sortedDigits[2] >= 10 ? "YES" : "NO");
}
