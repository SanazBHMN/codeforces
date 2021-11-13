var input = readline().split(' ').map(Number);
var n = input[0];
var k = input[1];
var y = readline().split(' ').map(Number);
var count = 0;
 
for(var i = 0; i < n; i++) {
    if((y[i] + k) <= 5) {
        count++;        
    }
}
print(parseInt(count / 3));