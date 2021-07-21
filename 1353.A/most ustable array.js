var t = +readline();

while (t--) {
  var input = readline().split(" ").map(Number);
  var n = input[0];
  var m = input[1];

  if (n === 1) print(0);
  else if (n === 2) print(m);
  else print(2 * m);
}
