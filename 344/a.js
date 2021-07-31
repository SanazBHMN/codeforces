var n = +readline(); // number of magnets
var magnetArray = [];
var group = 0;

for (var i = 0; i < n; i++) {
  var magnets = readline();
  magnetArray.push(magnets);
}

for (var j = 0; j < n; j++) {
  if (magnetArray[j] !== magnetArray[j + 1]) {
    group++;
  }
}

print(group);
