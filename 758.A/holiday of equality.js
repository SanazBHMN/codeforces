var n = +readline();
var a = readline().split(' ').map(Number); // welfare of i-th citizen
var max = Math.max(...a);
var sum = 0;

for(var i = 0; i < a.length; i++) {
    sum += (max - a[i]);
}
print(sum);