var input = readline().split(" ").map(Number);
var n = input[0];
var m = input[1];
var houses = readline().split(" ").map(Number);
houses.unshift(1);
var sum = 0;

for (var i = 0; i < m; i++) {
  sum += houses[i + 1] - houses[i] + (houses[i + 1] >= houses[i] ? 0 : n);
}

print(sum);
