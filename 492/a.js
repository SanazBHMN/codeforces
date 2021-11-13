var n = +readline();
var cubes = 0;

for (var i = 1; cubes <= n; i++) {
  var sum = parseInt((i * (i + 1)) / 2);
  cubes += sum;
  // print("*", i, sum, cubes);
}

// print(cubes == n ? i - 1 : i - 2);
print(i - 2);
