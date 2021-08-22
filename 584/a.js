var input = readline().split(" ");
var n = parseInt(input[0]);
var t = input[1];

print(
  t < 10 ? t.repeat(n) : t === "10" && n !== 1 ? "1".repeat(n - 1) + 0 : -1
);
