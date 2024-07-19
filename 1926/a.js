var t = +readline();

for (var i = 0; i < t; i++) {
  var s = readline();

  print(s.split("B").length - 1 > s.split("A").length - 1 ? "B" : "A");
}
