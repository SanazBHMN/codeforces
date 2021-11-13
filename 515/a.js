var input = readline().split(" ").map(Number);
var a = input[0];
var b = input[1];
var s = input[2];
var routeLength = Math.abs(a) + Math.abs(b);
var flag;

if (s == routeLength) flag = 1;
else if (s < routeLength) flag = 0;
// when s > routeLength
else {
  if (s % 2 === 0 && routeLength % 2 === 0) flag = 1;
  else if (s % 2 === 1 && routeLength % 2 === 1) flag = 1;
  else flag = 0;
}

print(flag === 1 ? "Yes" : "No");
