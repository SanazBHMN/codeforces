var t = +readline();

while (t--) {
  var n = +readline();
  var weights = readline().split(" ").map(Number);
  var arr = [0, 0];
  var sum = 0;

  for (var weight of weights) {
    sum += weight;
    arr[weight % 2] += 1;
  }
  var ones = arr[1];
  if (ones % 2 || (sum % 4 && !ones)) {
    print("NO");
    continue;
  }
  print("YES");
}
