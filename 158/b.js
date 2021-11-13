var n = +readline();
var s = readline().split(" ").map(Number);
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

for (var i = 0; i < input.length; i++) {
  if (s[i] === 1) {
    c1++;
  } else if (s[i] === 2) {
    c2++;
  } else if (s[i] === 3) {
    c3++;
  } else {
    c4++;
  }
}

var result = c4 + Math.min(c3, c1); // + Math.min(c2, Math.abs(c2 - c1));
