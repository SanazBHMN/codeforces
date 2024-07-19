var t = +readline();

for (var i = 0; i < t; i++) {
  var input = readline().split(" ").map(Number);
  var a = input[0];
  var b = input[1];
  var c = input[2];

  print(b > a && b < c ? "STAIR" : b > a && b > c ? "PEAK" : "NONE");
}
