var t = +readline();

for (var i = 0; i < t; i++) {
  var input = readline().split(" ").map(Number);
  var area = input[0] * input[1];
  var n = input[2];
  var c = 1;

  while (area % 2 === 0) {
    c *= 2;
    area /= 2;
  }

  print(c >= n ? "YES" : "NO");
}
