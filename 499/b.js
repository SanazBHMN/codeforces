var numberOfWords = readline().split(" ").map(Number);
var n = numberOfWords[0];
var m = numberOfWords[1];
var dict = {};
var result = [];

for (var i = 0; i < m; i++) {
  var words = readline().split(" ");
  dict[i] = [words[0], words[1]];
}

var lecture = readline().split(" ");

for (var j = 0; j < n; j++) {
  for (var key in dict) {
    if (dict[key].includes(lecture[j])) {
      if (dict[key][0].length <= dict[key][1].length) {
        result.push(dict[key][0]);
      } else {
        result.push(dict[key][1]);
      }
    }
  }
}

print(result.join(" "));
