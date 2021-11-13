var n = +readline(); //employees
var halfN = parseInt(n / 2);
var count = 0;

for(var i = 0; i < halfN; i++) {
    if((n - 1) % i === 0) {
        count++;
    }
}
print(count);