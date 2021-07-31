var n = +readline(); // number of friends
var p = readline().split(' ').map(Number);
var dict = {}

for(var i = 1; i <= n; i++) {
    dict[p[i]] = i;
}

for(var key in dict) {
    console.log(dict[n]);
}

print(dict)