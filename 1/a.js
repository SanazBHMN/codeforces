var input = readline().split(' ').map(Number);
var n = input[0];
var m = input[1];
var a = input[2];


if((n * m) % (a * a) === 0) {
    print('*')
    print((n * m) / (a * a));
} else {
    print('**')
    print(parseInt(((n + Math.abs(n - a)) * (m + Math.abs(m - a))) / (a * a)));
}


var input = readline().split(' ').map(Number);
var n = input[0];
var m = input[1];
var a = input[2];


if(n % a !== 0) {
    print('*')
    n = n + parseInt(n / a);
    print(n)
}
if(m % a !== 0) {
    print('#')
    m = m + parseInt(n / a);
    print(m)
}

print((n * m) / (a * a));


var input = readline().split(' ').map(Number);
var n = input[0];
var m = input[1];
var a = input[2];

while(n % a !== 0) {
    n++;
}

while(m % a !== 0) {
    m++;
}

print((n * m) /( a * a));