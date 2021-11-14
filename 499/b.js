var numberOfWords = readline().split(" ").map(Number);
var n = numberOfWords[0];
var m = numberOfWords[1];
var dict = {};
var result = [];

for (var i = 0; i < m; i++) {
  var words = readline().split(" ");
  dict[words[0]] = words[1];
}

var lecture = readline().split(" ");

for (var j = 0; j < n; j++) {
  if (lecture[j].length <= dict[lecture[j]].length) {
    result.push(lecture[j]);
  } else {
    result.push(dict[lecture[j]]);
  }
}

print(result.join(" "));
