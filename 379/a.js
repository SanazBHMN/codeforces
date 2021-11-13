var input = readline().split(" ").map(Number);
var a = input[0];
var b = input[1];
var sum = a;

while (a >= b) {
  var nc = parseInt(a / b);
  sum += nc;
  a = nc + (a % b);
}

print(sum);
