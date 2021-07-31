var t = +readline();

for(var i = 0; i < t; i++) {
    var input = readline().split(' ').map(Number);
    var a = input[0];
    var b = input[1];
    var diff = Math.abs(a - b);
    
    if(a === b) {
        print(0);
    } else if(a < b) {
        print(diff % 2 ? 1 : 2)
    } else {
        print(diff % 2 ? 2 : 1)
    }
}