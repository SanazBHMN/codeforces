var input = readline().split(" ").map(Number);
var n = input[0];
var x = input[1];
var c = 0;

for (var i = 1; i <= n; i++) {
  if (x % i === 0 && x / i <= n) c++;
}
print(c);
