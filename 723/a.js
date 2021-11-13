var x = readline().split(' ').map(Number).sort((x, y) => x - y);
var middlePoint = parseInt((x[x.length-1] + x[0]) / 2);
 
print(Math.abs(middlePoint - x[0] + Math.abs(middlePoint - x[x.length-1])));