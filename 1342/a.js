var t = +readline();

while (t--) {
  var integers = readline().split(" ").map(Number);
  var dollors = readline().split(" ").map(Number);
  var x = integers[0];
  var y = integers[1];
  var a = dollors[0];
  var b = dollors[1];
  var min = Math.min(x, y);
  var sum = 0;
  print(x, y);
  print(a, b);

  print(min * b + Math.abs(x - y) * a);
}
