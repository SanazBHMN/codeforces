var t = +readline();

while (t--) {
  var n = +readline();
  var weights = readline().split(" ").map(Number);
  var o = (sum = 0);
  for (var weight of weights) {
    sum += weight;
    o += weight % 2;
  }
  if (o % 2 || (sum % 4 && !o)) {
    print("NO");
    continue;
  }
  print("YES");
}
