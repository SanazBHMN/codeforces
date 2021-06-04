var input = readline().split(" ").map(Number);
var n = input[0]; // rows
var m = input[1];
var colorQnt = 0;

for (var i = 0; i < n; i++) {
  var columns = readline().split(" ");
  for (var j = 0; j < m; j++) {
    if (columns[j] === "C" || columns[j] === "M" || columns[j] === "Y") {
      colorQnt++;
    }
  }
}

print(colorQnt ? "#Color" : "#Black&White");
