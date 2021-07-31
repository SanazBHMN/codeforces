var n = readline();
var s = readline().split("");
var step = 0;

for (var i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) {
    step++;
  }
}
print(step);
