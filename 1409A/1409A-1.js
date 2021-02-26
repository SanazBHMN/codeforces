var testCase = +readline();

for (var i = 0; i < testCase; i++) {
  min = 0;
  var input = readline().split(" ").map(Number);
  var a = input[0];
  var b = input[1];
  b = Math.abs(a - b);
  print(Math.ceil(b / 10));
}
