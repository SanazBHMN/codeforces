var n = +readline();
var a = readline().split(" ").map(Number);
var score = [0, 0];
var turn = 0;

for (var i = 0; i < n; i++, turn++) {
  var first = a[0];
  var last = a[a.length - 1];

  if (first > last) {
    score[turn % 2] += first;
    a.shift(first);
  } else {
    score[turn % 2] += last;
    a.pop();
  }
}
print(score.join(" "));
