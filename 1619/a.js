var t = +readline();

for (var i = 0; i < t; i++) {
  var s = readline();

  if (s.length % 2 === 0) {
    var midIndex = s.length / 2 - 1;

    if (s.slice(0, midIndex + 1) === s.slice(midIndex + 1)) {
      print("YES");
    } else {
      print("NO");
    }
  } else {
    print("NO");
  }
}
