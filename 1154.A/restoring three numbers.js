var x = readline().split(' ').map(Number).sort((x, y) => x - y);
var max = x[x.length - 1];
var randomAbc = [];
print(max)
for(var i = 0; i < x.length - 1; i++) {
    randomAbc.push(Math.abs(max - x[i]));
}

print(randomAbc.join(' '));