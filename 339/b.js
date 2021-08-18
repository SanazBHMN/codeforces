var input = readline().split(' ').map(Number);
var n = input[0];
var m = input[1];
var houses = readline().split(' ').map(Number);
var position = 1;
var sum = 0;

for(var i = 0; i < m; i++) {
    if(position <= houses[i]) {
        sum += houses[i] - position;
    } else {
        sum += n + houses[i] - position;
    }
    position = houses[i];
}

print(sum);