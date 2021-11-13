var t = +readline();

for (var i = 0; i < t; i++) {
  var input = readline().split(" ").map(Number);
  var sum = input.reduce((acc, i) => sum + i, 0);
  var avg = sum / 3;

  if (sum % 3) {
    if (input[0] <= avg && input[1] <= avg && input[2] <= avg) {
      print("YES");
    } else {
      print("NO");
    }
  } else {
    print("NO");
  }
}
