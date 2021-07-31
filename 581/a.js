var input = readline().split(' ').map(Number);
var a = input[0]; // red
var b = input[1]; // blue

var min = Math.min(a, b);
var max = Math.max(a, b);

print(min, parseInt((max - min) / 2));