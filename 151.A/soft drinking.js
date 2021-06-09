var input = readline().split(' ').map(Number);
 
var n = input[0];
var kl = input[1] * input[2];
var nl = input[6];
var cd = input[3] * input[4];
var p = input[5];
var np = input[7];
 
print(parseInt(Math.min(parseInt((kl / nl)), cd, parseInt((p / np))) / n));