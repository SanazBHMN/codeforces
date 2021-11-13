var input1 = readline().split(" ").map(Number);
var s = input1[0];
var n = input1[1];
var d = [];

while (n--) {
  d.push(readline().split(" ").map(Number));
}

d.sort((x, y) => x[0] - y[0]);

// print(d)
for (var i = 0; i < d.length; i++) {
  if (s <= d[i][0]) {
    break;
  }
  s += d[i][1];
}
print(i === d.length ? "YES" : "NO");
