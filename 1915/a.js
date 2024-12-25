var t = +readline();

for (var i = 0; i < t; i++) {
  var digits = readline().split(" ").map(Number);

  if (digits[0] == digits[1]) {
    print(digits[2]);
  } else if (digits[0] == digits[2]) {
    print(digits[1]);
  } else {
    print(digits[0]);
  }
}
