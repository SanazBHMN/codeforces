var t = +readline();

for (var i = 0; i < t; i++) {
  var clock = readline().split(" ").map(Number);

  print((24 - clock[0]) * 60 - clock[1]);
}
