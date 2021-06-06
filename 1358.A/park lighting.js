var t = +readline();

for (var i = 0; i < t; i++) {
  var input = readline().split(" ").map(Number);
  var tableSize = input[0] * input[1];

  print(tableSize % 2 ? Math.ceil(tableSize / 2) : tableSize / 2);
}
