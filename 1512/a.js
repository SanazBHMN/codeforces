var t = +readline();

for (var i = 0; i < t; i++) {
  var n = +readline();
  var a = readline().split(" ").map(Number);
  var first = a[0];
  var second = a[1];

  for (var j = 2; j < a.length; j++) {
    if (first === second && a[j] !== first) {
      print(j + 1);
      break;
    } else if (first !== second && a[j] === first) {
      print(2);
      break;
    } else if (first !== second && a[j] === second) {
      print(1);
      break;
    }
  }
}
